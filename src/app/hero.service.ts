import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES).pipe(delay(500));
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
