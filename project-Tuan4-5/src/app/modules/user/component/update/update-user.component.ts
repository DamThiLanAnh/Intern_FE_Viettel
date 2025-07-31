import { Component, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { User } from "../../user.model";
import { UserService } from "../service/user-service.component";
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
    selector: 'app-user-update',
    template: `<user-form [formName]="updateForm"></user-form>`,
})

export class UserEditComponent {
    @Input() user!: User;
    updateForm!: FormGroup;
    constructor(
        private router: Router,
        private userService: UserService,
    ) {
        this.updateForm = userService.createUserForm();
    }

    ngOnInit(): void {
        this.updateForm.patchValue(this.user);
    }

    getForm(): FormGroup {
        return this.updateForm;
    }

    update() {
        const updatedUser = { ...this.user, ...this.updateForm.value };
        this.userService.updateUser(updatedUser).subscribe({
            next: () => {
                this.router.navigate(['users']);
            }
        });
    }
}