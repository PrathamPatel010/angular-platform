import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CommonService } from '@app/core/services/common.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { UserForm } from './models/user.model';
import { ButtonModule } from 'primeng/button';
import { TextboxComponent } from '@app/ui/textbox/textbox.component';
import { PasswordComponent } from '@app/ui/password/password.component';
import { SelectComponent } from '@app/ui/select/select.component';
import { MultiselectComponent } from '@app/ui/multiselect/multiselect.component';
import { TextareaComponent } from '@app/ui/textarea/textarea.component';

@Component({
  selector: 'app-users',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    TextboxComponent,
    PasswordComponent,
    SelectComponent,
    MultiselectComponent,
    TextareaComponent,
  ],
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
