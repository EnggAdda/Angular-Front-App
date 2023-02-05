import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-frontapp',
  templateUrl: './frontapp.component.html',
  styleUrls: ['./frontapp.component.css']
})
export class FrontappComponent {

  products :any

  constructor(http :HttpClient){

    let response = http.get("http://localhost:9000/api/products");
    response.subscribe(data => {this.products = data});



  }

}
