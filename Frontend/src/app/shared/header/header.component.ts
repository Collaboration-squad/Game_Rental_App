import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginPopupComponent } from 'src/app/shared/login-popup/login-popup.component';
import { SigninPopupComponent } from 'src/app/shared/signin-popup/signin-popup.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	login: string;
	password: string;

	constructor(public dialog: MatDialog) { }

	openLoginPopup(): void {
		const loginRef = this.dialog.open(LoginPopupComponent, {
			width: '350px',
			data: { login: this.login, password: this.password }
		});

		loginRef.afterClosed().subscribe(() => {
			console.log('You were successfully logged in');
		});
	}

	openSigninPopup(): void {
		const signinRef = this.dialog.open(SigninPopupComponent, {
			width: '350px',
			data: { login: this.login, password: this.password }
		});

		signinRef.afterClosed().subscribe(() => {
			console.log('You were successfully signed in');
		});
	}
}
