import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-ng-if',
  templateUrl: './hello-world-ng-if.component.html'
})
export class HelloWorldNgIfComponent {
  message = "I'm read only!";
  canEdit = false;
  fontColor = 'red';
  buttonMessage = 'Make text editable!';
  fontFont = 'sans-serif'
  
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
      this.buttonMessage = 'Make text Read-Only!';
      this.fontColor = 'green';
      this.fontFont = 'blackletter'
    } else {
      this.message = "I'm read only!";
      this.buttonMessage = 'Make text editable!';
      this.fontColor = 'red';
      this.fontFont = 'sans-serif'
    }
  }
}