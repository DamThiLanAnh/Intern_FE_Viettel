import { Component } from "@angular/core";
import { UserService } from '../service/user-service.component';
import { User } from "../../user.model";
import { Router } from '@angular/router';
import { LoadingService } from "../../../shared/loading/loading.service";

@Component({
    selector: 'app-user-list',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.scss']
})

export class UserListComponent {
    users!: User[];
    lengthOfUsers!: number;

    trackByfn(index: number, item: any): any {
        return item.id;
    }

    constructor(
        private userService: UserService,
        private router: Router,
        private loading: LoadingService
    ) { }

    ngOnInit(): void {
        let loading = this.loading;
        loading.show();
        this.userService.getUsers().subscribe(users => {
            loading.hide();
            this.users = users;
            this.lengthOfUsers = this.users.length;
        })
    }

    showDetailUser(id: number) {
        this.router.navigate(['/users/detail', id], { queryParams: this.users.find(user => user.id === id) });
    }
}