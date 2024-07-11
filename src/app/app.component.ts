import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './component/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'thirdAngularApp';

  // owners =[
  //   {
  //     name :"nice name one",
  //     email:"niceOne@gmail.com",
  //     isOwner:true
  //   },
  //   {
  //     name :"nice name Two",
  //     email:"niceTwo@gmail.com",
  //     isOwner:false

  //   },
  //   {
  //     name :"nice name Three",
  //     email:"niceThree@gmail.com",
  //     isOwner:false
  //   }
  // ]
}
