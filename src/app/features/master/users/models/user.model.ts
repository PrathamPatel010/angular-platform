import { FormControl } from '@angular/forms';

export interface UserForm {
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  role: FormControl<string | null>;
  locations: FormControl<string[] | null>;
  notes: FormControl<string | null>;
}
