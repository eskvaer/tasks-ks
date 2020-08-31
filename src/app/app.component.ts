import {Component, OnInit} from '@angular/core';
import {MatTabChangeEvent} from '@angular/material/tabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  locales = [
    {locale: 'en', label: 'English'},
    {locale: 'ua', label: 'Українська'},
  ];

  ngOnInit(): any {
    const initLocale = this.locales[0].locale;
    console.log(initLocale);
  }

  onLinkClick($event: MatTabChangeEvent): any {
    const locale = this.locales[$event.index].locale;
    console.log(locale);
  }
}
