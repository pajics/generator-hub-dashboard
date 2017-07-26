import { TestBed, inject } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {
  MockedViewContainerRef, MockedPermissionsService, MockedPageService,
  MockedBreadcrumb
} from '../../_mocks/common.mock.spec';
import { MockedTranslateService, MockedTranslatePipe } from '../../_mocks/translate.mock.spec';
import { TranslateService } from '@ngx-translate/core';
import { ViewContainerRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { ResponseOptions, Response } from '@angular/http';
import { VisibleToDirective } from '../../_common/shared/permissions/permissions.directive';
import { PermissionsService } from '../../_common/shared/permissions/permissions.service';
import { PageService } from '../../_common/page/page.service';
import {<% componentNamePascalCase %>Service} from '../common/<% componentNameCamelCase %>.service';
import {<% componentNamePluralPascalCase %>DashboardComponent} from './<% componentNameCamelCase %>s-dashboard.component';
import {<% componentNamePascalCase %>Category} from '../common/<% componentNameCamelCase %>.interface';

class Mocked<% componentNamePascalCase %>Service {
  result<% componentNamePluralPascalCase %>: Observable<any>;

  constructor() {
    this.result<% componentNamePluralPascalCase %> = Observable.of([]);
  }

  get<% componentNamePluralPascalCase %>() {
    return this.result<% componentNamePluralPascalCase %>;
  }
}

fdescribe('<% componentNamePluralPascalCase %>Dashboard.Component', () => {
  let fixture, component, service, pageService;
  let <% componentNameCamelCase %>s =       [
    {gamebaseId: 1, category: <% componentNamePascalCase %>Category.Standard, code: 'en', name: 'English'},
    {gamebaseId: 2, category: <% componentNamePascalCase %>Category.Standard, code: 'de', name: 'German'},
    {gamebaseId: 3, category: <% componentNamePascalCase %>Category.Optional, code: 'rs', name: 'Serbian'},
    {gamebaseId: 5, category: <% componentNamePascalCase %>Category.Unsupported, code: 'pt-br', name: 'Portuguese (Brazil)'}
  ];

  beforeEach((done) => {
    jasmine.clock().uninstall();
    jasmine.clock().install();

    TestBed.configureTestingModule({
      providers: [
        { provide: <% componentNamePascalCase %>Service, useClass: Mocked<% componentNamePascalCase %>Service },
        { provide: PageService, useClass: MockedPageService },
        { provide: ViewContainerRef, useClass: MockedViewContainerRef },
        { provide: TranslateService, useClass: MockedTranslateService },
        { provide: PermissionsService, useClass: MockedPermissionsService }
      ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ <% componentNamePluralPascalCase %>DashboardComponent, MockedTranslatePipe, VisibleToDirective, MockedBreadcrumb ]
    });
    TestBed.compileComponents().then(() => {
      fixture = TestBed.createComponent(<% componentNamePluralPascalCase %>DashboardComponent);
      component = fixture.componentInstance;
      done();
    });
  });
  beforeEach(inject([ <% componentNamePascalCase %>Service, PageService ],
    (_<% componentNameCamelCase %>Service: <% componentNamePascalCase %>Service, _ps: PageService) => {
      service = _<% componentNameCamelCase %>Service;
      pageService = _ps;
    }));

  it('should create component', () => {
    expect(fixture.componentInstance).toBeDefined('create component instance');
    expect(<% componentNamePluralPascalCase %>DashboardComponent).toBeDefined('class exists');
    expect(fixture.componentInstance instanceof <% componentNamePluralPascalCase %>DashboardComponent).toEqual(true, 'be instance of class');
  });

  it('should show feedback if server error and not render partners', () => {
    spyOn(pageService, 'notify').and.stub();
    let response = new ResponseOptions();
    response.status = 501;
    response.body = '{ "error": ""}';
    service.result<% componentNamePluralPascalCase %> = Observable.throw(new Response(response));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('table tbody tr').length).toEqual(0, 'no <% componentNamePluralCamelCase %>');
    expect(pageService.notify)
      .toHaveBeenCalledWith({ heading: 'ERROR.HEADING', body: 'ERROR.GENERAL_FAIL', type: 'danger' });
  });

  it('should load <% componentNamePluralCamelCase %> from service', () => {
    service.result<% componentNamePluralPascalCase %> = Observable.of(<% componentNamePluralCamelCase %>);
    let event: any = {
      target: { value: 'a'}
    };

    component.filter<% componentNamePluralPascalCase %>FromEvent(event as KeyboardEvent);
    fixture.detectChanges();
    let rows = fixture.nativeElement.querySelectorAll('table tbody tr');
    expect(rows.length).toEqual(1, 'two <% componentNamePluralCamelCase %>');
    expect(rows[0].querySelectorAll('td')[1].innerHTML).toEqual('some name');
  });
});

