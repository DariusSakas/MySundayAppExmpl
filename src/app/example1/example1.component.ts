import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'example1',
  template: `<h1>Example 1 component. It's name {{ title }}</h1>`,
})
export class Example1Component implements OnInit {
  title = 'Pirmasis komponentas';
  ngOnInit(): void {
    console.log('Executed on INIT method');
  }
}
