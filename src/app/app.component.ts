import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as AOS from 'aos';
import lightGallery from 'lightgallery';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [MatTooltipModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ivanPage';
  mostrarTodas = false;
  galeria: any;
  imagenes = Array.from({ length: 26 }, (_, i) => ({
    thumb: `assets/img/trabajo${i + 1}-thumb.avif`,
    full: `assets/img/trabajo${i + 1}-full.avif`
  }));


  ngOnInit() {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true
    });
  }

  ngAfterViewInit(): void {
    this.initGallery();
  }

  toggleVerMas(): void {
    this.mostrarTodas = !this.mostrarTodas;
    setTimeout(() => {
      this.destroyGallery();
      this.initGallery();
    }, 100); // esperamos a que Angular renderice el nuevo contenido
  }

  initGallery(): void {
    this.galeria = lightGallery(document.getElementById('lightgallery')!, {
      plugins: [lgZoom, lgThumbnail],
      speed: 500
    });
  }

  destroyGallery(): void {
    if (this.galeria) {
      this.galeria.destroy();
      this.galeria = null;
    }
  }
}
