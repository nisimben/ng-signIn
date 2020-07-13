import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './register/sign-in/sign-in.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'chat',component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
