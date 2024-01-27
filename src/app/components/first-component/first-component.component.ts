import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  userInput: string = '';

  updateParagraph(): void {
  }

  resetInput(): void {
    this.userInput = '';
  }
}
