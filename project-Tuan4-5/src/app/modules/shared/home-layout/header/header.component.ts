import { Location } from "@angular/common";
import { Component, ContentChild, ElementRef, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
// import { AuthService } from "src/app/modules/auth/services/auth.service";
import {User} from "src/app/modules/user/user.model";
let user : User = {
    id: 7,
    first_name: "Michael",
    last_name: "Lawson",
    email: "michael.lawson@reqres.in",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
}

@Component({
    selector: 'layout-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent {
    @ViewChild('logOut') logOutButton! : ElementRef;
    isShowDropdown = false;
    isEmpty = false;
    user = user;

    constructor(
        // private auth : AuthService, 
        private router: Router,
        private location: Location
    ) { }
    
    ngAfterViewInit(): void {
        this.logOutButton.nativeElement.onclick = () => {
        //    this.auth.isLogOut();
           this.router.navigate(['/auth']);
        }
    }

    goBack() {
        this.location.back();
    }
}