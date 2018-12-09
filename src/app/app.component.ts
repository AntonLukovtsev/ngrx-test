import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as filmAction from './store/actions/films';
import { Film } from './models/film';
import { Observable } from 'rxjs/internal/Observable';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  films$: Observable<Film[]>;
  selected$: Observable<any>;
  constructor(private store: Store<fromRoot.State>) {
    this.films$ = store.select(fromRoot.getAllFilms);
    this.selected$ = store.select(fromRoot.getSelectedFilm);
  }
  onSelect(id: number) {
    this.store.dispatch(new filmAction.Select(id));
  }

  onAdd() {
    this.films$.pipe(take(1)).subscribe(films => {
      this.store.dispatch(
        new filmAction.AddOne({
          id: films.length,
          name: 'KEK',
          img: 'https://i.ytimg.com/vi/bgYI4z9TSHc/maxresdefault.jpg',
          description: 'High land fils of Lolibai'
        })
      );
    });
  }
}
