import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule


 } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataBinding';

  public name="mr shahbaz khan for learning data binding properly "

  public role="java full stack developer"

  public image="/public/book.jpg"
 
   public value =""

  onClick(){
    console.log("thank you for subscribing")
  }
  
 
}
