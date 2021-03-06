import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

}
