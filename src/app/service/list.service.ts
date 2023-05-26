import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { Itens } from '../Itens';
import { Books } from '../Books';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:3000/animals'
  private getToUrl = 'http://localhost:3000/itens'
  private getBoUrl = 'http://localhost:3000/books'

  constructor( private http: HttpClient ) { }

  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name)
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }

  getTo(): Observable<Itens[]> {
    return this.http.get<Itens[]>(this.getToUrl);
  }

  getBo(): Observable<Books[]> {
    return this.http.get<Books[]>(this.getBoUrl)
  }
  
  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiUrl}/${id}`)
  }
}
