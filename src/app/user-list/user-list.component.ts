import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';
import {IUser} from '../user/IUser';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  showImg = true;
  keyword;
  count;
  users: IUser[] = [{
    name: 'Dieu',
    address: 'ND',
    email: 'dieu@gmail.com',
    phone: 936278689,
    image: 'assets/images/human.png'
  },
    {
      name: 'An',
      address: 'HN',
      email: 'an@gmail.com',
      phone: 123456789,
      image: 'assets/images/human.png'
    },
    {
      name: 'Long',
      address: 'BG',
      email: 'long@gmail.com',
      phone: 123456789,
      image: 'assets/images/human.png'
    },
    {
      name: 'Hoang',
      address: 'TH',
      email: 'hoang@gmail.com',
      phone: 123456789,
      image: 'assets/images/human.png'
    }
  ];
  usersFilter: IUser[] = [];


  constructor() {
  }

  ngOnInit(): void {
    this.usersFilter = this.users;
  }

  search(event) {
    this.keyword = event.toLowerCase();
    this.usersFilter = this.users.filter(user=>user.name.toLowerCase().includes(this.keyword));
    this.count = this.usersFilter.length;
    if(this.usersFilter.length==0)
      this.usersFilter = this.users;
  }

  showImage(){
    this.showImg = !this.showImg;
  }


}
