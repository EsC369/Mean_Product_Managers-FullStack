import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from "../../http.service"
import {ActivatedRoute, Router, Params} from "@angular/router";

@Component({
  selector: 'app-showedit',
  templateUrl: './showedit.component.html',
  styleUrls: ['./showedit.component.css']
})
export class ShoweditComponent implements OnInit {
  @Input() product: {};
  
  constructor(private _route: ActivatedRoute,private _router: Router,private _httpService: HttpService) { }

  ngOnInit() {
    this.product = { title: "", price: "", imgUrl: ""}
  }

  getOneProduct(id: string) {
    this._httpService.getOneProduct(id).subscribe(data => {
      if(data["message"] == "Success") {
        this.product = data["data"];
        console.log("TEST HERE", this.product);
        // this._router.navigate(["/products/all"]);
      }
    });
  }

  // // update Product route: --------------------
  // updateProduct(id: string) {
  //   this._httpService.updateProduct(id).subscribe(data => {
  //     if(data["message"] == "Success") {
  //       // this.getAllProducts();
  //       this._router.navigate(["/products/all"]);
  //     }
  //   });
  // }

  
}
