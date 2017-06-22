import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-example',
  template: `
  <ul>
      <li *ngFor="let animal of animals, let i = index, let x = odd, trackBy:trackByAnimalId">
          {{ i + 1 }} - {{ !x }} - {{ animal.name }}
      </li>
  </ul>
  `,
  styles: []
})
export class NgForExampleComponent implements OnInit {
  animals: Object[] = [
    {
      id: 1,
      category: 'mammal',
      name: 'Dog'
    }, {
      id: 2,
      category: 'oviparous',
      name: 'Duck'
    }, {
      id: 3,
      category: 'mammal',
      name: 'Elephant'
    }, {
      id: 4,
      category: 'reptile',
      name: 'Snek'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  trackByAnimalId(index: number, animal: any) {
    return animal.id;
  }

}
