import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-v-player',
  templateUrl: './v-player.component.html',
  styleUrls: ['./v-player.component.css']
})
export class VPlayerComponent implements OnInit {

  id:number;

  songList:object[];

  constructor(public _path:ActivatedRoute, public _data:DataService) {
    this.id=this._path.snapshot.params.id

    this.songList=this._data.songList;
   }

  ngOnInit() {
  }

}
