import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.scss']
})
export class AdminSidenavComponent implements OnInit{
  @Input() sideNavStatus: boolean = false;

  list = [
    {
      number: '1',
      name: 'Dashboard',
      icon: 'fa-solid fa-chart-line',
      link: 'dashboard',
    },
    {
      number: '2',
      name: 'Account Management',
      icon: 'fa-solid fa-user-gear',
      link: 'account-management',
    },
    {
      number: '3',
      name: 'Extension Program Management',
      icon: 'fa-sharp fa-solid fa-gears',
      link: 'extension-program-management',
    },
    {
      number: '4',
      name: 'Partners Management',
      icon: 'fa-solid fa-user-group',
      link: 'partners-management',
    },
    {
      number: '5',
      name: 'Report Generation',
      icon: 'fa-solid fa-file-zipper',
      link: 'report-generation',
    },
  ]

  constructor(
  ) { }

  ngOnInit(): void {}
}
