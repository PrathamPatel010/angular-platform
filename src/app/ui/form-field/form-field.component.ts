import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    DropdownModule,
    MultiSelectModule,
  ],
  templateUrl: './form-field.component.html',
})
export class FormFieldComponent implements OnInit {
  @Input({ required: true }) form!: FormGroup;
  @Input({ required: true }) controlName!: string;

  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() type: 'text' | 'number' | 'password' | 'dropdown' | 'multiselect' = 'text';

  @Input() options: unknown[] = [];
  @Input() required = false;

  // 🔹 Form-level outputs (BEST PRACTICE)
  @Output() valueChange = new EventEmitter<unknown>();
  @Output() statusChange = new EventEmitter<string>();

  // 🔹 DOM-level outputs
  @Output() blurred = new EventEmitter<Event>();
  @Output() focused = new EventEmitter<Event>();
  @Output() clicked = new EventEmitter<Event>();

  get control() {
    return this.form.get(this.controlName);
  }

  ngOnInit() {
    // ✅ Form-driven events (preferred)
    this.control?.valueChanges.subscribe((value) => {
      this.valueChange.emit(value);
    });

    this.control?.statusChanges.subscribe((status) => {
      this.statusChange.emit(status);
    });
  }

  // DOM proxies
  onBlur(event: Event) {
    this.blurred.emit(event);
  }

  onFocus(event: Event) {
    this.focused.emit(event);
  }

  onClick(event: Event) {
    this.clicked.emit(event);
  }

  get showError(): boolean {
    return !!(this.control && this.control.invalid && (this.control.touched || this.control.dirty));
  }
}
