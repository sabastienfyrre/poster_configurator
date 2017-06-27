import { Component } from '@angular/core';

@Component({
    selector: 'pc-colorPicker',
    templateUrl: './app/colorPicker/colorPicker.component.html',
    styleUrls: ['./app/colorPicker/colorPicker.component.css']
})
    
export class ColorPickerComponent {
    changeCanvasColor(color: string) {
        let canvas: any = document.getElementById('imageCanvas');
        let ctx = canvas.getContext('2d');
        console.log(color);
        canvas.style.background = color;
    }    
}