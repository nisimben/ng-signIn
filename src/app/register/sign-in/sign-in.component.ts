import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  constructor(private fb:FormBuilder) { }
  signInFromG = this.fb.group({
    email :['',[Validators.required,Validators.email]],
    password : ['',[Validators.required,Validators.minLength(8)]],
    remember:['']
  })
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signInFromG.value);
  }


  ngOnInit(): void {
  }

}
