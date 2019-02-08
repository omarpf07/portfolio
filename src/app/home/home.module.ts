import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

import {NgsRevealModule} from 'ngx-scrollreveal';
import { NguCarouselModule } from '@ngu/carousel';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgsRevealModule,
    NguCarouselModule
  ]
})
export class HomeModule { }
