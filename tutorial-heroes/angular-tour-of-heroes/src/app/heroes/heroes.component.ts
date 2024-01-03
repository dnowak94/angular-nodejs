import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../services/hero.service';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [UpperCasePipe, FormsModule, NgFor,NgIf, HeroDetailComponent, RouterLink, RouterOutlet],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  
  constructor(private heroService:HeroService) {
  }
  
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
  
  add(name: string):void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
    .subscribe(hero => {
      this.heroes.push(hero);
    });
  }
}
