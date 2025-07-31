
import { ChangeDetectorRef, Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../service/user-service.component";
import { Router } from "@angular/router";

@Component({
    selector: 'user-create',
    template: `<user-form [formName]="createForm"></user-form>`
})
export class UserCreateComponent {
    createForm!: FormGroup;

    constructor(
        private userService: UserService,
        private router : Router,
        private cdr: ChangeDetectorRef
    ) {
        this.createForm = userService.createUserForm()
    }

    getForm(): FormGroup {
        return this.createForm;
    }

    create() {
        this.userService.createUser(this.createForm.value).subscribe({
            // Cập nhật lại danh sách
            next: () => {
                const currentUrl = this.router.url;
                this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
                    this.router.navigate([currentUrl]);
                });
            }
        })
    }
}


