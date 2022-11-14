import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OurcategoriesComponent } from './ourcategories/ourcategories.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    ReactiveFormsModule
  ],

  exports: [
  ]
})
export class MainLayoutModule { }
