import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models/hero';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorHandling } from '../errorHandling';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  
  private heroesUrl:string = 'http://localhost:3000/heroes';

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandling,
    private logService:MessageService
    ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  getHeroes(): Observable<Hero[]> {
    console.log("url: ",this.heroesUrl);
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.logService.log('HeroService', 'getHeroes', 'fetched heroes')),
      catchError(this.errorHandler.handleError<Hero[]>('HeroService','getHeroes'))
    );
  }

  getHero(id:number):Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    console.log("url: ",url);
    return this.http.get<Hero>(url)
    .pipe(
      tap(_ => this.logService.log('HeroService','getHero',`fetched hero id=${id}`)),
      catchError(this.errorHandler.handleError<Hero>('HeroService', `getHero ìd=${id}`))
    );
  }

  addHero(hero: Hero):Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions)
    .pipe(
      tap((newHero: Hero) => this.logService.log('HeroService','addHero',`add hero id=${newHero.id}`)),
      catchError(this.errorHandler.handleError<Hero>('HeroService', `addHero name=${hero.name}`))
    );
  }

  updateHero(hero:Hero):Observable<any> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, hero, this.httpOptions)
    .pipe(
      tap(_ => this.logService.log('HeroService','updateHero',`save hero: ${JSON.stringify(hero, null, 2)}`)),
      catchError(this.errorHandler.handleError<Hero>('HeroService', `updateHero ìd=${hero.id}`))
    );
  }
}
