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
    
    //There would be a method that would return current location of the specific truck
    
    
    //get truck list
    //this is something that would be pulled from the database, and could be extended with
    //functionality to add elements based on the user premissions
    getTruckList(){
       return this.http.get('/api/getTruckList');

    }

    
    insertTruckRecords(){
        return this.http.get('/api/insertTruckRecords');
    }
    
    
    getTruckRecords(){
        return this.http.get('/api/getTruckRecords');
    }

    
}