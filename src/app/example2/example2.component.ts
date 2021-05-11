import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css'],
})
export class Example2Component implements OnInit {
  dogs: string[] = ['Alfred', 'Joe', 'Fido', 'Bill'];
  showParagraph: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.dogs.push('Sparky');
  }
  addDog(dog: string) {
    this.dogs.push(dog);
  }
}
