import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { contactForm } from "./contact-form.utils";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor() {
    this.contactForm = contactForm();
  }

  ngOnInit(): void {}

  submitMessage(){
    console.log(this.contactForm.value);
  }
}
