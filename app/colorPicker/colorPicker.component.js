"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ColorPickerComponent = (function () {
    function ColorPickerComponent() {
    }
    ColorPickerComponent.prototype.changeCanvasColor = function (color) {
        var canvas = document.getElementById('imageCanvas');
        var ctx = canvas.getContext('2d');
        console.log(color);
        canvas.style.background = color;
    };
    return ColorPickerComponent;
}());
ColorPickerComponent = __decorate([
    core_1.Component({
        selector: 'pc-colorPicker',
        templateUrl: './app/colorPicker/colorPicker.component.html',
        styleUrls: ['./app/colorPicker/colorPicker.component.css']
    })
], ColorPickerComponent);
exports.ColorPickerComponent = ColorPickerComponent;
//# sourceMappingURL=colorPicker.component.js.map