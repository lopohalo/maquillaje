import { Component, OnInit , AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {A11y, Mousewheel, Navigation, Pagination, SwiperOptions} from 'swiper';
import { BehaviorSubject } from "rxjs";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  showImageTwo: boolean = false;
  primeraCarta:string = 'marron1'
  primeraCarta2:string = 'marron1'
  primeraCarta3:string = 'marron1'
  primeraCarta4:string = 'marron1'
  @ViewChild('swiperContainer') swiperContainer: any;
  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  
  config: SwiperOptions = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 50, // Ajusta el valor para controlar el tamaño de las imágenes de fondo
      depth: 100, // Ajusta el valor para controlar la perspectiva de las imágenes de fondo
      modifier: 1,
      slideShadows: true
    },
    slidesPerView: 3,
    centeredSlides: true,
    breakpoints: {
      400: {
        slidesPerView: 'auto',
        centeredSlides: false
      }
    },
    on: {
      init: () => {
        setTimeout(() => {
          this.updateSlides();
        }, 100);
      }
    }
  };
  showImage2() {
    this.showImageTwo = true;
  }

  showImage1() {
    this.showImageTwo = false;
  }
  cambiarColor(color:any){
    this.primeraCarta = color
    console.log(this.primeraCarta)
  }
  cambiarColor2(color:any){
    this.primeraCarta2 = color
    console.log(this.primeraCarta)
  }
  cambiarColor3(color:any){
    this.primeraCarta3 = color
    console.log(this.primeraCarta)
  }
  cambiarColor4(color:any){
    this.primeraCarta4 = color
    console.log(this.primeraCarta)
  }
  onSwiper($event:any){
console.log($event)
  }
  updateSlides() {
    if (this.swiperContainer && this.swiperContainer.directiveRef) {
      this.swiperContainer.directiveRef.update();
    }
  }
  onSlideChange(){
    console.log('slide change');
  }
}