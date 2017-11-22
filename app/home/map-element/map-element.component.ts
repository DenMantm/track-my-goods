import {Component, ViewChild, ElementRef, AfterViewInit,OnInit, Inject,Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../user/auth.service';
import { JQUERY_TOKEN, GoogleMapsService } from '../../common/index';
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
    	
    	
    	console.log('Finishing insertion');
    	
    	this.generationFinished.emit();
    	
    	console.log(res);
    	
    })
    
    //assuming that this will be in ireland, hardcoding
    this.mapService.initMap(this.map);
  }
	ngOnChanges(){
	}

}