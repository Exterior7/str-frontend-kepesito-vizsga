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

  apiUrl: string = "https://tr360-frontend-exam-april.azurewebsites.net/exterior7/movies";

  movies: Movie[] = [];

  constructor(
    private http:HttpClient,
  ) { }

  ngOnInit(): void {
  }

  getMovies(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`);
  }

  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.apiUrl}/${id}`);
  }

}
