import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webshop';
  constructor(public route: ActivatedRoute) {}
}
