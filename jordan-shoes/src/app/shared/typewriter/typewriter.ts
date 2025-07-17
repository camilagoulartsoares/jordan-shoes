import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typewriter',
  imports: [],
  templateUrl: './typewriter.html',
  styleUrl: './typewriter.scss'
})
export class TypewriterComponent implements OnInit {
  @Input() text = '';

  displayedText = '';

  ngOnInit() {
    this.startTyping(this.text);
  }

  startTyping(text: string, i: number = 0): void {
    if (i < text.length) {
      this.displayedText = text.slice(0, i + 1);
      setTimeout(() => {
        this.startTyping(text, i + 1);
      }, 100);
    }
  }
}
