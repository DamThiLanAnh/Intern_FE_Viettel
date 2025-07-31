import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './component/list/list-user.component';
import { UserCreateComponent } from './component/create/create-user.component';
import { UserEditComponent } from './component/update/update-user.component';
const routes: Routes = [
    { path: '/list', component: UserListComponent },
    { path: 'create', component: UserCreateComponent },
    { path: 'update/:id', component: UserEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }