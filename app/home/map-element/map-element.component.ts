import {Component, ViewChild, ElementRef, AfterViewInit,OnInit, Inject,Output, EventEmitter} from '@angular/core';
import { AuthService } from '../../user/auth.service';
import { GoogleMapsService } from '../../common/index';
import { MapElementService } from './map-element.service';


@Component({
	selector: 'map-element',
    templateUrl:'./app/home/map-element/map-element.component.html',
		styles:[`#map {
        width:700px;height:500px;
      }`]
})

export class MapComponent implements OnInit {
		ngOnInit(): void {
		}
	user:any;
	map:any
	@ViewChild("map") myMap:ElementRef;
	@Output() generationFinished = new EventEmitter();
	
	constructor(
	private mapService:GoogleMapsService,
	private mapServ:MapElementService){
	}
  ngAfterViewInit() {
  	
    this.map = this.myMap.nativeElement;
    
    this.mapServ.insertTruckRecords().subscribe( (res:any) => {
    	
    	this.generationFinished.emit();
    	
    	console.log(res);
    	
    })
    
    //assuming that this will be in ireland, hardcoding map..
    //this part is only necesarry if we would not be displaying first truck at the start, but would wait for the user to do it.
    //for demonstration purpose, first truck is selected, so technically this even can be commented out
    this.mapService.initMap(this.map);
  }


}