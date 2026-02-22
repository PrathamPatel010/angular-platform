import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '@app/core/services/common.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { FormFieldComponent } from '@app/ui/form-field/form-field.component';
import { UserForm } from './models/user.model';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-users',
  imports: [CommonModule, ReactiveFormsModule, CardModule, FormFieldComponent, ButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  commonService: CommonService = inject(CommonService);
  private fb = inject(FormBuilder);

  userForm!: FormGroup<UserForm>;

  roles = [
    { label: 'Admin', value: 'ADMIN' },
    { label: 'Manager', value: 'MANAGER' },
    { label: 'User', value: 'USER' },
  ];

  locations = [
    { label: 'New York', value: 'NY' },
    { label: 'London', value: 'LON' },
    { label: 'Tokyo', value: 'TOK' },
    { label: 'Dubai', value: 'DXB' },
  ];

  ngOnInit(): void {
    this.commonService.localStorageService.set('currentPage', 'Users');
    this.commonService.notificationService.warn('Users component initialized successfully!');
    this.createForm();
  }

  private createForm(): void {
    this.userForm = this.fb.group<UserForm>({
      username: this.fb.control(null, [Validators.required, Validators.minLength(3)]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(6)]),
      role: this.fb.control(null, Validators.required),
      locations: this.fb.control(null, Validators.required),
      notes: this.fb.control(null),
    });
  }

  submit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    console.log('Form Value:', this.userForm.value);
  }
}
