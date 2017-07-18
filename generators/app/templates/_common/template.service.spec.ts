import { TestBed, inject } from '@angular/core/testing';
import { <%- componentNamePascalCase %>Service } from './<%- componentNameCamelCase %>.service';
import { Api } from '../../_common/shared/api/api.service';
import { Observable } from 'rxjs/Observable';
import { MockedApi } from '../../_mocks/common.mock.spec';

describe('<%- componentNamePascalCase %>.Service: ', () => {
  let service, api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: Api, useClass: MockedApi},
        <%- componentNamePascalCase %>Service
      ]
    });
  });

  beforeEach(inject([Api], (_api: Api) => {
    api = _api;
    service = new <%- componentNamePascalCase %>Service(api);
  }));


  it('should create <%- componentNamePascalCase %>Service and have methods', () => {
    expect(service).toBeDefined('<%- componentNamePascalCase %>Service instance to be defined');
    expect(service instanceof <%- componentNamePascalCase %>Service).toEqual(true, 'to be instance of <%- componentNamePascalCase %>Service');

    expect(service.get<%- componentNamePluralPascalCase %>).toBeDefined('get<%- componentNamePluralPascalCase %> to exist');
  });

  it('should get <%- componentNamePluralCamelCase %>', () => {
    spyOn(api, 'get').and.returnValue(Observable.of(null));

    service.get<%- componentNamePluralPascalCase %>();

    expect(api.get).toHaveBeenCalledWith('/<%- componentNamePluralCamelCase %>');
  });
});
