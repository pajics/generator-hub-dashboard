import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {I<%- componentNamePascalCase %>} from '../common/<%- componentNameCamelCase %>.interface';
import {<%- componentNamePascalCase %>Service} from '../common/<%- componentNameCamelCase %>.service';
@Component({
  selector: '<%- componentNamePluralCamelCase %>-dashboard',
  templateUrl: './<%- componentNamePluralCamelCase %>-dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class <%- componentNamePluralPascalCase %>DashboardComponent implements OnInit {
  <%- componentNamePluralCamelCase %>: Array<I<%- componentNamePascalCase %>>;
  filtered<%- componentNamePluralPascalCase %>: Array<I<%- componentNamePascalCase %>>;

  constructor(private <%- componentNameCamelCase %>Service: <%- componentNamePascalCase %>Service) {}

  ngOnInit(): void {
    this.<%- componentNameCamelCase %>Service.get<%- componentNamePluralPascalCase %>().subscribe((<%- componentNamePluralCamelCase %>) => {
      this.<%- componentNamePluralCamelCase %> = <%- componentNamePluralCamelCase %>;
      this.filtered<%- componentNamePluralPascalCase %> = this.<%- componentNamePluralCamelCase %>;
    });
  }

  filter<%- componentNamePluralPascalCase %>(event: any) {
    const filter = (event.target as HTMLInputElement).value.toUpperCase();
    if (!filter) {
      this.filtered<%- componentNamePluralPascalCase %> = this.<%- componentNamePluralCamelCase %>;
      return;
    }
    this.filtered<%- componentNamePluralPascalCase %> = this.<%- componentNamePluralCamelCase %>.filter(l =>
      l.name.toUpperCase().indexOf(filter) !== -1
      || l.gamebaseId.toString().indexOf(filter) !== -1
      || l.code.toUpperCase().indexOf(filter) !== -1
    );
  }
}