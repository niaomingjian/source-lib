import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}

  private heroesUrl = 'http://localhost:3000/app/heroes'

  search(term: string): Observable<Hero[]> {
    return this.http
               .get(`${this.heroesUrl}?name=${term}`)
               .map((r: Response) => r.json().data as Hero[]);
  }
}