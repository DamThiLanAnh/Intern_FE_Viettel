import { Component, OnInit } from '@angular/core';

let list : any[] = [
  {
    id: 0, 
    title: 'Danh sách người dùng', 
    icon: 'fa-solid fa-user', 
    path: '/users'
  },
  {
    id: 1, 
    title: 'Danh sách đối tác', 
    icon: 'fa-solid fa-comments', 
    path: '/partners'
  }, 
  {
    id: 2, 
    title: 'Danh sách sản phấm', 
    icon: 'fa-solid fa-inbox', 
    path: ''
  }
]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  navigationList = list;
  constructor() { }

  ngOnInit(): void {
  }

}
