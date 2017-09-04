import { Injectable } from '@angular/core';

@Injectable()
export class BoardService {

  private _width: number = 0;
  private _height: number = 0;
  

  constructor() { }

  get width(): number {
    return this._width;
  }

  get height(): number {
    return this._height;
  }

}
