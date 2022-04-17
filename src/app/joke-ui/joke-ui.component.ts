import { Component, OnInit } from '@angular/core';
import { JokeserviceService } from '../services/jokeservice.service';

@Component({
  selector: 'app-joke-ui',
  templateUrl: './joke-ui.component.html',
  styleUrls: ['./joke-ui.component.scss']
})
export class JokeUiComponent implements OnInit {
  private title:String = "Joke Today"
  private jokes

  constructor(JokeserviceService:JokeserviceService) {
    this.jokes = JokeserviceService.getJokes()
   }

  ngOnInit(): void {
  }

  getTitle(){
    return this.title
  }

  getJokes(){
    return this.jokes
  }

}
