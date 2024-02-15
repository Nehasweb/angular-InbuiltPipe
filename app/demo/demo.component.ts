import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent
 {
    public Name :string ="marvellous infosystems pune";

    public value = 78.647;

  public Today = new Date ();

  public Book()
  {
    Name : "Learning angular";
    Author : "James pete";
  }

}
