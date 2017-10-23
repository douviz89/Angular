import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Hike } from "./hike";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class HikeService {
    
    constructor(private _http: Http){
        
    }

    // getHikes(){
    //     return this.hikes;
    // }

    getHikesFromAPI(){
        return this._http.get('app/api/hikes.json') // => retourne un observable 
            //.do( x => console.log(x) ) // observer un observable par do
            .map( hikes => hikes.json() ); // map retourne un observable que l'on map en json 
    }
}