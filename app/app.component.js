"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'POSTERIZER';
        this.entries = [];
        this.selectedEntry = {
            value: null,
            description: null
        };
        this.windowWidth = window.innerWidth / 2;
        this.windowHeight = this.windowWidth * 11 / 16;
    }
    AppComponent.prototype.ngOnInit = function () {
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
    };
    AppComponent.prototype.onResize = function (event) {
        this.windowWidth = event.target.innerWidth;
        this.windowHeight = this.windowWidth * 11 / 16;
    };
    AppComponent.prototype.handleImage = function (e) {
        var imageLoader = document.getElementById('imageLoader');
        var canvas = document.getElementById('imageCanvas');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        var eImage = new Image();
        reader.onload = function (event) {
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
            };
            img.src = event.target.result;
        };
        this.curImage = eImage;
        reader.readAsDataURL(e.target.files[0]);
    };
    AppComponent.prototype.drawImage = function (canvas, ctx) {
        var img = this.curImage;
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
    };
    AppComponent.prototype.onOrientationChange = function (entry) {
        this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
        var canvasDiv = document.getElementById('canvasDiv');
        var canvas = document.getElementById('imageCanvas');
        var canvas2 = document.getElementById('imageCanvasCaptionLayer');
        var pWidth = this.windowWidth;
        var pHeight = this.windowHeight;
        var lWidth = this.windowHeight;
        var lHeight = this.windowWidth;
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
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pc-app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.css'],
        host: {
            '(window.resize)': 'onResize($event)'
        }
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map