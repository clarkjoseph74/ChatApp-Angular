import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css',
})
export class ImageGalleryComponent {
  @Input() images: string[] = [];

  selectedImageIndex = 0;

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }
}
