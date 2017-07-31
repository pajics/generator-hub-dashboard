import { Component, OnInit } from '@angular/core';
import { I<%- componentNamePascalCase %> } from '../common/<%- componentNameKebabCase %>.interface';
import { <%- componentNamePascalCase %>Service } from '../common/<%- componentNameKebabCase %>.service';
import { PageService } from '../../_common/page/page.service';

@Component({
  selector: '<%- componentNamePluralKebabCase %>-dashboard',
  templateUrl: './<%- componentNamePluralKebabCase %>-dashboard.html'
})
export class <%- componentNamePluralPascalCase %>DashboardComponent implements OnInit {
  <%- componentNamePluralCamelCase %>: I<%- componentNamePascalCase %>[];
  filtered<%- componentNamePluralPascalCase %>: I<%- componentNamePascalCase %>[];

  constructor(private pageService: PageService,
              private <%- componentNameCamelCase %>Service: <%- componentNamePascalCase %>Service) {
    this.pageService.setBreadcrumbs([{text: '<%- localizationNamespace %>.DASHBOARD', icon: 'app-icon-<%- componentNameKebabCase %>'}]);
  }

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
      l.<%- properties[i].name %> && l.<%- properties[i].name %>.toUpperCase().indexOf(filter) !== -1
      <% } -%>
    );
  }
}
