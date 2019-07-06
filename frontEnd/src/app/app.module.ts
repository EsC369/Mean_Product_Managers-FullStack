import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';
import { AllComponent } from './products/all/all.component';
import { HomeComponent } from './products/home/home.component';
import { ShoweditComponent } from './products/showedit/showedit.component';
import { CommentComponent } from './products/comment/comment.component';




@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CreateComponent,
    EditComponent,
    AllComponent,
    HomeComponent,
    ShoweditComponent,
    CommentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
