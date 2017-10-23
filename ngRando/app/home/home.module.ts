import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./home.component";

@NgModule({
    imports:        [CommonModule], //liste des modules utilisés par notre module
    declarations:   [HomeComponent], //liste de tous les component que l'on va créer
    exports:        [HomeComponent], //liste des components/pipes/directives à disposition des autres utilisateurs de ce module
})
export class HomeModule {}