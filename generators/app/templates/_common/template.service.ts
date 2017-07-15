import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {I<%- componentNamePascalCase %>, <%- componentNamePascalCase %>Category} from './<%- componentNameCamelCase %>.interface';
import {Api} from '../../_common/shared/api/api.service';

@Injectable()
export class <%- componentNamePascalCase %>Service {
  constructor(private api: Api) {}

  get<%- componentNamePluralPascalCase %>(): Observable<Array<I<%- componentNamePascalCase %>>> {
    return this.api.get('/<%- componentNamePluralCamelCase %>');
  }
}
