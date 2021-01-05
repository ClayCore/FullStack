import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-internalserver',
    templateUrl: './internalserver.component.html',
    styleUrls: ['./internalserver.component.scss'],
})
export class InternalServerComponent implements OnInit {
    constructor(private titleService: Title) {
        this.titleService.setTitle('500 - Server Error');
    }

    ngOnInit() {}
}
