import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  formularioSignIn: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.formularioSignIn = this.fb.group({
      'email': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

}
