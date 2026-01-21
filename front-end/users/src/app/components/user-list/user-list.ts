import { Component, signal } from '@angular/core';
import { User } from '../../models';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
})
export class UserList {

  users = signal<User[]>([]);

  loading = signal(true);

  constructor(private userService: UserService) {}
  
  ngOnInit():void {
    this.loadUsers();
  }
  
  loadUsers():void {
    this.loading.set(true);
    this.userService.getUsers().subscribe({
      next:(data)=> {
        this.users.set(data);
        this.loading.set(false);
      }
    })
  }
}
