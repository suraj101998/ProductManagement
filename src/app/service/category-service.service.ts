import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import{ProductCategory} from '../common/ProductCategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  procaturl= "http://localhost:8080/api/ProductsCategory"
  constructor(private httpClient : HttpClient) { }
  getAllProductsCategory() : Observable<ProductCategory[]>{

    console.log(this.httpClient.get< getProductCategoryResponse >(this.procaturl).pipe(map(response => response._embedded.productCategories)))
    return this.httpClient.get< getProductCategoryResponse >(this.procaturl).pipe(map(response => response._embedded.productCategories))
  }
}
interface getProductCategoryResponse{
  _embedded : {
    productCategories : ProductCategory[]
  }
  
}
