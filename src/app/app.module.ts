import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { NavesComponent } from './content/naves/naves.component';
import { AstronautasComponent } from './content/astronautas/astronautas.component';
import { MissoesComponent } from './content/missoes/missoes.component';
import { HttpClientModule } from '@angular/common/http';

import { EditComponent } from './content/astronautas/edit/edit.component';
import { NovoComponent } from './content/astronautas/novo/novo.component';
import { ExcluirComponent } from './content/astronautas/excluir/excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    NavesComponent,
    AstronautasComponent,
    MissoesComponent,
    EditComponent,
    NovoComponent,
    ExcluirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
