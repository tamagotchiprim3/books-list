import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorePageComponent } from './modules/core/pages/core-page/core-page.component';
import { ListComponentComponent } from './shared/components/list-component/list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CorePageComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
