<<<<<<< HEAD
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppCommonService } from '../../app/app-common';
import { ThemePage } from '../theme/theme';
import { BrowserPage } from './browser';
// import echarts from 'echarts';
import { DomSanitizer } from '@angular/platform-browser';
/*
  Generated class for the Index page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-theme',
  templateUrl: 'themeList.html'
})
export class ThemeListPage {
  themeList: any;
  contentList: any;
  items = [];
  page_content = `  <style>
  table tr td {
    border: 1px solid #ECE9F0;
  }
  .IndexLabel{
    text-align: left;
  }
  .IndexValue{
    text-align: right;
  }
</style>
<table style:"width:100%;" >
  <tr>
    <td class='IndexLabel' width="200px">现金</td>
    <td class='IndexValue'  width="200px">400万</td>
  </tr>
  <tr>
    <td class='IndexLabel' width="200px">银行存款</td>
    <td class='IndexValue' width="200px">500万</td>
  </tr>
  <tr>
    <td class='IndexLabel' width="200px">固定资产</td>
    <td class='IndexValue' width="200px">500万</td>
  </tr>
  <tr>
    <td class='IndexLabel' width="200px">在建工程</td>
    <td class='IndexValue' width="200px">500万</td>
  </tr>
  </table>`;
  //page_content = "<ion-card class='card-ios'><ion-card-header>hello</ion-card-header><ion-card-content>Card Content</ion-card-content></ion-card>";
  //page_content = " <ion-item>" +
  // "<ion-label><a class='waves-effect' (click)='gotoIframe()'>利润表fffff</a></ion-label>" +
  //"<ion-icon name='ios-arrow-forward' item-right></ion-icon>" +
  //"</ion-item>";
  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams, private http: Http, private commonService: AppCommonService) {
    this.getAppFile();

    for (let i = 0; i < 30; i++) {
      this.items.push(this.items.length);
    }
  }

  getAppFile() {
    this.http.post(this.commonService.getReportServerPath() + "/mobileSubject/getMobileDirectory", null, { headers: this.commonService.getHeaders() }).toPromise().then(
      res => {
        this.contentList = res.json();
        console.log(res.json());
      }
    );
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.items = [];
      for (var i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000)
  }
  ;

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push(this.items.length);
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }



  getTheme() {
    this.navCtrl.push(ThemePage, {});
  }
  gotoIframe() {
    //let url = "C:/Users/wangjian/Documents/iReport/file/web/app/2017利润表.html";
    this.navCtrl.push(BrowserPage, {
      browser: {
        title: 'baidu',
        url: 'http://www.baidu.com'
      }
    });
  }
}
=======
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { AppCommonService } from '../../app/app-common';
import { ThemePage } from '../theme/theme';
import { BrowserPage } from './browser';
// import echarts from 'echarts';
import { DomSanitizer } from '@angular/platform-browser/src/security/dom_sanitization_service';
/*
  Generated class for the Index page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-theme',
  templateUrl: 'themeList.html'
})
export class ThemeListPage {
  themeList: any;
  contentList: any;
  public page = {startIndex:0,endIndex:5};
  items = [];
  card_content: any;
  page_content = `  <style>
  table tr td {
    border: 1px solid #ECE9F0;
  }
  .IndexLabel{
    text-align: left;
  }
  .IndexValue{
    text-align: right;
  }
</style>
<table style:"width:100%;" >
  <tr>
    <td class='IndexLabel' width="200px">现金</td>
    <td class='IndexValue'  width="200px">400万</td>
  </tr>
  <tr>
    <td class='IndexLabel' width="200px">银行存款</td>
    <td class='IndexValue' width="200px">500万</td>
  </tr>
  <tr>
    <td class='IndexLabel' width="200px">固定资产</td>
    <td class='IndexValue' width="200px">500万</td>
  </tr>
  <tr>
    <td class='IndexLabel' width="200px">在建工程</td>
    <td class='IndexValue' width="200px">500万</td>
  </tr>
  </table>`;
  //page_content = "<ion-card class='card-ios'><ion-card-header>hello</ion-card-header><ion-card-content>Card Content</ion-card-content></ion-card>";
  //page_content = " <ion-item>" +
  // "<ion-label><a class='waves-effect' (click)='gotoIframe()'>利润表fffff</a></ion-label>" +
  //"<ion-icon name='ios-arrow-forward' item-right></ion-icon>" +
  //"</ion-item>";
  constructor(private sanitizer: DomSanitizer, public navCtrl: NavController, public navParams: NavParams, private http: Http, private commonService: AppCommonService) {
    this.getAppFile(this.page);
    this.getAppFileTest();

    // for (let i = 0; i < 30; i++) {
    //   this.items.push(this.items.length);
    // }
  }

  getAppFile(page:Page) {
    this.http.post(this.commonService.getReportServerPath() + "/mobileSubject/getMobileDirectory", page, { headers: this.commonService.getHeaders() }).toPromise().then(
      res => {
        this.contentList = res.json();
        console.log(res.json());
        
      }
    );
  }

  getAppFileTest(){
        var json = [{ "Type": "Coding1", "Height": 100 },{ "Type": "Coding2", "Height": 200 },{ "Type": "Coding3", "Height": 300 }];
        
        var rowStr="<ion-card-header style='padding:0px;font-size: 1.3rem;'><ion-item >";
        //增加表头
        for (var key in json[0]) {
         // alert(key);
         //alert(json[key]);
         rowStr+="<span style='font-family:Microsoft YaHei;'>"+key+"</span>";
        }
        rowStr+="<ion-icon name='more' item-right></ion-icon></ion-item>";
        
    
        //增加表体
        for(var i=0;i<json.length;i++)
        {
          rowStr+="<ion-item>";
          //增加表头
          for (var key in json[i]) {
           // alert(key);
           //alert(json[key]);
           rowStr+='<ion-card-content>'+json[i][key]+'</ion-card-content>'
          }
    
        }
        this.card_content=rowStr;
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      // this.items = [];
      // for (var i = 0; i < 30; i++) {
      //   this.items.push(this.items.length);
      // }
      this.getAppFile(this.page);
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000)
  }
  ;

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      // for (let i = 0; i < 30; i++) {
      //   this.items.push(this.items.length);
      // }

      this.page.startIndex =this.page.startIndex+5;
      this.page.endIndex = this.page.endIndex+5;
      console.log(this.page);
      this.http.post(this.commonService.getReportServerPath() + "/mobileSubject/getMobileDirectory", this.page, { headers: this.commonService.getHeaders() }).toPromise().then(
        res => {
          for (let key of res.json()) {
            this.contentList.push(key);
          }
        }
      );
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }



  getTheme() {
    this.navCtrl.push(ThemePage, {});
  }
  gotoIframe() {
    //let url = "C:/Users/wangjian/Documents/iReport/file/web/app/2017利润表.html";
    this.navCtrl.push(BrowserPage, {
      browser: {
        title: 'baidu',
        url: 'http://www.baidu.com'
      }
    });
  }
}

export class Content{
  title:string;
  body: any;

  toString(){
      return "{title="+this.title+",body="+this.body+"}";
  }
}
export class Page{
  startIndex:any;
  endIndex: any;

  toString(){
      return "";
  }
}
>>>>>>> zj
