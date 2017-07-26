import {Component, OnInit} from '@angular/core';
import {I<%- componentNamePascalCase %>} from '../common/<%- componentNameCamelCase %>.interface';
import {<%- componentNamePascalCase %>Service} from '../common/<%- componentNameCamelCase %>.service';
import {PageService} from '../../_common/page/page.service';
@Component({
  selector: '<%- componentNamePluralCamelCase %>-dashboard',
  templateUrl: './<%- componentNamePluralCamelCase %>-dashboard.html'
})
export class <%- componentNamePluralPascalCase %>DashboardComponent implements OnInit {
  <%- componentNamePluralCamelCase %>: I<%- componentNamePascalCase %>[];
  filtered<%- componentNamePluralPascalCase %>: I<%- componentNamePascalCase %>[];

  constructor(private pageService: PageService,
              private <%- componentNameCamelCase %>Service: <%- componentNamePascalCase %>Service) {}

  ngOnInit(): void {
    this.pageService.startLoading();
    this.<%- componentNameCamelCase %>Service.get<%- componentNamePluralPascalCase %>().subscribe((<%- componentNamePluralCamelCase %>) => {
      this.<%- componentNamePluralCamelCase %> = <%- componentNamePluralCamelCase %>;
      this.filtered<%- componentNamePluralPascalCase %> = this.<%- componentNamePluralCamelCase %>;
      this.pageService.doneLoading();
    }, () => {
      this.pageService.notify({ heading: 'ERROR.HEADING', body: 'ERROR.GENERAL_FAIL', type: 'danger' });
      this.pageService.doneLoading();
    });
  }

  filter<%- componentNamePluralPascalCase %>(event: any) {
    const filter = (event.target as HTMLInputElement).value.toUpperCase();
    if (!filter) {
      this.filtered<%- componentNamePluralPascalCase %> = this.<%- componentNamePluralCamelCase %>;
      return;
    }
    this.filtered<%- componentNamePluralPascalCase %> = this.<%- componentNamePluralCamelCase %>.filter(l =>
      <% for(var i=0; i<properties.length; i++) {-%>
        <% if (i !== 0) {%>||<% } -%>
      l.<%- properties[i] %>.toUpperCase().indexOf(filter) !== -1
      <% } -%>
    );
  }
}
