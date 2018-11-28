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

  public projects = [{
    name: 'shopcart', placeholder: 'Shop Cart', src: 'https://github.com/omarpf07/shopcart'
  },
  {
    name: 'weather', placeholder: 'Local Weather App', src: 'https://omarpf07.github.io/randomquotes/'
  },
  {
    name: 'technical', placeholder: 'Technical Test', src: ''
  },
  {
    name: 'node', placeholder: 'node.js Projects',
    src: 'https://github.com/omarpf07?utf8=%E2%9C%93&tab=repositories&q=&type=&language=javascript'
  }];

  public education = [{
    name: 'Universidad Dr Rafael Belloso Chacin', description: 'Software Engineering Degree', date: '2015-2019',
  }, {
    name: 'Udemy', description: 'Angular: From Zero to Expert creating Angular Applications(Angular 4+)', date: '2018'
  }, {
    name: 'Udemy', description: 'node.js: From Zero to Master', date: '2018'
  }, {
    name: 'FreeCodeCamp', description: 'Developer Certification', date: '2018'
  }, {
    name: 'Cisco Networking Academy', description: 'CCNA Routing and Switching: Networks Introduction', date: '2018'
  }];

  constructor() { }

}
