import { Component } from '@angular/core';
import { TypewriterComponent } from "../../shared/typewriter/typewriter";

@Component({
  selector: 'app-home',
  imports: [TypewriterComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
