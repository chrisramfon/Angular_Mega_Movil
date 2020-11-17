import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  colapsado = true;
  constructor() { }

  ngOnInit(): void {
  }

  colapsar(){
    if(this.colapsado==true){
      this.colapsado = false;
    }else{
      this.colapsado = true;
    }
  }
}
