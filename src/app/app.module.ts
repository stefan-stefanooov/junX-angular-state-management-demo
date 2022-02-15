import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LinksComponent } from './components/links/links.component';
import { NavComponent } from './components/nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { TaskComponent } from './components/task/task.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { metaReducers, reducers } from './reducers';
import { AppEffects } from './effects';
import { HttpClientModule } from '@angular/common/http';
import { selectedRatesRV } from './modules/graphQL-apollo/reactive-vars';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LinksComponent,
    NavComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatIconModule,
    MatListModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects, ]),
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache({
            typePolicies: {
              Query: {
                fields: {
                  selectedRates: {
                    read() {
                      return selectedRatesRV();
                    },
                  },
                },
              },
            },
          }),
          link: httpLink.create({
            uri: 'https://48p1r2roz4.sse.codesandbox.io'
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
