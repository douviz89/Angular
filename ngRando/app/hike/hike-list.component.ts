import { Component } from '@angular/core';

import { Hike } from "./hike";
import { HikeService } from "./hike.service";

@Component({
    moduleId: module.id,
    selector: 'hike-list',
    templateUrl: 'hike-list.component.html'    
})
export class HikeListComponent {
    hikes: Hike[];
    searchTerm: string;
    
    constructor(private _hikeService: HikeService){
        
    }
    ngOnInit() {
        
                this._hikeService.getHikesFromAPI() // subscribe a l'observable retourné par le provider
                                    .subscribe(
                                        res => this.hikes = res,
                                        err => console.error(err.status)
                                    ); 
            }
}