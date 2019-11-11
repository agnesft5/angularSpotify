import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-v-song-list',
  templateUrl: './v-song-list.component.html',
  styleUrls: ['./v-song-list.component.css']
})
export class VSongListComponent implements OnInit {

  songList:object[];
  
  constructor(public _data:DataService) {
    this.songList=this._data.songList;
   }

  ngOnInit() {
  }

}
