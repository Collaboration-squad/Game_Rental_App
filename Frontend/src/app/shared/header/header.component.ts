import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginPopupComponent } from 'src/app/shared/login-popup/login-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  login: string;
  password: string;

  constructor(public dialog: MatDialog) {}

  openLoginPopup(): void {
    this.dialog.open(LoginPopupComponent, {
      width: '250px',
      data: {login: this.login, password: this.password}
    });
  }

}
