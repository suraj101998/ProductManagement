import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import{Product} from '../common/Product';
@Injectable({
  providedIn: 'root'
})
export class ManagementServiceService {

  prourl= "http://localhost:8080/api/Products"
  constructor(private httpClient : HttpClient) { }
  getAllProducts() : Observable<Product[]>{

    console.log(this.httpClient.get< getProductResponse >(this.prourl).pipe(map(response => response._embedded.products)))
    return this.httpClient.get< getProductResponse >(this.prourl).pipe(map(response => response._embedded.products))
  }
}
interface getProductResponse{
  _embedded : {
    products : Product[]
  }
  
}
