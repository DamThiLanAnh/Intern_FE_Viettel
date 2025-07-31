import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './home-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { ContentComponent } from './content/content.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
    declarations: [
        HomeLayoutComponent,
        HeaderComponent,
        SidebarComponent,
        // ContentComponent,
    ],

    imports: [
        CommonModule,
        RouterModule,
        MaterialsModule
    ],
    exports: [HomeLayoutComponent]
})
export class HomeLayoutModule { }
