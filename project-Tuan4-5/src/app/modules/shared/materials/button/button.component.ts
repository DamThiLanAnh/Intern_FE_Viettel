import { Component, ElementRef, Input, Output, ViewChild } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { fromEvent } from "rxjs";
import { throttleTime } from "rxjs/operators";

@Component({
    selector: 'mat-button',
    template: `
        <button #button
            [type]="type"
            [class.outline]="isOutline"
            [class.onlyText]="onlyText"
            [class.full-size]="isFullSize"
            [disabled]="disable"
        ><i [style.display]="!icon && 'none'" [className]="icon"></i>{{ label }}</button>
    `,
    styleUrls: [
        './button.component.scss'
    ]
})

export class MatButtonComp {
    @Input() label: string = 'Click';
    @Input() type! : 'button' | 'submit' | 'reset';
    @Input() isOutline: boolean = false;
    @Input() onlyText: boolean = false;
    @Input() isFullSize: boolean = false;
    @Input() icon: string = ''; 
    @Input() disable: boolean = false;
    @Input() delay!: number;
    @Output() clickEmitter = new EventEmitter();
    @ViewChild('button') button! : ElementRef;

    ngAfterViewInit(): void {
        fromEvent(this.button.nativeElement, 'click').pipe(
            throttleTime(this.delay)
            
        ).subscribe(() => {
            this.clickEmitter.emit(event);
        });
    }

}