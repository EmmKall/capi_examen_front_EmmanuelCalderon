import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  data: Array<any> = [];

  constructor( private sUsers: UsersService )
  {
    this.getAllUsers();
  }

  getAllUsers(): void
  {
    this.sUsers.getAll().subscribe( data => {
      this.data = data;
    });
  }

}
