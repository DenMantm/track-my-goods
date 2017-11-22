import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
//import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";


@Injectable()
export class MapElementService{
    
    constructor(private router:Router,private http:Http){
    }
    ngAfterViewInit(){
    }
    
    //get truck list
    //this is something that would be pulled from the database, and could be extended with
    //functionality to add elements based on the user premissions
    getTruckList(){
       return this.http.get('/api/getTruckList');//.do(
    //         resp =>{ if(resp){
    //             console.log('working')
    //             this.currentUser = null
    //             this.router.navigate(['/landingPage']);
    //         }
         //}).subscribe();
    }
    
    //this will be fake function but idea would be that there is an
    // backend service that would provide this information.. IDealy f
    // Im not sure what would be request rate and how often we should refresh location on map
    //
    
    insertTruckRecords(){
        return this.http.get('/api/insertTruckRecords');
    }
    
    
    getTruckRecords(){
        return this.http.get('/api/getTruckRecords');
    }

    
}