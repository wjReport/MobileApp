import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { IndexPage } from '../pages/index/index';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { QueryPage } from '../pages/query/query';
import { SelectNamePage } from '../pages/query/selectName';
import { ParamPage } from '../pages/query/param';
import { ResultListPage } from '../pages/query/resultList';
import { ThemePage } from '../pages/theme/theme';
import { ThemeListPage } from '../pages/theme/themeList';
import { BrowserPage } from '../pages/theme/browser';
import { AppService } from './app.service';
import { AppCommonService } from './app-common';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    IndexPage,
    QueryPage,
    SelectNamePage,
    ParamPage,
    ResultListPage,
    ThemePage,
    ThemeListPage,
    BrowserPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    IndexPage,
    QueryPage,
    SelectNamePage,
    ParamPage,
    ResultListPage,
    ThemePage,
    ThemeListPage,
    BrowserPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},AppService,AppCommonService]
})
export class AppModule {}
