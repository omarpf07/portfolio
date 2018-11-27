import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../shared/services/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public icons = [];

  constructor(private constants: ConstantsService) { }

  ngOnInit() {
    this.icons = this.constants.icons;
  }
}
