import { Component } from '@angular/core';

@Component({
    selector: 'pc-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css'],
    host: {
        '(window.resize)': 'onResize($event)'
    }
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

    windowWidth = window.innerWidth/2;
    windowHeight = this.windowWidth * 11 / 16;
    curImage:HTMLImageElement;
    

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

    onResize(event:any) {
        this.windowWidth = event.target.innerWidth;
        this.windowHeight = this.windowWidth * 11 / 16;
    }

    handleImage(e: any) {
        let imageLoader: HTMLElement = document.getElementById('imageLoader');
        let canvas: any = document.getElementById('imageCanvas');
        let ctx = canvas.getContext('2d');
        let reader = new FileReader();
        let eImage = new Image();

        reader.onload = function (event: any) {
            var img = new Image();
            img.onload = function () {
                eImage = img;
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
        this.curImage = eImage;
        reader.readAsDataURL(e.target.files[0]);
    }

    drawImage(canvas:any, ctx:any) {
        let img = this.curImage;
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

    onOrientationChange(entry:any) {
        this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
        let canvasDiv = document.getElementById('canvasDiv');
        let canvas: any = document.getElementById('imageCanvas');
        let canvas2: any = document.getElementById('imageCanvasCaptionLayer');

        let pWidth = this.windowWidth;
        let pHeight = this.windowHeight;
        let lWidth = this.windowHeight;
        let lHeight = this.windowWidth;

        //apply selected orientation
        if (entry.description == 'Portrait ') {
            console.log(entry.description);
            console.log('_Portrait');
            canvas.width = pWidth;
            canvas.height = pHeight;
            canvas2.width = pWidth;
            canvas2.height = pHeight;
        }
        else {
            console.log(entry.description);
            console.log('_Landscape');
            canvas.width = lWidth;
            canvas.height = lHeight;
            canvas2.width = lWidth;
            canvas2.height = lHeight;
        }
    }
}