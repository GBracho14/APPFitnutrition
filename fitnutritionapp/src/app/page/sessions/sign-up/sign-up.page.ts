import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {

  formularioSignUp: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.formularioSignUp = this.fb.group({
      'email': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }
}
