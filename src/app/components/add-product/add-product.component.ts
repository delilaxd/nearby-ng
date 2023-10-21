import { Component, OnInit } from '@angular/core';
import { GpsCoordinates } from 'src/app/models/gps-coordinates.model';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = {
    name: '',
    description: '',
    category: null,
    price: 0,
    gpsCoordinates: new GpsCoordinates(),
    views: 0,
    image: '',
  };
  submitted = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  saveProduct(): void {
    const data = {
      name: this.product.name,
      description: this.product.description,
      category: null,
      price: this.product.price,
      gpsCoordinates: new GpsCoordinates,
      views: this.product.views,
      image: this.product.image
    };

    this.productService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newProduct(): void {
    this.submitted = false;
    this.product = {
      name: '',
      description: '',
      category: null,
      price: 0,
      gpsCoordinates: new GpsCoordinates(),
      views: 0,
      image: '',
    };
  }

}