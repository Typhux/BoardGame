import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SettingsBoardComponent } from './settings-board/settings-board.component';
import { BoardService } from "./services/board.service";

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SettingsBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
