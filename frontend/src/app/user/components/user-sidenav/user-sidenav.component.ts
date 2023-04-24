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
      link: 'view-assigned-program',
    },
    {
      number: '2',
      name: 'Report Generation',
      icon: 'fa-solid fa-file-text',
      link: 'report-generation',
    }

  ]

  constructor() { }

  ngOnInit(): void {}
}
