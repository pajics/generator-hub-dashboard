import {Component, ElementRef, OnInit} from '@angular/core';
import {WizardSlide} from '../../_common/custom-components/wizard/wizard-slide';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoadingIndicatorService} from '../../_common/shared/loading-indicator/loading-indicator.service';
@Component({
  selector: 'site-market-details',
  templateUrl:  './site-market-details.component.html'
})
export class <%- componentNamePascalCase %>Component extends WizardSlide implements OnInit {
  siteForm: FormGroup;

  constructor(elementRef: ElementRef,
              loadingIndicatorService: LoadingIndicatorService,
              private formBuilder: FormBuilder) {
    super(elementRef, loadingIndicatorService);

  }

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
    <% for(var j=0; j<forms.length; j++) { -%>
    <% for(var i=0; i<forms[j].properties.length; i++) {
      var property = forms[j].properties[i];
      -%>
      <%- property.id %>: ['', [<% if (property.required) { %>Validators.required<% } %>]],
    <% } %>
    <% } %>
    });

  }
}
