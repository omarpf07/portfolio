import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Dependencies
import { FlexLayoutModule } from '@angular/flex-layout';


// Components
import { LayoutComponent } from './components/layout/layout.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NotfoundComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
  ],
  exports: [
    LayoutComponent,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
