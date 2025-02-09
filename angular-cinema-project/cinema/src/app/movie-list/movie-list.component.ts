import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  BASE_URL: string = "https://tr360-frontend-exam-april.azurewebsites.net/exterior7/movies";

  movies: Movie[] = [];

  constructor(
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
  }

  getMovieList(): void {
    this.http.get<Movie[]>(`${this.BASE_URL}`).subscribe(
      list => this.movieList.next(list)
    );
  }

  deleteMovie(movie: Movie): void {
    this.http.delete<Movie>(`${this.BASE_URL}/${movie.id}`).subscribe(
      () => this.getMovieList()
    )
  }

}
