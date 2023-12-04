import { Component, inject, Injectable, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalStore {
  a = signal('a');
}

@Component({
  selector: 'app-nested',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<div>{{store.a()}}</div>`
})
export class NestedComponent {
  store = inject(GlobalStore);
}

@Component({
  selector: 'app-routed',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<div>{{store.a()}}</div>`
})
export class RoutedComponent {
  store = inject(GlobalStore);
}

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NestedComponent],
  template: `<button routerLink="routed">navigate</button>
  <app-nested *ngIf="showNested"></app-nested>
  <button (click)="showNested = !showNested">show nested</button>`
})
export class DefaultComponent {
  showNested = false;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RoutedComponent],
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'signal-leaks';
}
