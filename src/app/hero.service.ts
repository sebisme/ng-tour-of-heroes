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

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero).pipe(delay(750));
  }

  setHeroAlive(hero: Hero, alive: boolean):Hero {
    hero.alive = alive;
    hero.alive
      ? this.messageService.add(`HeroService: hero id=${hero.id} is now back from the dead !`)
      : this.messageService.add(`HeroService: hero id=${hero.id} is now dead !`);
    return hero;
  }
}
