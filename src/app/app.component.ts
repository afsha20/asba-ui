import { afterNextRender, AfterViewInit, Component, ElementRef, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import AOS from "aos";
// @ts-ignore
import PureCounter from "@srexi/purecounterjs";
import { ModalDismissReasons, NgbCarouselConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {register} from 'swiper/element/bundle';
import Swiper from 'swiper';
import { ServiceModalComponent } from './components/service-modal/service-modal.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [NgbCarouselConfig]
})
export class AppComponent implements OnInit, AfterViewInit {
  tab: string = 'hero';
  ngOnInit(): void {
    AOS.init();
    new PureCounter();
  }

  ngAfterViewInit(): void {
    register();
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  title = 'asba-gases';

  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper

  clientSwipperParams =  {
    init: true,
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: false
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120
      }
    },
    injectStyles: [
      `
      .clients .swiper-pagination {
        margin-top: 20px;
        position: relative;
      }
      
      .clients .swiper-pagination .swiper-pagination-bullet {
        width: 12px;
        height: 12px;
        background-color: #fff;
        opacity: 1;
        border: 1px solid #e03a3c;
      }
      
      .clients .swiper-pagination .swiper-pagination-bullet-active {
        background-color: #e03a3c;
      }
      `
    
    ],
  };

  constructor() {
    afterNextRender((): void => {
      Object.assign(this.swiperRef?.nativeElement, this.clientSwipperParams); // Add parameters to the Swiper
      this.swiperRef?.nativeElement.initialize();
    })
	}

  onActiveIndexChange() {
    // console.log(this.swiper?.activeIndex);
  }

  private modalService = inject(NgbModal);
	closeResult = '';

  open(type: string) {
		const modalRef = this.modalService.open(ServiceModalComponent, {size: 'xl'});
		modalRef.componentInstance.type = type;
	}

  isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  changeTab(tab: string) {
    this.tab = tab
  }

  
 
}
