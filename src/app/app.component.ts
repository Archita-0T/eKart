import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent, TopHeaderComponent, ContainerComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ekart';
}
