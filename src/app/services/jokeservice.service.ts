import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokeserviceService {
  private jokes = ["today is fun","have fun a good day","joke is what is joke today ?."]

  constructor() { }

  getJokes(){
    return this.jokes
  }
}
