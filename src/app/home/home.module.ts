import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { NguCarouselModule } from '@ngu/carousel';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ContactFormComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgsRevealModule,
    NguCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ]
})
export class HomeModule { }
