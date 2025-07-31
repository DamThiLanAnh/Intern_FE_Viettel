import { Component, ElementRef, Input, ViewChild } from "@angular/core";

@Component({
    selector: 'mat-modal',
    templateUrl: 'modal.component.html',
    styleUrls: [
        'modal.component.scss'
    ]
})

export class MatModalComp {
    @ViewChild('modal') modalContainer!: ElementRef<HTMLElement>;
    @ViewChild('close') closeButton!: ElementRef<HTMLElement>;
    @Input() modalTitle!: string;
    isShowModal: boolean = false;

    toggleModal() {
        this.isShowModal = !this.isShowModal;
    }
    ngAfterViewInit(): void {
        // Nút tắt Modal trong modal
        this.closeButton.nativeElement.onclick = () => {
            this.toggleModal();
        }
    }
}