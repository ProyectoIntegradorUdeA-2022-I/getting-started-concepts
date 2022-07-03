import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'hello-world-di',
  templateUrl: './hello-world-di.component.html'
})
export class HelloWorldDependencyInjectionComponent  {
  count = 0;
  countMessage : number []= [];
  

  constructor(private logger: LoggerService) { }

  onLogMe() {
    this.countMessage[0] = this.logger.writeCount(this.count)[0];
    this.countMessage[1] = this.logger.writeCount(this.count)[1];
    
    this.count++;
  }
}