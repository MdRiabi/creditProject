import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-credt-form',
  templateUrl: './credt-form.component.html',
  styleUrls: ['./credt-form.component.css']
})
export class CredtFormComponent implements OnInit {
cardForm = new FormGroup({
  name: new FormControl('',[
    Validators.required,
  Validators.minLength(3),
 Validators.maxLength(5),
 Validators.pattern(/\s/)
])

});

  constructor() {
    console.log(this.cardForm);
   }

  ngOnInit(): void {
  }

}
