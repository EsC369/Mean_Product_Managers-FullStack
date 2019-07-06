import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
  }

  getAllProducts() {
    return this._http.get("/api/products");
  }

  getOneProduct(id) {
    return this._http.get(`/api/products/${id}`);
  }

  createProduct(newProduct) {
    return this._http.post("/api/products/create", newProduct);
  }

  updateProduct(updatedProduct) {
    return this._http.put(`/api/products/${updatedProduct._id}`, updatedProduct);
  }

  deleteProduct(id: string) {
    return this._http.delete(`/api/products/${id}/delete`, {});
  }

  createComment(id: string, newComment) {
    console.log("createComment - service");
    console.log(newComment.id);
    console.log(newComment);
    return this._http.post(`/api/products/${newComment.id}/comment`, newComment);
  }
  
}
