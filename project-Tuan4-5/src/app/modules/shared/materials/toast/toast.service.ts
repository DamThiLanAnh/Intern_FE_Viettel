import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ToastService {
    public toastMessage = new BehaviorSubject<{message: string, type: string} | null>(null);

    showToast(message: string, type: 'success' | 'error' | 'warning' = 'success', duration = 3000) {
        this.toastMessage.next({message, type});

        setTimeout(() => {
            this.toastMessage.next(null);
        }, duration)
    }
}