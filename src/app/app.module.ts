import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './register/sign-in/sign-in.component';
import { ReactiveFormsModule,FormsModule, } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ChatComponent
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SignInComponent, ChatComponent]
})
export class AppModule { }
