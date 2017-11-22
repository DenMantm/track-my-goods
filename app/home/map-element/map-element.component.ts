import {Component, ViewChild, ElementRef, AfterViewInit,OnInit, Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../user/auth.service';
import { JQUERY_TOKEN, GoogleMapsService } from '../../common/index';


@Component({
	selector: 'map-element',
    templateUrl:'./app/home/map-element/map-element.component.html',
		styles:[`#map {
        height: 100%;
      }`]
})

export class MapComponent implements OnInit {
	
	
		ngOnInit(): void {
		}
	user:any;
	map:any
	@ViewChild("map") myMap:ElementRef;
	constructor(
	private route:ActivatedRoute,	
	private auth:AuthService,
	@Inject(JQUERY_TOKEN) private $,
	private mapService:GoogleMapsService){
	}
  ngAfterViewInit() {
    this.map = this.myMap.nativeElement;
    this.mapService.initMap(this.map);
    this.mapService.drawRoute();
  }
	ngOnChanges(){
	}

}