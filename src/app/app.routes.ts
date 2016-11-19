import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { GenresComponent } from './genres/genres.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

export const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'genres/:id/:name', component: GenresComponent},
    {path: 'upcoming', component: UpcomingComponent},
];