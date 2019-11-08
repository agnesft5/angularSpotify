import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-v-player',
  templateUrl: './v-player.component.html',
  styleUrls: ['./v-player.component.css']
})
export class VPlayerComponent {

  id: number;

  songList: object[];

  song: object;

  constructor(public _path: ActivatedRoute, public _data: DataService) {

  }
  ngOnInit() {
    this._path.url.subscribe(url =>{
      // Code to get the new notification data 
      // and display it
      this.id = this._path.snapshot.params.id

      this.songList = this._data.songList;
  
      for (let song of this.songList) {
        if (song["id"] == this.id) {
          this.song = song;
        }
  
      }
  });

  }

}
