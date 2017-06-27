import { Component } from '@angular/core';

@Component({
    selector: 'pc-captionAdder',
    templateUrl: './app/captionAdder/captionAdder.component.html',
    styleUrls: ['./app/captionAdder/captionAdder.component.css']
})
export class CaptionAdderComponent {
    //caption: string;

    changeImageCaption() {
        let caption = (<HTMLInputElement>document.getElementById('captionBox')).value;
        let canvas: any = document.getElementById('imageCanvasCaptionLayer');
        let ctx = canvas.getContext('2d');
        //split sentence into individual words
        let captionSplit = caption.split(" ");

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '50px sans-serif';
        ctx.textAlign = "center";
        //display each word on its own line
        for (var item of captionSplit) {
            //TODO: calculate number of words to fit to a 9 character line
            ctx.fillText(item, canvas.width/2, canvas.height / 1.3 + captionSplit.indexOf(item) * 40);
        }
    } 
}