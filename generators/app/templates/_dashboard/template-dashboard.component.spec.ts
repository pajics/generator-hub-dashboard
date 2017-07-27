import { TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MockedPageService, MockedBreadcrumb } from '../../_mocks/common.mock.spec';
import { MockedTranslatePipe } from '../../_mocks/translate.mock.spec';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PageService } from '../../_common/page/page.service';
import { <% componentNamePascalCase %>Service } from '../common/<% componentNameCamelCase %>.service';
import { <% componentNamePluralPascalCase %>DashboardComponent } from './<% componentNameCamelCase %>s-dashboard.component';
import { <% componentNamePascalCase %>Category } from '../common/<% componentNameCamelCase %>.interface';

class Mocked<% componentNamePascalCase %>Service {
  result<% componentNamePluralPascalCase %>: Observable<ICountable<I<% componentNamePascalCase %>>>;

  constructor() {
    this.result<% componentNamePluralPascalCase %> = Observable.of({ count: 0, result: []});
  }

  get<% componentNamePluralPascalCase %>(urlParams?: any) {
    return this.result<% componentNamePluralPascalCase %>;
  }
}

fdescribe('<% componentNamePluralPascalCase %>Dashboard.Component', () => {
  let fixture, component, service, pageService;

  beforeEach((done) => {
    jasmine.clock().uninstall();
    jasmine.clock().install();

    TestBed.configureTestingModule({
      providers: [
        { provide: <% componentNamePascalCase %>Service, useClass: Mocked<% componentNamePascalCase %>Service },
        { provide: PageService, useClass: MockedPageService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ <% componentNamePluralPascalCase %>DashboardComponent, MockedTranslatePipe, MockedBreadcrumb ]
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(<% componentNamePluralPascalCase %>DashboardComponent);
      component = fixture.componentInstance;
      done();
    });
  });
  beforeEach(inject([ <% componentNamePascalCase %>Service, PageService ],
    (_service: <% componentNamePascalCase %>Service, _ps: PageService) => {
      service = _service;
      pageService = _ps;
  }));

  it('should create component', () => {
    expect(fixture.componentInstance).toBeDefined('create component instance');
    expect(<% componentNamePluralPascalCase %>DashboardComponent).toBeDefined('class exists');
    expect(fixture.componentInstance instanceof <% componentNamePluralPascalCase %>DashboardComponent).toEqual(true, 'be instance of <% componentNamePluralPascalCase %>DashboardComponent');
  });
});

