import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { QueryPage } from '../query/query';
import { ThemeListPage } from '../theme/themeList';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  tab4Root: any;


  constructor() {
    this.tab1Root = HomePage;
    this.tab2Root = ThemeListPage;
    this.tab3Root = QueryPage;
    this.tab4Root = AboutPage;
  }
}
