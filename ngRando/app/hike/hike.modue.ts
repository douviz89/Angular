import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { HikeListComponent } from "./hike-list.component";
import { HikeService } from "./hike.service";
import { HikeDetailsComponent } from "./hike-details.component";
import { HikeFilterPipe } from "./hike-filter.pipe";

@NgModule({
    imports:        [CommonModule, RouterModule, FormsModule], //liste des modules utilisés par notre module
    declarations:   [HikeListComponent, HikeDetailsComponent, HikeFilterPipe], //liste de tous les component que l'on va créer
    exports:        [HikeListComponent], //liste des components/pipes/directives à disposition des autres utilisateurs de ce module
    providers:      [ HikeService]  //liste de services
})
export class HikeModule {

}