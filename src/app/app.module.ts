import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list/list.component';
import { CardComponent } from './list/card/card.component';
import { DetailsComponent } from './details/details/details.component';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './list/paginator/paginator.component';
import { ObjectToArrayPipe } from './lib/pipes/object-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    DetailsComponent,
    PaginatorComponent,
    ObjectToArrayPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
