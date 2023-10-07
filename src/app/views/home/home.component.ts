import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favoriteMovies: Movie[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.favoriteMovies = this.localStorageService.getFavorites();
  }
}
