import {Component, ViewChild, ElementRef, AfterViewInit,OnInit, Inject} from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ActivatedRoute } from '@angular/router';
import { JQUERY_TOKEN, GoogleMapsService } from '../common/index';
import { MapElementService } from './map-element/map-element.service';


@Component({
    templateUrl:'./app/home/home.component.html',
		styles:[`h1 {color:red;}
				`]
})


export class HomeComponent implements OnInit {
		ngOnInit(): void {
			this.user = this.route.snapshot.data['user'];
		}
	user:any;
	truckFleet:any;
	truckRootRecords:any;
	
	
	//trucks to display...
	currentActive:any
	currentHistorical:any;
	
	
	constructor(
	private route:ActivatedRoute,	
	private auth:AuthService,
	private mapService:GoogleMapsService,
	private mapServ:MapElementService){
	}
  ngAfterViewInit() {
    	this.mapServ.getTruckList().subscribe((res:any)=>{
    		if(res){
    			console.log(res);
    			this.truckFleet = JSON.parse(res._body);
    		}
    		else{
    			console.log('no results returned from the db...');
    		}
    		})
  }
	ngOnChanges(){
		this.user = this.auth.getCurrentUser();
	}
	
	
	triggerDataPull(){
		
		this.mapServ.getTruckRecords().subscribe((res:any)=>{
			
			this.truckRootRecords = JSON.parse(res._body);
			console.log(this.truckRootRecords);
			//select first truck
			let firstTruckId = this.truckRootRecords[0].truck_id;
			
			
			this.displayTruck(firstTruckId);
		
			
		})
		
		
	}
	displayTruck(truckId){

			this.currentActive = this.truckRootRecords.filter(item => 
			item.truck_id == truckId && item.is_active == true )[0];
			
			this.currentHistorical = this.truckRootRecords.filter(item =>
			item.truck_id == truckId && item.is_active != true);
			
			console.log(this.currentActive);
			console.log(this.currentHistorical);
			
			    
    		this.mapService.drawRoute(this.currentActive);
			
	}
	
	
	
	
	

}