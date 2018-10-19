import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { environment } from '../environments/environment';
import { ChatModule } from './chat/chat.module';

const routes = [
  {path: '', component: HomeComponent},
  {path: ':id', component: InfoComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ChatModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
