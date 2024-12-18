import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Users } from '../users';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: Users[] | null = [];

  constructor(private userService: UserServiceService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}