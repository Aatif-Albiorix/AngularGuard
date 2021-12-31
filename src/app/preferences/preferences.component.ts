import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'preferences',
    templateUrl: './preferences.component.html',
})

export class PreferencesComponent implements OnInit{

    constructor(private ActivatedRoute: ActivatedRoute){ }
    
    ngOnInit(): void {
        console.log(this.ActivatedRoute.snapshot.data);
    }
}