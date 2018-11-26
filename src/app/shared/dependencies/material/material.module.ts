import { NgModule } from '@angular/core';
import {
  MatCardModule, MatInputModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule,
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})

export class MaterialModule { }
