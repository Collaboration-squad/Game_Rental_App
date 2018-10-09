import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LoginPopup } from 'src/app/shared/models/loginPopup';

@Component({
	selector: 'app-login-popup',
	templateUrl: './login-popup.component.html',
	styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent {

	constructor(
		public dialogRef: MatDialogRef<LoginPopupComponent>,
		@Inject(MAT_DIALOG_DATA) public data: LoginPopup
	) { }

	onNoClick(): void {
		this.dialogRef.close();
	}

}
