import { Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatAccordion} from '@angular/material/expansion';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  private _success = new Subject<string>();
  staticAlertClosed = false;
  successMessage = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => this.staticAlertClosed = true, 20000);

    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = '');
  }

  // tslint:disable-next-line:typedef
  Login(user, pass) {
    // tslint:disable-next-line:triple-equals
    if (user.value == 'admin' && pass.value == 'admin')
    {
      this.router.navigate(['/Menu']);
    }
    else {
      this.changeSuccessMessage();
    }
  }
  // tslint:disable-next-line:typedef
  public changeSuccessMessage() {
    this._success.next(`Datos Incorrectos. ¡Vuelve a Intentarlo!`);
  }
}
