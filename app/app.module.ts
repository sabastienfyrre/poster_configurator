import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorPickerComponent } from './colorPicker/colorPicker.component';
import { CaptionAdderComponent } from './captionAdder/captionAdder.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ColorPickerComponent,
    CaptionAdderComponent
  ],
  bootstrap: [
    AppComponent,
    ColorPickerComponent
  ]
})
export class AppModule { }
