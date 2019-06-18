import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [HomeComponent, ContactFormComponent, TestimonialsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgsRevealModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ], providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6Le5EKkUAAAAAD3I3_znf444iCiUVVIJgz-f45Ae',
    } as RecaptchaSettings,
  }]

})
export class HomeModule { }
