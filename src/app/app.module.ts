import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ***Material designers modules***//
import { MatButtonModule, MatToolbarModule, MatInputModule } from '@angular/material';

// ***Components***//
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
