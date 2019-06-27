import { Component, OnInit } from '@angular/core';
import { HttpService} from "../../http.service"
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  updatedProduct: any;
  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.updateProduct();
  }
  
   // Update Product Route:-------------------
   updateProduct() {
    this._route.params.subscribe((params: Params) => {

    let observable = this._httpService.updateProduct(params["id"]);
    observable.subscribe(data => {
      this.updatedProduct = {title: "", description: ""};
      console.log("Successfully updated!");

      // Rediret to root:
      this._router.navigate(["/products/all"]);
      // this.getAllProducts();
    });
  });
  }
}
