import { Component, OnInit } from '@angular/core';
import { ConstantsService } from '../shared/services/constants.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public icons = this.constants.icons;
  public projects = this.constants.projects;
  public education = this.constants.education;

  constructor(private constants: ConstantsService) { }

  ngOnInit() {
  }
}
