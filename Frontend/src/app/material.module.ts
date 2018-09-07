import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatTableModule,
} from '@angular/material';

@NgModule({
    imports: [],
    exports: [
        MatTableModule,
        MatToolbarModule,
    ]
}) export class MaterialModule {}
