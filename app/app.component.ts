import { Component } from '@angular/core';

@Component({
    selector: 'pc-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    title:string = 'POSTERIZER';
    
    handleImage(e: any) {
        let imageLoader = document.getElementById('imageLoader');
        let canvas: any = document.getElementById('imageCanvas');
        let ctx = canvas.getContext('2d');
        var reader = new FileReader();
        reader.onload = function (event: any) {
            var img = new Image();
            img.onload = function () {
                ctx.drawImage(img, 0, 0);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }
}