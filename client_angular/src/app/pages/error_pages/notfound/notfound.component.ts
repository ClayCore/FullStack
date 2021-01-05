import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.scss'],
})
export class NotFoundComponent implements OnInit {
    constructor(private titleService: Title) {
        this.titleService.setTitle('404 - Not found');
    }

    ngOnInit() {}
}
