import { NavController, NavParams } from 'ionic-angular';
import {Component} from '@angular/core';
import {Http} from '@angular/http';
import { AppCommonService } from '../../app/app-common';
import { ThemePage } from '../theme/theme';
import { BrowserPage } from './browser';
// import echarts from 'echarts';
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
  themeList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,private commonService:AppCommonService) {
    //this.getAppFile();
  }

  getAppFile(){
		this.http.post(this.commonService.getReportServerPath()+"/select/getAppFile",null,{headers: this.commonService.getHeaders()}).toPromise().then(
			res=>{
				this.themeList = res.json();
			}
		);
	}

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
  }

  getTheme(){
    this.navCtrl.push(ThemePage,{});
  }
  gotoIframe(){
    //let url = "C:/Users/wangjian/Documents/iReport/file/web/app/2017利润表.html";
    this.navCtrl.push(BrowserPage, {
        browser: {
            title: 'baidu',
            url: 'http://www.baidu.com'
        }
    });
  }
}
