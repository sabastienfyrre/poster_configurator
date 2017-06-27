"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CaptionAdderComponent = (function () {
    function CaptionAdderComponent() {
    }
    //caption: string;
    CaptionAdderComponent.prototype.changeImageCaption = function () {
        var caption = document.getElementById('captionBox').value;
        var canvas = document.getElementById('imageCanvasCaptionLayer');
        var ctx = canvas.getContext('2d');
        //split sentence into individual words
        var captionSplit = caption.split(" ");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '50px sans-serif';
        ctx.textAlign = "center";
        //display each word on its own line
        for (var _i = 0, captionSplit_1 = captionSplit; _i < captionSplit_1.length; _i++) {
            var item = captionSplit_1[_i];
            //TODO: calculate number of words to fit to a 9 character line
            ctx.fillText(item, canvas.width / 2, canvas.height / 1.3 + captionSplit.indexOf(item) * 40);
        }
    };
    return CaptionAdderComponent;
}());
CaptionAdderComponent = __decorate([
    core_1.Component({
        selector: 'pc-captionAdder',
        templateUrl: './app/captionAdder/captionAdder.component.html',
        styleUrls: ['./app/captionAdder/captionAdder.component.css']
    })
], CaptionAdderComponent);
exports.CaptionAdderComponent = CaptionAdderComponent;
//# sourceMappingURL=captionAdder.component.js.map