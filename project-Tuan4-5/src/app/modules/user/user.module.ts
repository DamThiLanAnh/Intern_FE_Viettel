import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './component/list/list-user.component';
import { UserCreateComponent } from './component/create/create-user.component';
import { UserEditComponent } from './component/update/update-user.component';
import { UserRoutingModule } from './user-routing.module';
@NgModule({
    declarations: [
        UserListComponent,
        UserCreateComponent,
        UserEditComponent
        
    ],
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        UserRoutingModule
    ]
})
export class UserModule { }