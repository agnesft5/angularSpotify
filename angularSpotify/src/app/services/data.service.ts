import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  songList:object[]=[
    {"title":"Un nuevo sol", "autor":"Vita Imana", "album":"Ulbum (2012)", "cover":"vitaimana.jpg", "song":"unnuevosol.mp3", "id":0},
    {"title":"Psychosocial", "autor":"Slipknot", "album":"All Hope Is Gone", "cover":"slipknot.jpg", "song":"psychosocial.mp3", "id":1},
    {"title":"Time", "autor":"Pink Floyd", "album":"Dark Side of The Moon", "cover":"pinkfloyd.jpg", "song":"time.mp3", "id":2},
    {"title":"The Unforgiven", "autor":"Metallica", "album":"Black Album (1973)", "cover":"metallica.jpg", "song":"theunforgiven.mp3", "id":3},
    {"title":"Octubres rotos", "autor":"Desakato", "album":"Con el viento en la cara (2008)", "cover":"desakato.jpg", "song":"octubresrotos.mp3", "id":4},
    {"title":"Corbelles", "autor":"ZOO Pose", "album":"Tempestes vénen del sud", "cover":"zoo.jpg", "song":"corbelles.mp3", "id":5},
  ]
  constructor() { }
}
