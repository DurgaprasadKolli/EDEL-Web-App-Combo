import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: any = '';
  constructor(private authService: AuthService) {
    this.username = JSON.parse(localStorage.getItem('loggedUser') as string);
  }

  ngOnInit(): void {
  }

}
