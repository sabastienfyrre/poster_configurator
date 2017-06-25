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
        this.orientation = "";
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
    AppComponent.prototype.handleImage = function (e) {
        var imageLoader = document.getElementById('imageLoader');
        var canvas = document.getElementById('imageCanvas');
        var ctx = canvas.getContext('2d');
        var reader = new FileReader();
        if (this.orientation == 'Portrait') {
            console.log(this.orientation);
            ctx.canvas.width = '400%';
            ctx.canvas.height = '600%';
        }
        else {
            console.log(this.orientation);
            ctx.canvas.width = '700%';
            ctx.canvas.height = '400%';
        }
        reader.onload = function (event) {
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
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    };
    // handleOrientation() {
    //     let portrait = document.getElementById('orientationRB_1').getAttribute('checked');
    //     if (portrait == 'true') {
    //         alert('portrait');
    //     }
    //     else {
    //         alert('landscape');
    //     }
    //     return portrait;
    // }
    AppComponent.prototype.onOrientationChange = function (entry) {
        this.selectedEntry = Object.assign({}, this.selectedEntry, entry);
        this.orientation = entry.description;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pc-app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.css']
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map