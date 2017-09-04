import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-settings-board',
  templateUrl: './settings-board.component.html',
  styleUrls: ['./settings-board.component.sass']
})
export class SettingsBoardComponent implements OnInit {

  constructor() { }

  public widthBoard: number = 0;
  public heightBoard: number = 0;
  

  ngOnInit() {
  }

}
