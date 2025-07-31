import { Component, Input, Output } from "@angular/core";

@Component({
    selector: 'dropdown', 
    template: `
        <ul class="dropdown-container" [class.show]="isShowDropdown" (click)="stopToggle($event)">
            <ng-content></ng-content>
        </ul>
    `, 
    styleUrls: ['./dropdown.component.scss']
})

export class MatDropdownComp {
    @Input() isShowDropdown = false;

    stopToggle(event: Event) : void {
        event.stopPropagation();
    }

    toggleDropdown() : void {
        this.isShowDropdown = !this.isShowDropdown;
    }
}