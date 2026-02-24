import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-textbox',
  imports: [CommonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss',
})
export class TextboxComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) controlName!: string;

  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() type: 'text' | 'number' = 'text';

  @Input() options: unknown[] = [];
  @Input() required = false;

  get control() {
    return this.form.get(this.controlName);
  }

  get showError(): boolean {
    return !!(this.control && this.control.invalid && (this.control.touched || this.control.dirty));
  }
}
