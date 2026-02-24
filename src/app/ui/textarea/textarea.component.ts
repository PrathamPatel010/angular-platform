import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-textarea',
  imports: [CommonModule, ReactiveFormsModule, TextareaModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) controlName!: string;

  @Input() label?: string;
  @Input() placeholder?: string;

  @Input() options: unknown[] = [];
  @Input() required = false;

  get control() {
    return this.form.get(this.controlName);
  }

  get showError(): boolean {
    return !!(this.control && this.control.invalid && (this.control.touched || this.control.dirty));
  }
}
