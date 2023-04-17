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
  styles: [
    `
    app-user-header {
      position: fixed;
      width: 100%;
      top: 0px;
      height: 4rem;
      z-index: 2;
    }
    main {
      position: absolute;
      width: 100%;
      top: 4rem;
      z-index: 1;
    }

    app-user-sidenav {
      position: fixed;
      left: 0rem;
      width: 60px;
      height: calc(100vh - 4rem);
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      background-color: #1D2228;
      border-top: 1px solid white;
      overflow-x: hidden;
      white-space: nowrap;
      transition: width 250ms ease-in;
    }

    .app-side-nav-open {
      width: 300px;

    }

    .display-area {
      position: absolute;
      left: 60px;
      width: calc(100% - 60px);
      transition: left 250ms ease-in, width 250ms ease-in;
    }

    .display-area-shrink {
      width: calc(100% - 300px);
      left: 300px;
    }

    `
  ]
})
export class ProfileLayoutComponent {
  sideNavStatus: boolean = false;
}
