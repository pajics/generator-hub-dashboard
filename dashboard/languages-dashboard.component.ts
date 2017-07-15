import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ILanguage} from '../common/language.interface';
import {LanguageService} from '../common/language.service';
@Component({
  selector: 'languages-dashboard',
  templateUrl: './languages-dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguagesDashboardComponent implements OnInit {
  languages: Array<ILanguage>;
  filteredLanguages: Array<ILanguage>;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.getLanguages().subscribe((languages) => {
      this.languages = languages;
      this.filteredLanguages = this.languages;
    });
  }

  filterLanguages(event: any) {
    const filter = (event.target as HTMLInputElement).value.toUpperCase();
    if (!filter) {
      this.filteredLanguages = this.languages;
      return;
    }
    this.filteredLanguages = this.languages.filter(l =>
      l.name.toUpperCase().indexOf(filter) !== -1
      || l.gamebaseId.toString().indexOf(filter) !== -1
      || l.code.toUpperCase().indexOf(filter) !== -1
    );
  }
}