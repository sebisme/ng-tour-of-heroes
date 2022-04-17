import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  powers = ['Intelligence', 'Machiavelisme', 'Constitution',
            'Corruption', 'Parlementarisme', 'Populisme'];
  
  model = new Hero(57, "Volodimir Zelensky", 680, true, this.powers[0]);
  
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    this.submitted = true;

    console.log(this.model);
    console.log(this);
  }

  newHero() {
    this.model = new Hero(65, '', 0, true, '');
  }
}
