import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule} from 'ng2-bootstrap/ng2-bootstrap';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap'
import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ColorPreviewComponent } from './color-preview/color-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ColorPreviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2BootstrapModule,
    AlertModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
