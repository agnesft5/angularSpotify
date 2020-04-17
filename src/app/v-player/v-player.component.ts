import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-v-player',
  templateUrl: './v-player.component.html',
  styleUrls: ['./v-player.component.css']
})
export class VPlayerComponent implements OnInit {

  id: number;

  songList: object[];

  song: object;

  player: Element = (<HTMLAudioElement>document.getElementById("player"));

  constructor(public _path: ActivatedRoute, public _data: DataService) {

    function playOrPause(): void {
      if (this.player.paused) {
        this.player.play();
        document.querySelector(".body > app-root > app-v-player > div.d-none.d-md-block > div > div:nth-child(3) > p > i").className = "far fa-pause-circle text-gray pauseIcon playerIcon";
      } else {
        this.player.pause();
        document.querySelector(".body > app-root > app-v-player > div.d-none.d-md-block > div > div:nth-child(3) > p > i").className = "far fa-play-circle text-gray playIcon playerIcon";
      }
    }

    function changeColor() {
      document.querySelector("#prueba").className = "btn btn-success"
    }

  }


  ngOnInit() {
    this._path.url.subscribe(url => {
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

    this.player.addEventListener('timeupdate', function () {
      var duration = this.player.duration;
      if (duration > 0) {
        document.getElementById('progress-amount').style.width = ((this.player.currentTime / duration) * 100) + "%";
      }
    });

  }

  ngOnChanges() {

    //   this.player.addEventListener('timeupdate', function () {
    //     var duration = this.player.duration;
    //     if (duration > 0) {
    //       document.getElementById('progress-amount').style.width = ((this.player.currentTime / duration) * 100) + "%";
    //     }
    //   });
    // }

  }
}