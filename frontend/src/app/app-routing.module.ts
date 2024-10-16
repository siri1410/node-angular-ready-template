import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';

const routes: Routes = [
  { path: '', component: DataTableComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// This module defines the routing configuration for the application.
// It sets up a default route to the DataTableComponent and a wildcard route
// that redirects to the default route for any unmatched URLs.
