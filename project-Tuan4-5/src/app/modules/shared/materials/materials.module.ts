import { NgModule } from "@angular/core";
import { MatButtonComp } from "./button/button.component";
import { MatModalComp } from "./modal/modal.component";
import { MatDropdownComp } from "./dropdown/dropdown.component";
import { MatToastComp } from "./toast/toast.component";
import { MatUserFormComp } from "./form/form.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        MatButtonComp,
        MatModalComp,
        MatDropdownComp,
        MatToastComp,
        MatUserFormComp,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        MatButtonComp,
        MatModalComp,
        MatDropdownComp,
        MatToastComp,
        MatUserFormComp,
    ]
})

export class MaterialsModule {

}