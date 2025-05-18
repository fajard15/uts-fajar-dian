import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  articles: { title: string; content: string }[] = [];

  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.articles.push({
        title: `Article #${i}`,
        content: `This is the content for article number ${i}.`
      });
    }
  }
}
