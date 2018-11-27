import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public icons = [{
    name: 'angular', placeholder: 'Angular 4+'
  }, {
    name: 'bs', placeholder: 'Bootstrap'
  },
  {
    name: 'git', placeholder: 'Git'
  },
  {
    name: 'html', placeholder: 'Html5'
  },
  {
    name: 'ionic', placeholder: 'Ionic'
  },
  {
    name: 'js', placeholder: 'JavaScript'
  },
  {
    name: 'linux', placeholder: 'Linux/GNU'
  },
  {
    name: 'material', placeholder: 'Material'
  },
  {
    name: 'mongodb', placeholder: 'Mongodb'
  },
  {
    name: 'node', placeholder: 'node.js'
  },
  {
    name: 'ts', placeholder: 'TypeScript'
  }];

  constructor() { }

}
