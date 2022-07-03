import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-ngif',
  templateUrl: './hello-world-ngif.component.html'
})
export class HelloWorldNgIfComponent {
  message = "I'm read only!";
  canEdit = false;
  fontColor = 'red';
  buttonMessage = 'Make text editable!';
  
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
      this.buttonMessage = 'Make text Read-Only!';
      this.fontColor = 'green';
    } else {
      this.message = "I'm read only!";
      this.buttonMessage = 'Make text editable!';
      this.fontColor = 'red';
    }
  }
}