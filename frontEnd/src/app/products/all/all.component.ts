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
  
  constructor(private _route: ActivatedRoute,private _router: Router,private _httpService: HttpService) { }

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

  
}