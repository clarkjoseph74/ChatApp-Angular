import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UploadWidgetModule } from '@bytescale/upload-widget-angular';
import { UploaderModule } from 'angular-uploader';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'primeng/fileupload';
library.add(faHeart);
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    FontAwesomeModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    NgxSpinnerModule,
    UploaderModule,
    BrowserModule,
    BrowserAnimationsModule,
    FileUploadModule,
  ],
  exports: [
    CommonModule,
    ToastrModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    NgxSpinnerModule,
    UploaderModule,
    BrowserModule,
    BrowserAnimationsModule,
    FileUploadModule,
  ],
})
export class SharedModule {}
