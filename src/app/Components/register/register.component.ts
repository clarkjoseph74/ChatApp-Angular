import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../Models/user';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit, OnChanges {
  @Output() cancelRegisteration = new EventEmitter<boolean>();

  registerForm: FormGroup = {} as FormGroup;
  constructor(
    private accountService: AccountService,
    private toaster: ToastrService,
    private formBuilder: FormBuilder
  ) {}
  model: any = {};

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.minLength(4), Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      confirmPassword: [
        '',
        [
          Validators.minLength(8),
          Validators.required,
          this.matchValues('password'),
        ],
      ],
    });
  }

  get username(): AbstractControl | null {
    return this.registerForm.get('username');
  }
  get password(): AbstractControl | null {
    return this.registerForm.get('password');
  }
  get confirmPassword(): AbstractControl | null {
    return this.registerForm.get('confirmPassword');
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isMatching = control?.value === control.parent?.get(matchTo)?.value;
      return isMatching ? null : { isMatching: false };
    };
  }

  register() {
    console.log(this.registerForm.value);
    // let observerHandler = {
    //   next: (response: User) => {
    //     this.toaster.success('Hello ' + response.username);
    //     this.cancel();
    //   },
    //   error: (err: any) => {
    //     this.toaster.error(err.error);
    //   },
    //   complete: () => {},
    // };
    // this.accountService.register(this.model).subscribe(observerHandler);
  }
  cancel() {
    this.cancelRegisteration.emit(false);
  }
}
