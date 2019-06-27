import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../http.service"
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private _httpService: HttpService, private _router: Router) { }
  newProduct = { title: "", price: "", imgUrl: "" };
  ngOnInit() {
  }
  
   // Create New Product Route:---------------
  createProduct() { 
    let observable = this._httpService.createProduct(this.newProduct);
    observable.subscribe(data => {
      console.log("Product Successfully Created!");
    this.newProduct = { title: "", price: "", imgUrl: "" }
    
    // Reroute to  All Products:
    this._router.navigate(["/products/all"]);
    });
  }
  
}
