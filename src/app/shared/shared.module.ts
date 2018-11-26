import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Dependencies
import { FlexLayoutModule } from '@angular/flex-layout';
import { CovalentLayoutModule } from '@covalent/core/layout';

// Components
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialModule } from './dependencies/material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    LayoutComponent,
    SidenavComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    CovalentLayoutModule,
    MaterialModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class SharedModule { }
