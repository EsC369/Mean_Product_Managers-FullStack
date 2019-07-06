import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  @Input() products = [];
  newComment = { name: "", comment_content: "", id: ""};
  product_id: any;
  constructor(private _httpService: HttpService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this._httpService.getAllProducts().subscribe(data => {
      if(data["message"] == "Success") {
        this.products = data["data"];
        this._router.navigate(["/products/all"]);
      }
    });
  }

  // Delete Product route: --------------------
  deleteProduct(id: string) {
    if(confirm("Are you sure you want to delete this product?")) {
      this._httpService.deleteProduct(id).subscribe(data => {
        if(data["message"] == "Success") {
          this.getAllProducts();
        }
      });
    }
  }
  
  // createComment(newComment) {
  //   console.log("Created New product", this.newComment);
  //   console.log(this.newComment.id);
  //   console.log("****************");
  //   const obs = this._httpService.createComment(this.newComment);
  //   obs.subscribe(data => {
  //     console.log(data);
  //     console.log("Created Comment");
  //     console.log("TEST here", data);
  //     this.newComment = { name: "", comment_content: "", id: "" }
  //     this._router.navigate(["/products/all"]);
  //   })
  // };

  

}