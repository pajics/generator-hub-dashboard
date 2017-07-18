import { <%- componentNamePluralPascalCase %>DashboardComponent } from './dashboard/<%- componentNamePluralCamelCase %>-dashboard.component';
import { Error404Component } from '../_common/shared/error/404.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_common/shared/permissions/auth-guard.service';

const routes: Routes = [
  { path: '', component: <%- componentNamePluralPascalCase %>DashboardComponent, data: {'claims': 'Manage<%- componentNamePluralPascalCase %>'}, canActivate: [AuthGuard] },
  { path: '**', component: Error404Component }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
