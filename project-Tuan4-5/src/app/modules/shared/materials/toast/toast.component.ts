import { Component, Input } from "@angular/core";
import { ToastService } from "./toast.service";

@Component({
    selector: 'mat-toast',
    template: `
        <div *ngIf="toastService.toastMessage | async as toast" class="error-notify" [class]="toast.type" [class.hide]="toggleToast" [ngSwitch]="toast.type">
            <button class="error-icon">
                <i *ngSwitchCase="'success'" class="fa-solid fa-circle-check"></i>
                <i *ngSwitchCase="'error'" class="fa-solid fa-circle-xmark"></i>
                <i *ngSwitchCase="'warning'" class="fa-solid fa-circle-exclamation"></i>
            </button>
            <p class="error-title">{{ toast.message }}</p>
            <i (click)="hideToast()" class="error-close fa-solid fa-xmark"></i>
        </div>
    `,
    styleUrls: ['./toast.component.scss']
})

export class MatToastComp {
    toggleToast: boolean = false;
    constructor(public toastService: ToastService) { }

    hideToast() {
        this.toggleToast = true;
        setTimeout(() => {
            this.toggleToast = false;
        }, 5000)
    }
}