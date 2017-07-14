import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ILanguage, LanguageCategory} from './language.interface';
import {Api} from '../../_common/shared/api/api.service';

@Injectable()
export class LanguageService {
  constructor(private api: Api) {}

  getLanguages(): Observable<Array<ILanguage>> {
    return Observable.of(
      [
        {gamebaseId: 1, category: LanguageCategory.Standard, code: 'en', name: 'English'},
        {gamebaseId: 2, category: LanguageCategory.Standard, code: 'de', name: 'German'},
        {gamebaseId: 3, category: LanguageCategory.Optional, code: 'rs', name: 'Serbian'},
        {gamebaseId: 5, category: LanguageCategory.Unsupported, code: 'pt-br', name: 'Portuguese (Brazil)'}
      ]);
    // return this.api.get('/languages');
  }
}
