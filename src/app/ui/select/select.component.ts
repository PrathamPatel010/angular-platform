import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-select',
  imports: [CommonModule, ReactiveFormsModule, SelectModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
})
export class SelectComponent {
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
