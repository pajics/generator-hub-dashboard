import {TestBed, inject} from '@angular/core/testing';
import {LanguageService} from './language.service';
import {Api} from '../../_common/shared/api/api.service';
import {Observable} from 'rxjs/Observable';
import {MockedApi} from '../../_mocks/common.mock.spec';

describe('Language.Service: ', () => {
  let service, api;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: Api, useClass: MockedApi},
        LanguageService
      ]
    });
  });

  beforeEach(inject([Api], (_api: Api) => {
    api = _api;
    service = new LanguageService(api);
  }));


  it('should create LanguageService and have methods', () => {
    expect(service).toBeDefined('LanguageService instance to be defined');
    expect(service instanceof LanguageService).toEqual(true, 'to be instance of LanguageService');

    expect(service.getLanguages).toBeDefined('getLanguages to exist');
  });

  it('should get languages', () => {
    spyOn(api, 'get').and.returnValue(Observable.of(null));

    service.getLanguages();

    expect(api.get).toHaveBeenCalledWith('/languages');
  });
});
