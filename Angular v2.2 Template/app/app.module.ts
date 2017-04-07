import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserListComponent } from "./user-list.component";
import { UserDetailComponent } from "./user-details.component";

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, UserListComponent, UserDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
