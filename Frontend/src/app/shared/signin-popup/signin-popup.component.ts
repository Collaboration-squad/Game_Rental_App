import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { LoginPopup } from 'src/app/shared/models/loginPopup';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-signin-popup',
	templateUrl: './signin-popup.component.html',
	styleUrls: ['./signin-popup.component.scss']
})
export class SigninPopupComponent {
	email = new FormControl('', [Validators.required, Validators.email]);

	constructor(
		public dialogRef: MatDialogRef<SigninPopupComponent>,
		@Inject(MAT_DIALOG_DATA) public data: LoginPopup
	) { }

	onNoClick(): void {
		this.dialogRef.close();
	}

	getErrorMessage() {
		const errorMsg = this.email.hasError('required') ? 'You must enter a value' :
			this.email.hasError('email') ? 'Not a valid email' :
				'';
		return errorMsg;
	}

}
