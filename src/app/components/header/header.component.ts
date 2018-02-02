import { Component, OnInit } from '@angular/core';
import { TranslationService } from "../../translation.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  ngOnInit() {
  }

  constructor(public translationService: TranslationService){}

}
