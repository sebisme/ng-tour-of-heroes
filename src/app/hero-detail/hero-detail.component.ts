import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  
  @Input() hero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  public onSaveHeroAlive(value: boolean): void {
    if (this.hero) {
      this.hero.alive = !value;
      this.hero.alive
        ? window.alert(this.hero.name + ' is now back from the dead !') 
        : window.alert(this.hero.name + ' is now dead !');
    }
  }
}
