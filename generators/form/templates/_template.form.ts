import {Component, ElementRef, OnInit} from '@angular/core';
import {WizardSlide} from '../../_common/custom-components/wizard/wizard-slide';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoadingIndicatorService} from '../../_common/shared/loading-indicator/loading-indicator.service';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: '<%- _.kebabCase(componentName) %>',
  templateUrl:  './<%- _.kebabCase(componentName) %>.component.html'
})
export class <%- componentName %>Component extends WizardSlide implements OnInit {
  siteForm: FormGroup;
  <% for(var i=0; i<properties.length; i++) {
    if (properties[i].type !== 'autocomplete') continue;
    -%>
    <%- properties[i].collectionName %>: SelectItem[];
    private all<%- _.capitalize(properties[i].collectionName) %>: Promise<<%- properties[i].collectionType %>[]>;
  <% } -%>

  constructor(elementRef: ElementRef,
              loadingIndicatorService: LoadingIndicatorService,
              private formBuilder: FormBuilder) {
    super(elementRef, loadingIndicatorService);
  }

  <% for(var i=0; i<properties.length; i++) {
    var property = properties[i];
    if (property.type !== 'autocomplete') continue;
    -%>
  search<%- _.capitalize(property.collectionName) %>(event: any) {
    if (!this.all<%- _.capitalize(property.collectionName) %>) {
      this.all<%- _.capitalize(property.collectionName) %> = this.service.get<%- _.capitalize(property.collectionName) %>().toPromise();
    }
    this.all<%- _.capitalize(property.collectionName) %>.then(<%- property.collectionName %> => {
      this.<%- property.collectionName %> = <%- property.collectionName %>.filter(c => c.name === event.query);
    });
  }
  <% } %>


  ngOnInit(): void {
    // load data
    this.prepareForm();
  }
  /**
   * Set form and validations
   */
  private prepareForm() {
    this.siteForm = this.formBuilder.group({
      // test
    <% for(var i=0; i<properties.length; i++) {
      var property = properties[i];
      -%>
      <%- property.id %>: ['', [<% if (property.required) { %>Validators.required<% } %>]],
    <% } %>
    });

  }
}
