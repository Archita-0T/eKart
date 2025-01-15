import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, CommonModule],
  declarations: [ AppComponent, HeaderComponent, TopHeaderComponent, TopMenuComponent, MainMenuComponent, ContainerComponent, SearchComponent, ProductListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }