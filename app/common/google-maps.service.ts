import { Injectable,Inject } from '@angular/core';
import {JQUERY_TOKEN} from './jQuery.service';

declare let google
@Injectable()
export class GoogleMapsService{
    
    autoDriveSteps:any = new Array();
    speedFactor:any = 100;
    map:any
    route:any
    marker:any;
    directionsDisplay:any;
    directionsService:any;

constructor(@Inject(JQUERY_TOKEN) private $){
}


initMap(mapEle) {
    this.map = new google.maps.Map(mapEle, {
          center: {lat: 53.142367, lng: -7.692054},
          zoom: 8
});
}

//generating fake routes here....

 generateLat(){
      	return parseFloat((Math.random() * (54.177045 - 52.636095) + 52.636095).toFixed(6));
      }
      
 generateLong(){
      	return  parseFloat((Math.random() * (-9.034711 - (-6.330045)) + (-6.330045)).toFixed(6));
      }


setAnimatedRoute(origin, destination, map) {
    // init routing services
    let directionsService = new google.maps.DirectionsService;
    let directionsRenderer = new google.maps.DirectionsRenderer({
        map: map
    });

    //calculate route
    directionsService.route({
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
        },
        (response, status)=> {
            if (status == google.maps.DirectionsStatus.OK) {
                // display the route
                directionsRenderer.setDirections(response);

                // calculate positions for the animation steps
                // the result is an array of LatLng, stored in autoDriveSteps
                this.autoDriveSteps = new Array();
                let remainingSeconds = 0;
                let leg = response.routes[0].legs[0]; // supporting single route, single legs currently
                leg.steps.forEach((step) => {
                    let stepSeconds = step.duration.value;
                    let nextStopSeconds = this.speedFactor - remainingSeconds;
                    while (nextStopSeconds <= stepSeconds) {
                        let nextStopLatLng = this.getPointBetween(step.start_location, step.end_location, nextStopSeconds / stepSeconds);
                        this.autoDriveSteps.push(nextStopLatLng);
                        nextStopSeconds += this.speedFactor;
                    }
                    remainingSeconds = stepSeconds + this.speedFactor - nextStopSeconds;
                });
                if (remainingSeconds > 0) {
                    this.autoDriveSteps.push(leg.end_location);
                }
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
}
// helper method to calculate a point between A and B at some ratio
getPointBetween(a, b, ratio) {
    return new google.maps.LatLng(a.lat() + (b.lat() - a.lat()) * ratio, a.lng() + (b.lng() - a.lng()) * ratio);
}

// in the real application this would take feed from the backend instead of the generation
startRouteAnimation(marker) {
    let autoDriveTimer = setInterval( () => {
            // stop the timer if the route is finished
            if (this.autoDriveSteps.length === 0) {
                clearInterval(autoDriveTimer);
            } else {
                // move marker to the next position (always the first in the array)
                marker.setPosition(this.autoDriveSteps[0]);
                // remove the processed position
                this.autoDriveSteps.shift();
            }
        },
        1000);
}



placeMarker(location) {
    return new google.maps.Marker({
        position: location, 
        map: this.map
    });
}

drawRoute(mapItem){

    // Resetting map
    
    this.initMap(this.$('#map')[0])
    
    if (this.directionsDisplay != undefined) {
        this.directionsDisplay.set('directions', null)
        this.directionsDisplay.setMap(null);
        this.directionsDisplay.setDirections({routes: []});
        this.directionsDisplay = null;
    }
    
    if(this.route != undefined){
        this.route.setMap (null);
        
    }
    
    
    this.directionsDisplay = new google.maps.DirectionsRenderer({
          map: this.map
    });
    
    
    if(this.marker != undefined){
        this.marker.setMap(null);
    }
    
    
    
        let point1 = {lat: mapItem.start_lat, lng: mapItem.start_lng};
        let point2 = {lat: mapItem.finish_lat, lng: mapItem.finish_lng};

        // Set destination, origin and travel mode.
        let request = {
          destination: point1,
          origin: point2,
          travelMode: 'DRIVING'
        };

        this.marker = this.placeMarker(point1);

                // Pass the directions request to the directions service.
      this.directionsService = new google.maps.DirectionsService();
      
       this.route = this.directionsService.route(request, (response, status) => {
          if (status == 'OK') {
            // Display the route on the map.
            this.directionsDisplay.setDirections(response);
            this.setAnimatedRoute(point1, point2, this.map);
            this.startRouteAnimation(this.marker);
          }
        });
    
    
    

    
}





}