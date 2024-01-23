import { Component } from '@angular/core';
import { User } from './models';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  // displayedColumns: string[] = ['id','FullName'];
  displayedColumns: string[] = ['id','fullName','email','role'];
  dataSource: User[] = [
    {
      id: 1,
      firstName: 'Naruto',
      lastName: 'Uzumaqui',
      email: 'naru@mail.com',
      password: '123456',
      role: 'ADMIN'
    },
    {
      id: 2,
      firstName: 'Sasuke',
      lastName: 'Uchija',
      email: 'sasu@mail.com',
      password: '123456',
      role: 'USER'
    }
  ];

  onUserSubmited(ev: User): void{
    this.dataSource.push(ev);
  }
}
