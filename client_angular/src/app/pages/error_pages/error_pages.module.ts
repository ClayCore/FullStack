import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPagesRoutingModule } from './error_pages-routing.module';
import { NotFoundComponent } from './notfound/notfound.component';
import { InternalServerComponent } from './internalserver/internalserver.component';

@NgModule({
    declarations: [NotFoundComponent, InternalServerComponent],
    imports: [CommonModule, ErrorPagesRoutingModule],
})
export class ErrorPagesModule {}
