import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslationService {

  constructor(private translate: TranslateService) {
      translate.setDefaultLang('es');
  }

  switchLanguage(language: string) {
      this.translate.use(language);
  }

}
