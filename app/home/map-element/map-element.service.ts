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
    
    
    //get generated fake truck list
    getTruckList(){}
    
    
    //fake truck generation and triggering
    generateFakeTruckList(){}
    
    //this will be fake function but idea would be that there is 
    getTruckLocation(){}
    
    
    // isAuthenticated(){
    //   // console.log(new Error().stack);
    //  //   console.log("DEBUG HERE: "+!!this.currentUser);
    // //    if(!!!this.currentUser){
    // //         return !!this.isAuthenticatedOnServer().then(res=>{
    // //         if(res.id == undefined){
    // //           return false;
    // //         }else{
    // //           return true;
    // //         }
    // //     });


    // //    }else{
    // //        return true;
    // //    }
    
    //     return !!this.currentUser;
    // }
    // isAuthenticatedOnServer(){
    //   return this.http.get('/api/currentIdentity').map( (response:any) =>{
    //         if(response._body){
    //             this.currentUser = response.json();
    //             return response.json();
    //         }
    //         else{
    //             return {}
    //         }
    //     }).toPromise();
    // }

    // login(username,password){
    //     //spin authentication here and if succesfull
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     let options = new RequestOptions({headers:headers});
    //     let loginInfo = {username:username,password:password};

    //     this.loginSubject = this.http.post('/api/login',JSON.stringify(loginInfo),options);
        
        
        
        
        
        
    //     console.log(loginInfo);

    //     // return this.http.post('/api/login',JSON.stringify(loginInfo),options).do(
    //     //     resp =>{ if(resp){
    //     //         this.currentUser = resp.json().user;
    //     //         this.router.navigate(['/home']);
    //     //     }
    //     // }).catch(error =>{
    //     //         return Observable.of(false);
    //     //     })
    //     this.loginSubject.subscribe(resp => {
    //         if(resp){
    //             //console.log();
                
    //             if(resp.json().status == 'failed'){
    //                 console.log('Failed to login');
    //                 }
    //             else{
    //              this.currentUser = resp.json().user;
    //                 this.router.navigate(['/home']);
    //             }

    //         }
    //         else{
    //             console.log('No Response');
                
    //         }
            
    //     });
            
    //     return this.loginSubject;
            
        
    //     // this.currentUser = {id:1, 
    //     //             username:username,
    //     //             firstName:'Deniss' }

        
    //     //return true
    // }
    //     changeUserSettings(updatedUser){
    //     //spin authentication here and if succesfull
    //     let headers = new Headers({'Content-Type':'application/json'});
    //     let options = new RequestOptions({headers:headers});
    //     //let loginInfo = {username:username,password:password};

    //     console.log(updatedUser);

    //     return this.http.post('/api/changeSettings',JSON.stringify(updatedUser),options).do(
    //         resp =>{ if(resp){
    //             // this.currentUser = resp.json().user;
    //             // this.router.navigate(['/home']);
    //             console.log('SPINNNINNNGG!!!');
                
    //         }
    //     }).catch(error =>{
    //             return Observable.of(false);
    //         })
    //     // this.currentUser = {id:1, 
    //     //             username:username,
    //     //             firstName:'Deniss' }

        
    //     //return true
    // }

    // logout(){

    //          this.http.get('/api/logout').do(
    //         resp =>{ if(resp){
    //             console.log('working')
    //             this.currentUser = null
    //             this.router.navigate(['/landingPage']);
    //         }
    //     }).subscribe();
    // }
    
    
}