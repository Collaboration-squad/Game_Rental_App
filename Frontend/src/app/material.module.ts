import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
} from '@angular/material';

@NgModule({
    imports: [],
    exports: [
        MatButtonModule,
        MatDialogModule,
        MatTableModule,
        MatToolbarModule,
    ]
}) export class MaterialModule {}
