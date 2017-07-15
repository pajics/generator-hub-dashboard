import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ILanguage, LanguageCategory} from './language.interface';
import {Api} from '../../_common/shared/api/api.service';

@Injectable()
export class LanguageService {
  constructor(private api: Api) {}

  getLanguages(): Observable<Array<ILanguage>> {
    return this.api.get('/languages');
  }
}
