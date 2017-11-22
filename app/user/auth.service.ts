import { Injectable } from '@angular/core';
import { IUser } from './user.model'
import { Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
//import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs/Subject";


@Injectable()
export class AuthService{
    currentUser:IUser;
    loginSubject:any;
    
    
    constructor(private router:Router,private http:Http){
    }

    isAuthenticated(){
    
        return !!this.currentUser;
    }
    isAuthenticatedOnServer(){
       return this.http.get('/api/currentIdentity').map( (response:any) =>{
            if(response._body){
                this.currentUser = response.json();
                return response.json();
            }
            else{
                return {}
            }
        }).toPromise();
    }

    login(username,password){
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers:headers});
        let loginInfo = {username:username,password:password};

        this.loginSubject = this.http.post('/api/login',JSON.stringify(loginInfo),options);

        this.loginSubject.subscribe(resp => {
            if(resp){
                
                if(resp.json().status == 'failed'){
                    console.log('Failed to login');
                    }
                else{
                 this.currentUser = resp.json().user;
                    this.router.navigate(['/home']);
                }

            }
            else{
                console.log('No Response');
                
            }
            
        });
            
        return this.loginSubject;
            
    }

    logout(){

             this.http.get('/api/logout').do(
            resp =>{ if(resp){
                console.log('working')
                this.currentUser = null
                this.router.navigate(['/landingPage']);
            }
        }).subscribe();
    }
    
    getCurrentUser(){
        return this.currentUser;
    }
    
}