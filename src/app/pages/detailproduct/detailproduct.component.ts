import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.scss']
})
export class DetailproductComponent {
  product: IProduct = {
    name: '',
    price: 0,
  }
  constructor(private products: ProductService, private router: ActivatedRoute) {
    this.router.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.products.getOneProduct(id).subscribe(data => this.product = data)
    })
  }
  onSubmit() {
    this.products.updateProduct(this.product).subscribe(product => console.log(product)
    )
  }
}
