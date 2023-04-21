import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home-layout',
  template: `
  <div class="container-fluid g-0">
    <app-admin-header (sideNavToggled)="sideNavStatus = $event;"></app-admin-header>
    <main>
      <app-admin-sidenav [sideNavStatus]="sideNavStatus" [ngClass]="{'app-admin-sidenav-open': sideNavStatus}"></app-admin-sidenav>

      <div class="display-area p-3" [ngClass]="{'display-area-shrink': sideNavStatus}">
            <router-outlet></router-outlet>
          </div>
    </main>
  </div>
  `,
  styleUrls: ['../components/admin-home/admin-home.component.scss']
})
export class HomeLayoutComponent implements OnInit{
  router: string;
  sideNavStatus: boolean = false;
  ngOnInit(): void {

  }
  constructor(private _router:Router) {
    this.router = _router.url;
  }
}
