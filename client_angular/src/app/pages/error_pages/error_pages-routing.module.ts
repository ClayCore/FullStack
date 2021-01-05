import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './notfound/notfound.component';
import { InternalServerComponent } from './internalserver/internalserver.component';

const routes: Routes = [
    { path: '404', component: NotFoundComponent },
    { path: '500', component: InternalServerComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ErrorPagesRoutingModule {}
