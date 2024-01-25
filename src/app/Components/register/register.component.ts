import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../Models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnChanges {
  @Output() cancelRegisteration = new EventEmitter<boolean>();
  constructor(
    private accountService: AccountService,
    private toaster: ToastrService
  ) {}
  model: any = {};

  ngOnChanges(changes: SimpleChanges): void {}
  register() {
    let observerHandler = {
      next: (response: User) => {
        this.toaster.success('Hello ' + response.username);
        this.cancel();
      },
      error: (err: any) => {
        this.toaster.error(err.error);
      },
      complete: () => {},
    };
    this.accountService.register(this.model).subscribe(observerHandler);
  }
  cancel() {
    this.cancelRegisteration.emit(false);
  }
}
