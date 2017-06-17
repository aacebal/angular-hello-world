import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-event-binding',
  template:`
        <input #myInput (keyup)="onKey(myInput.value)">
        <p> {{ myInput.value }} </p>
    `
})

export class MyEventBindingComponent implements OnInit {
  onKey(value) {
    console.log(`Key pressed: ${value}`)
  }

  ngOnInit() {
  }

}
