import { Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatAccordion} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatFormField} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  email = new FormControl('', [Validators.required, Validators.nullValidator]);
  passd = new FormControl('', [Validators.required, Validators.nullValidator]);
  hide = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Login(user, pass) {
    // tslint:disable-next-line:triple-equals
    if (user.value == 'admin' && pass.value == 'admin')
    {
      this.router.navigate(['/main/A']);
    }
    else {
      this.router.navigate(['/main/G']);
    }
  }
}
