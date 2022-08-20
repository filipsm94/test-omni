import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'omni-app';
  imageSizeObject = { width: '100%', height: '0%' }

  imageObject: Array<object> = [
    {
      // image: 'assets/cars/bmw.jpg',
      thumbImage: 'assets/cars/bmw.jpg',
      alt: 'alt of image',
    }, {
      // image: 'assets/cars/audi.jpg', // Support base64 image
      thumbImage: 'assets/cars/audi.jpg', // Support base64 image
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
    {
      // image: 'assets/cars/audi.jpg', // Support base64 image
      thumbImage: 'https://www.bmw.com.co/content/dam/bmw/common/all-models/3-series/sedan/2018/navigation/bmw-3-series-modellfinder.png',
      alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    },
    {
      // image: 'assets/cars/audi.jpg', // Support base64 image
      thumbImage: 'https://www.bmw.com.co/content/dam/bmw/common/all-models/i-series/i4/navigation/bmw-i4-mini-landingpage-modelfinder.png',
      alt: 'Image alt2', //Optional: You can use this key if want to show image with alt
    }, {
      // image: 'assets/cars/audi.jpg', // Support base64 image
      thumbImage: 'assets/cars/audi.jpg', // Support base64 image
      alt: 'Image alt3', //Optional: You can use this key if want to show image with alt
      order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
    },
    {
      // image: 'assets/cars/audi.jpg', // Support base64 image
      thumbImage: 'https://www.bmw.com.co/content/dam/bmw/common/all-models/3-series/sedan/2018/navigation/bmw-3-series-modellfinder.png',
      alt: 'Image alt4', //Optional: You can use this key if want to show image with alt
    },
    {
      // image: 'assets/cars/audi.jpg', // Support base64 image
      thumbImage: 'https://www.bmw.com.co/content/dam/bmw/common/all-models/i-series/i4/navigation/bmw-i4-mini-landingpage-modelfinder.png',
      alt: 'Image alt5', //Optional: You can use this key if want to show image with alt
    }
  ];
}
