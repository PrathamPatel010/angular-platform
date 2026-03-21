import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [CommonModule, ButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() label!: string;

  @Input() icon!: string;

  @Input() severity: 'primary' | 'secondary' | 'success' | 'danger' = 'primary';

  @Input() variant: 'filled' | 'outlined' | 'text' = 'filled';

  @Input() loading = false;

  @Input() disabled = false;

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    if (this.loading || this.disabled) return;

    this.clicked.emit();
  }
}
