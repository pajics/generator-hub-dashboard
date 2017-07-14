import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../_common/shared/shared.module';
import {PageModule} from '../_common/page/page.module';
import { routing } from './languages.routing';
import {LanguageService} from './common/language.service';
import {LanguagesDashboardComponent} from './dashboard/languages-dashboard.component';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    SharedModule,
    PageModule,
    routing
  ],
  providers: [LanguageService],
  declarations: [LanguagesDashboardComponent]
})
export class LanguagesModule {
}
