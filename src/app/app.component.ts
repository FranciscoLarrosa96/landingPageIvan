import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as AOS from 'aos';
import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [MatTooltipModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ivanPage';
  mostrarTodas = false;

  imagenes = Array.from({ length: 26 }, (_, i) => `assets/img/trabajo${i + 1}.avif`);

  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }

  ngAfterViewInit(): void {
    lightGallery(document.getElementById('lightgallery')!, {
      plugins: [lgZoom, lgThumbnail],
      speed: 500
    });
  }
}
