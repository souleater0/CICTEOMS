import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-sidenav',
  templateUrl: './user-sidenav.component.html',
  styleUrls: ['./user-sidenav.component.scss']
})
export class UserSidenavComponent {
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'View Assigned Program',
      icon: 'fa-solid fa-sitemap',
    },
    {
      number: '2',
      name: 'Settings',
      icon: 'fa-solid fa-gear',
    },
    {
      number: '3',
      name: 'About',
      icon: 'fa-solid fa-circle-info',
    },

  ]

  constructor() { }

  ngOnInit(): void {}
}
