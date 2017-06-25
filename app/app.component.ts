import { Component } from '@angular/core';

@Component({
    selector: 'pc-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    title: string = 'POSTERIZER';
    entries: Array<any> = [];
    selectedEntry: { [key: string]: any } = {
        value: null,
        description: null
    };
    
    constructor() {
    }

    ngOnInit() {
        this.entries = [
            {
                description: 'Portrait ',
                value: 1
            },
            {
                description: 'Landscape ',
                value: 2
            }
        ];

        //default to first
        if (this.entries) {
            this.onOrientationChange(this.entries[0]);
        }
    }

    handleImage(e: any) {
        let imageLoader: HTMLElement = document.getElementById('imageLoader');
        let canvas: any = document.getElementById('imageCanvas');
        let ctx = canvas.getContext('2d');
        let reader = new FileReader();
        
        reader.onload = function (event: any) {
            var img = new Image();
            img.onload = function () {
                //calculate image size and position
                var wrh = img.width / img.height;
                var newWidth = canvas.width;
                var newHeight = newWidth / wrh;
                if (newHeight > canvas.height) {
                    newHeight = canvas.height;
                    newWidth = newHeight * wrh;
                }
                var xOffset = newWidth < canvas.width ? ((canvas.width - newWidth) / 2) : 0;
                var yOffset = newHeight < canvas.height ? ((canvas.height - newHeight) / 2) : 0;
                //clear canvas of previous images to prevent overlap
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                //draw image - adjust to fit canvas and preserve aspect ratio
                ctx.drawImage(img, xOffset, yOffset, newWidth, newHeight);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    onOrientationChange(entry:any) {
        this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
        let canvasDiv = document.getElementById('canvasDiv');
        let canvas: any = document.getElementById('imageCanvas');

        // //apply selected orientation
        // if (entry.description == 'Portrait') {
        //     console.log(entry.description);
        //     canvasDiv.style.width = (window.innerWidth/0.55).toString;
        //     canvasDiv.style.height = window.innerWidth / 0.85;
        // }
        // else {
        //     console.log(entry.description);
        //     canvas.style.maxwidth = '500';
        //     canvas.style.maxheight = '300';
        // }
    }
}