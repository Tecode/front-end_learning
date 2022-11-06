import { Component, OnInit, ReflectiveInjector } from '@angular/core';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss'],
})
export class DependencyInjectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

class HumanService {
  name: string = 'haoxuan';
}

// 简写
// const injector = ReflectiveInjector.resolveAndCreate([HumanService])
// const humanService1 = injector.get(HumanService)
// const humanService2 = injector.get(HumanService)
// 完整写法
const injector = ReflectiveInjector.resolveAndCreate([
  { provide: 'human', useClass: HumanService },
]);
const humanService1 = injector.get('human');
const humanService2 = injector.get('human');

console.log('Human:', humanService1);
console.log('===', humanService1 === humanService2);

// 存储属性
const injector2 = ReflectiveInjector.resolveAndCreate([
  {
    provide: 'Config',
    useValue: Object.freeze({
      APIKEY: 'API1234567890',
      APISCRET: '500-400-300',
    }),
  },
]);
const config = injector2.get('Config');
console.log(config);

