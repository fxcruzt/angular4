import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { HeaderComponent } from './common/layout/header/header.component';
import { LoaderComponent } from './common/loader/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
