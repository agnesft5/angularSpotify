import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-v-biblioteca',
  templateUrl: './v-biblioteca.component.html',
  styleUrls: ['./v-biblioteca.component.css']
})
export class VBibliotecaComponent implements OnInit {

  songList: object[];

  constructor(public _data: DataService) {
    this.songList = this._data.songList;
  }

  ngOnInit() {
  }

}
