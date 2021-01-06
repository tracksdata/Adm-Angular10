import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private ps: ProductService,private router: Router) { }

  products=[];

  editProduct(product) {
    this.router.navigate(['product-form', product.id])
  }

  deleteProduct(id) {
    console.log("--- deleting product with id " + id);
    this.ps.deleteProduct(id);
    console.log('product with id ' + id + ' is deleted..');
    this.router.navigate(['home'])



  }

  ngOnInit(): void {
    this.ps.listAll().subscribe(response =>this.products=response)
  }

}
