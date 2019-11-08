import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VSongListComponent } from './v-song-list/v-song-list.component';
import { VPlayerComponent } from './v-player/v-player.component';
import { DataService } from './services/data.service';

import { RouterModule, Routes } from '@angular/router'

const routerConfig:Routes=[
  {"path":"", "component":VSongListComponent},
  {"path":"songList", "component":VSongListComponent},
  {"path":"player/:id", "component":VPlayerComponent},
  {"path":"**", "component":VSongListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    VSongListComponent,
    VPlayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig, {useHash:true})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
