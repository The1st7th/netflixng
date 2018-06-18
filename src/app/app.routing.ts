import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MainPageComponent } from './main-page/main-page.component';
import {FavoriteListComponent} from './favorite-list/favorite-list.component';

const appRoutes: Routes = [ {
    path:'',
    component: MainPageComponent
},
{
    path:'list',
    component: MovieListComponent
},{
    path:'favorite',
    component: FavoriteListComponent
}
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);