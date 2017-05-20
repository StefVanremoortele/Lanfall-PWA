import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PlayerSearchService } from '../../services/player-search.service';
import { Player } from '../../models/Player';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.scss'],
  providers: [PlayerSearchService]
})
export class PlayerSearchComponent implements OnInit {
  players: Observable<Player[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private _playersSearchService: PlayerSearchService,
    private router: Router) { }

  search(term: string): void {
    // Push a search term into the observable stream.
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.players = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this._playersSearchService.search(term)
        // or the observable of empty players if no search term
        : Observable.of<Player[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(`Error in component ... ${error}`);
        return Observable.of<Player[]>([]);
      });
  }

  gotoDetail(player: Player): void {
    const link = ['/player', player.id];
    this.router.navigate(link);
  }
}
