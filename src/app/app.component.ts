// app.component.ts
import { Component, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-pdf-viewer-app';
  pdfSrc="";  

  @ViewChild(PdfViewerComponent) 
  renderText = true;
  originalSize = false;

  showAll = true;
  autoresize = false;
  showBorders = true;
  renderTextModes = [0, 1, 2];
  renderTextMode = 1;
  rotation = 0;
  zoom = 1;
  zoomScale = 'page-width';
  zoomScales = ['page-width', 'page-fit'];
  pdfQuery = '';
  totalPages: number[]=[];

  zoomIn() {
    this.zoom += 0.05;
  }

  zoomOut() {
    if (this.zoom > 0.05)
      this.zoom -= 0.05;
  }

  rotateDoc() {
    this.rotation += 90;
  }

  downloadPdf(){}


  // Event handler when new PDF file is selected
  onFileSelected() {
    const $pdf: any = document.querySelector('#file');

    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };

      reader.readAsArrayBuffer($pdf.files[0]);
    }
  }

  callBackFn(event: any) {
    console.log('callBackFn', event);
    // Setting total number of pages
    this.totalPages = event._pdfInfo.numPages
  }
  pageRendered(event: any) {
    console.log('pageRendered', event);
  }
  textLayerRendered(event: any) {
    console.log('textLayerRendered', event);
  }
  onError(event: any) {
    console.error('onError', event);
  }
  onProgress(event: any) {
    console.log('onProgress', event);
  }
}