import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user = "Esma Kızılkaya";
  
}

// component - datayı yöneten dosya
// js de her şey classtır
// { } - obje demek
//  ./ aynı klasörde bulunan demek
//  selector - html tag i, bizim oluşturduğumuz
// [] - array demek
// any  - her veri türü olabilir demek
// js - küçük/BÜYÜK harf duyarlı
