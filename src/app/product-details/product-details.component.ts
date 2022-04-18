import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public productId: any;
  public productName: any;
  public orderObj = {};
  public _url = "https://uiexercise.onemindindia.com/api/OrderProducts";

  constructor(private router: Router, 
              private route: ActivatedRoute,
              private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
      this.productName = params.get('name');
    });
  }
  buyProduct(quantity : any){
    let quantityRequired =this.quantityCheck(quantity);
   const body = {
    'orderId': this.productId,
    'customerId': this.productId,
    'productId': this.productId,
    'quantity': quantityRequired
   }
    const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );
    this.httpClient.post<any>(this._url, body, {
      headers: headers
    }).subscribe((res) => {
      if(res)
        this.router.navigate(['/success']);
      else
        this.router.navigate(['/orderFailure']);
  });
  }
  quantityCheck(value: any): any{
      if(value !== null || value > 0){
          return Number(value);
      }
  }
}