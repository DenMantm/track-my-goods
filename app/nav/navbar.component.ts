import { Component, Inject, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { JQUERY_TOKEN } from '../common/index';
import { AuthService } from '../user/auth.service';
import { IUser } from '../user/user.model';

@Component({
    selector: 'navbar-component',
    templateUrl: 'app/nav/navbar.component.html'
    //     styles: [`.nav.navbar-nav {font-size:15px;}
    // #searchForm {margin-right: 100px;}
    // @media (max-width:1200px){#searchForm {display:none} }
    // li > a.active{color:red;}`]
})

export class NavbarComponent {
    currentUser:IUser;
    constructor(@Inject(JQUERY_TOKEN) private $,private auth:AuthService){
    }
    ngOnInit(){
        //getting current user
       this.currentUser = this.auth.getCurrentUser();
    }
  logout(){
    this.auth.logout();
  }



}