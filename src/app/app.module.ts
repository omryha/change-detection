import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { NewsletterService } from './services/newsletter.service';
import { UserService } from './services/user.service';
import { ChangeDetectorRefComponent } from './change-detector-ref/change-detector-ref.component';
import { CdChildComponent } from './change-detector-ref/cd-child/cd-child.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NewsletterComponent, ChangeDetectorRefComponent, CdChildComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserService, NewsletterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
