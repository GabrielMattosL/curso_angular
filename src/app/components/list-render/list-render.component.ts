import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { Itens } from 'src/app/Itens';
import { Books } from 'src/app/Books';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = []
  itens: Itens[] = []
  books: Books[] = []
  animalDetails = ''

  constructor(private listService: ListService) {
    this.getAnimals();
    this.getItens();
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} ano(s)`
  }

  removeAnimal(animal: Animal) {
    console.log("Removendo animal")
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
  
  getItens(): void {
    this.listService.getTo().subscribe((itens) => (this.itens = itens));
  }

  getBooks(): void {
    this.listService.getBo().subscribe((books) => (this.books = books))
  }
}

