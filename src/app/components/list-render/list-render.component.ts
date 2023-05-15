import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 4},
    {name: "Tom", type: "Cat", age: 1},
    {name: "Frida", type: "Dog", age: 3},
    {name: "Bob", type: "Horse", age: 2},
    {name: "Neemo", type: "Fish", age: 5}
  ]

  animalDetails = ''

  constructor(private listService: ListService) {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano(s)`
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo animal")
    this.animals = this.listService.remove(this.animals, animal)
  }
}

