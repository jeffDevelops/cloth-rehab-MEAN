import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
