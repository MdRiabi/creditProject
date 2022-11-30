import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DateFormControl } from 'app/date-form-control';


@Component({
  selector: 'app-credt-form',
  templateUrl: './credt-form.component.html',
  styleUrls: ['./credt-form.component.css']
})
export class CredtFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required,
    Validators.minLength(3),
    Validators.maxLength(15),
    Validators.pattern(/\s/)]),


    cardNumber: new FormControl('', [Validators.required,
    Validators.minLength(16),
    Validators.maxLength(16)]),



    expiration: new DateFormControl('', [Validators.required,
    Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]),


    securityCode: new FormControl('', [Validators.required,
    Validators.minLength(4),
    Validators.maxLength(4)]),

  });

  constructor() {
    console.log(this.cardForm);
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("the form is submit")
  }

}
