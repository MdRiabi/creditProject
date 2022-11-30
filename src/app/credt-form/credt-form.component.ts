import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-credt-form',
  templateUrl: './credt-form.component.html',
  styleUrls: ['./credt-form.component.css']
})
export class CredtFormComponent implements OnInit {
cardForm = new FormGroup({

});

  constructor() { }

  ngOnInit(): void {
  }

}
