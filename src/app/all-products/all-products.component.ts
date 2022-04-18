import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Products } from '../products';
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  productList: Products[] = [];
  products: Products[] = [];
  finalizedProducts: Products[] = [];
  private _url: string = "https://uiexercise.onemindindia.com/api/Product";

  constructor(private httpClient : HttpClient,
              private router: Router, 
              private route: ActivatedRoute){}
  
  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.httpClient.get<any>(this._url).subscribe(
      res => {
        if(res){
          this.products = res;
          this.productList = this.removeNullValues(this.products);
        }
      }
    );
  }
  removeNullValues(arr: Products[]){
    return arr.filter(x => x.productName !== null && x.availableQuantity > 0 && !x.productName.match(" ") );
  }
  navigatetoDetails(products: any){
    let productId = products.productId;
    this.router.navigate(['/productDetail',  productId, products.productName]);
  }
}
