import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Hero} from "../models/hero.model";
import {MessageService} from "./message.service";
import {HEROES} from "../mocks/mock-heroes";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: string): Observable<Hero> {
    return this.getHeroes().pipe(
      map((heroes) => heroes.find((hero) => hero.id === +id)!)
    )
  }
}
