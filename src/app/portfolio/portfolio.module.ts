import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaComponent } from './spa/spa.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  declarations: [SpaComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
