import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'error',
        loadChildren: () =>
            import('./pages/error_pages/error_pages.module').then(
                (mod) => mod.ErrorPagesModule
            ),
    },
    {
        path: '**',
        redirectTo: 'error/404',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
