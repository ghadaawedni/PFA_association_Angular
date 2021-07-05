import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService  {

  visible: boolean ;
  constructor() { this.visible = true; }
  hide() { 
    setTimeout(()=> {
      this.visible = false;
    }, 0);
  }
  show() { 
    setTimeout(()=> {
      this.visible = true;
    }, 0);
  }

}
