import { Component, OnInit, HostListener } from '@angular/core';
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryAnimation
} from 'ngx-gallery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  title = 'app';
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.matchMedia('(min-width: 769px)').matches) {
      this.galleryOptions = [
        {
          width: '700px',
          height: '500px',
          thumbnailsColumns: 3,
          imageAnimation: NgxGalleryAnimation.Zoom
        },
        {
          breakpoint: 1492,
          width: '150%',
          height: '500px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        {
          breakpoint: 1280,
          width: '95%',
          height: '500px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        {
          breakpoint: 1024,
          width: '100%',
          height: '500px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 800
        {
          breakpoint: 800,
          width: '100%',
          height: '500px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
        },
        // max-width 400
        {
          breakpoint: 400,
          preview: false
        },
        // max-width 320
        {
          breakpoint: 320,
          width: '100%',
          height: '320px',
          preview: false
        }
      ];
    }
  }
  ngOnInit(): void {
    this.getCountDownTimerScript();
    this.galleryOptions = [
      {
        width: '1200px',
        height: '700px',
        thumbnailsColumns: 5,
        imageAnimation: NgxGalleryAnimation.Zoom
      },
      {
        breakpoint: 1492,
        width: '95%',
        height: '800px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 1280,
        width: '95%',
        height: '800px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      {
        breakpoint: 1024,
        width: '100%',
        height: '800px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      },
      // max-width 320
      {
        breakpoint: 320,
        width: '100%',
        height: '320px',
        preview: false
      }
    ];
    this.galleryImages = [
      {
        small: '../assets/images/pic6.JPG',
        medium: '../assets/images/pic6.JPG',
        big: '../assets/images/pic6.JPG'
      },
      {
        small: '../assets/images/pic4.JPG',
        medium: '../assets/images/pic4.JPG',
        big: '../assets/images/pic4.JPG'
      },
      {
        small: '../assets/images/pic5.JPG',
        medium: '../assets/images/pic5.JPG',
        big: '../assets/images/pic5.JPG'
      },
      {
        small: '../assets/images/pic3.JPG',
        medium: '../assets/images/pic3.JPG',
        big: '../assets/images/pic3.JPG'
      },
      {
        small: '../assets/images/pic7.JPG',
        medium: '../assets/images/pic7.JPG',
        big: '../assets/images/pic7.JPG'
      },
      {
        small: '../assets/images/pic1.JPG',
        medium: '../assets/images/pic1.JPG',
        big: '../assets/images/pic1.JPG'
      },
      {
        small: '../assets/images/pic2.jpg',
        medium: '../assets/images/pic2.jpg',
        big: '../assets/images/pic2.jpg'
      }
      // {
      //   small: '../assets/images/couple-1.jpg',
      //   medium: '../assets/images/couple-1.jpg',
      //   big: '../assets/images/couple-1.jpg'
      // },
      // {
      //   small: '../assets/images/c.jpg',
      //   medium: '../assets/images/couple-2.jpg',
      //   big: '../assets/images/couple-2.jpg'
      // },
      // {
      //   small: '../assets/images/couple-3.jpg',
      //   medium: '../assets/images/couple-3.jpg',
      //   big: '../assets/images/couple-3.jpg'
      // },
      // {
      //   small: '../assets/images/couple-4.jpg',
      //   medium: '../assets/images/couple-4.jpg',
      //   big: '../assets/images/couple-4.jpg'
      // },
      // {
      //   small: '../assets/images/evnt.jpg',
      //   medium: '../assets/images/evnt.jpg',
      //   big: '../assets/images/evnt.jpg'
      // },
      // {
      //   small: '../assets/images/evt.jpg',
      //   medium: '../assets/images/evt.jpg',
      //   big: '../assets/images/evt.jpg'
      // },
      // {
      //   small: '../assets/images/evtt.jpg',
      //   medium: '../assets/images/evtt.jpg',
      //   big: '../assets/images/evtt.jpg'
      // },
      // {
      //   small: '../assets/images/gallery-1.jpg',
      //   medium: '../assets/images/gallery-1.jpg',
      //   big: '../assets/images/gallery-1.jpg'
      // },
      // {
      //   small: '../assets/images/gallery-2.jpg',
      //   medium: '../assets/images/gallery-2.jpg',
      //   big: '../assets/images/gallery-2.jpg'
      // },
      // {
      //   small: '../assets/images/gallery-3.jpg',
      //   medium: '../assets/images/gallery-3.jpg',
      //   big: '../assets/images/gallery-3.jpg'
      // },
      // {
      //   small: '../assets/images/gallery-4.jpg',
      //   medium: '../assets/images/gallery-4.jpg',
      //   big: '../assets/images/gallery-4.jpg'
      // }
    ];
  }
    getCountDownTimerScript() {
      const deadline = new Date('Aug 29, 2018 10:04:00').getTime();
      const x = setInterval(function() {
      const now = new Date().getTime();
      const t = deadline - now;
      const days = Math.floor(t / (1000 * 60 * 60 * 24));
      const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((t % (1000 * 60)) / 1000);
         document.getElementById('days').innerHTML = days + '';
         document.getElementById('hrs').innerHTML = hours + '';
         document.getElementById('min').innerHTML = minutes + '';
         document.getElementById('sec').innerHTML = seconds + '';
          if (t < 0) {
              clearInterval(x);
              const y = setInterval(function() {
                const nw = new Date().getTime();
                const time = -deadline + nw;
                const dys = Math.floor(time / (1000 * 60 * 60 * 24));
                const hrs = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((time % (1000 * 60)) / 1000);
                document.getElementById('days').innerHTML = dys + '';
                document.getElementById('hrs').innerHTML = hrs + '';
                document.getElementById('min').innerHTML = mins + '';
                document.getElementById('sec').innerHTML = secs + '';
                document.getElementById('life').innerHTML = 'My New Life Count Begins';
              } , 1000);
          }
      }, 1000);
    }
  }

