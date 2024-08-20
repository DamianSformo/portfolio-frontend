import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';

import { BioModule } from './features/bio/bio.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from './menu/menu.module';
import { ExhibitionModule } from './features/exhibition/exhibition.module';
import { StatementModule } from './features/statement/statement.module';
import { ProjectsModule } from './features/projects/projects.module';

import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { OverlayModule } from '@angular/cdk/overlay';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MenuModule,
    BioModule,
    ExhibitionModule,
    StatementModule,
    ProjectsModule,
    MatDialogModule,
    OverlayModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
