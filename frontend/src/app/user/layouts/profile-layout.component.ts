import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-layout',
  template: `
  <div class="container-fluid g-0">
  <app-user-header (sideNavToggled)="sideNavStatus = $event;"></app-user-header>
  <main>
    <app-user-sidenav [sideNavStatus]="sideNavStatus" [ngClass]="{'app-side-nav-open': sideNavStatus}"></app-user-sidenav>
    <div class="display-area p-3" [ngClass]="{'display-area-shrink': sideNavStatus}">
    <!-- <p class="fs-1 fw-bold fst-italic mt">Welcome Faculty!</p> -->
    <router-outlet></router-outlet>
    </div>
  </main>
</div>
  `,
  styleUrls: ['../components/user-home/user-home.component.scss']
})
export class ProfileLayoutComponent {
  sideNavStatus: boolean = false;
}
