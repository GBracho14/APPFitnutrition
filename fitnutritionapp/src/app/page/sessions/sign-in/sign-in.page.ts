import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  formularioSignIn: FormGroup;

  constructor(public fb: FormBuilder, private router: Router) { 
    this.formularioSignIn = this.fb.group({
      'email': new FormControl("", Validators.required),
      'contraseña': new FormControl("", Validators.required)
    });  
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
