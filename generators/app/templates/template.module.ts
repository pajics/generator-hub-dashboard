import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../_common/shared/shared.module';
import { PageModule } from '../_common/page/page.module';
import { routing } from './<%- componentNamePluralKebabCase %>.routing';
import { <%- componentNamePascalCase %>Service } from './common/<%- componentNameKebabCase %>.service';
import { <%- componentNamePluralPascalCase %>DashboardComponent } from './dashboard/<%- componentNamePluralKebabCase %>-dashboard.component';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    SharedModule,
    PageModule,
    routing
  ],
  providers: [<%- componentNamePascalCase %>Service],
  declarations: [<%- componentNamePluralPascalCase %>DashboardComponent]
})
export class <%- componentNamePluralPascalCase %>Module {
}
