import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OurcategoriesComponent } from './ourcategories/ourcategories.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    OurcategoriesComponent,
    AboutusComponent
  ],

  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],

  exports: [
  ]
})
export class MainLayoutModule { }
