import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute, input } from '@angular/core';
import { MyHighlightDirective } from '../../directives/my-highlight.directive';

function nameChange(value:string){
  return "HI Owner"+value;
}


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule,MyHighlightDirective],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({transform:nameChange}) OwnerName!:string;
  @Input({transform:booleanAttribute}) isOwner!:boolean;
  @Input() email!:string;




  name ="Ramesh";
  status="single";
  salary=40000;
  isBtnDisable = false;

   users = [
    {
      name:"vicky",
      status:"single",
      salary:38900
    },
    {
      name:"neta aadmi",
      status:"mingle",
      salary:80000
    },
    {
      name:"Kaam chor",
      status:"divorse",
      salary:30000
    },


   ] 
  formChangeHandler(e:Event){
    console.log((e.target as HTMLInputElement).value)
    
  }
  MouseClick(){
    console.log("mouse got clicked")
  }
}
