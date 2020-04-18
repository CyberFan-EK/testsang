import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppComponent} from './app.component'
import {FormsModule} from '@angular/forms'
import {HomePageComponent} from './home-page/home-page.component'
import {AppRoutingModule} from './app-routing.module'
import {AboutPageModule} from "./about-page/about-page.module";
import {SharedModule} from "./shared/shared.module";
import { PageModalComponent } from './page-modal/page-modal.component';
import { ModalComponent } from './page-modal/modal/modal.component';
import {RefDirective} from "./page-modal/ref.directive";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageModalComponent,
    ModalComponent,
      RefDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
          SharedModule,
          ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
