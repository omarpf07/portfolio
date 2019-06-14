import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Dependencies
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule
  ],
  exports: [
    LayoutComponent,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
