import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {
    starWidth: Number;
    @Input() rating: number;
    @Output() ratingOutput: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating * 86 / 6;
    }

    starclicked(): void{
        this.ratingOutput.emit(`The rating for the clicked star is ${this.rating}`);
    }
}