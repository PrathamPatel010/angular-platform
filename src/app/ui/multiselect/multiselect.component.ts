import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-multiselect',
  imports: [CommonModule, ReactiveFormsModule, MultiSelectModule],
  templateUrl: './multiselect.component.html',
  styleUrl: './multiselect.component.scss',
})
export class MultiselectComponent {
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
