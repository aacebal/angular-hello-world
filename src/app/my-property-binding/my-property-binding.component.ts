import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-property-binding',
  template: `<img [src]="myImageSource" />`,
  styleUrls: ['./my-property-binding.component.css']
})

export class MyPropertyBindingComponent implements OnInit {
  myImageSource: string = 'http://placekitten.com/g/300/300';

  ngOnInit() {
  }

}
