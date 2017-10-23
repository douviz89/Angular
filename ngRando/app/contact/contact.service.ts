import { Injectable } from "@angular/core";


@Injectable()
export class ContactService {

    postContactForm(contactForm: any){
        console.log("post contact");
        console.log(contactForm.value);
    }
}