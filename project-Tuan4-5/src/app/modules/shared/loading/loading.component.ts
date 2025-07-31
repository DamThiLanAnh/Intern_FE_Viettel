import { Component } from "@angular/core";
import { LoadingService } from "./loading.service";

@Component({
    selector: 'app-loading',
    template: `
        <div class="loading-overlay" *ngIf="isLoading | async">
            <div class="spinner"></div>
        </div>
    `,
    styleUrls: ['./loading.component.scss']
})

export class AppLoading {
    isLoading = this.loadingService.loading$;
    constructor(private loadingService: LoadingService) { }
}