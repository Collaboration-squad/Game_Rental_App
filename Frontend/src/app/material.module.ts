import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
} from '@angular/material';

@NgModule({
    imports: [],
    exports: [
        MatButtonModule,
        MatTableModule,
        MatToolbarModule,
    ]
}) export class MaterialModule {}
