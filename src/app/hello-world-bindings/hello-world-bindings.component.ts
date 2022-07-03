import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-bindings',
  templateUrl: './hello-world-bindings.component.html',
})
export class HelloWorldBindingsComponent {
  fontColor = 'green';
  sayHelloId = 1;
  canNotClick = false;
  message = 'Hello, World, from hello-world-bindings component!';

  sayMessage() {
    alert(this.message);
  }
}
