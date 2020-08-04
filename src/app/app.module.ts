import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GraphicComponent } from './layout/graphic/graphic.component';
import { TableComponent } from './layout/table/table.component';
import { MapsComponent } from './layout/maps/maps.component';
import { ArticleComponent } from './layout/article/article.component';
import { DetailComponent } from './layout/detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';


const appRoutes:Routes=[

  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'detail', component: DetailComponent },
  { path: 'graphic', component: GraphicComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'table', component: TableComponent },
  { path: 'inscription', component: InscriptionComponent }


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    GraphicComponent,
    TableComponent,
    MapsComponent,
    ArticleComponent,
    DetailComponent,
    FooterComponent,
    InscriptionComponent
  ],
  imports: [
  BrowserModule, RouterModule.forRoot(appRoutes), AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
