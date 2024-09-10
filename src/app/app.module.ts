/**
 * This code was generated by Builder.io.
 */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReceiverDetailsModule } from "../receiver-details/receiver-details.module";
import { LoginPageComponent } from "../login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, ReceiverDetailsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
   exports: [LoginPageComponent],
})
export class AppModule {}
