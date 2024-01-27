import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{
  images: string[] = ['https://nicee.cc/wp-content/uploads/2017/07/1903.jpg', 'https://i.pinimg.com/236x/0c/10/a2/0c10a25f3f89d82949702502b88f3c79.jpg',
   'https://i.pinimg.com/236x/56/68/d2/5668d2ae166597b475627a49d2ff6c16.jpg', 'https://m.media-amazon.com/images/I/71LR0PLwnoL._AC_UF1000,1000_QL80_.jpg'];
  currentIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startSlideshow();
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousImage(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  startSlideshow(): void {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 2000);
  }

  stopSlideshow(): void {
    clearInterval(this.intervalId);
  }
}
