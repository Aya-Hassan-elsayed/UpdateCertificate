import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit{
  constructor(private router:Router,private logoutsevice:AuthService){}

  ngOnInit(): void {
    
  }

  logout() {
    console.log('Logout button clicked');
    this.logoutsevice.signOut(); 

  }

}
