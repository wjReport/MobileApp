import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { DomSanitizer } from "@angular/platform-browser";
import {Http} from '@angular/http';
import { AppCommonService } from '../../app/app-common';

@Component({
  selector: 'page-browser',
  templateUrl: 'browser.html'
})
export class BrowserPage {
  webFilePath: string = "";//经过编码的文件全路径(eg,d:/XX/XX.html)
  reportUrl: string = ""; //虚拟目录请求路径(eg,http://ip:8080/report/webfile)
  webPath: string = "";   //虚拟目录实际路径(eg,d:/report/file/web/file)
  appUrl: string = "";
  browser: any = {
    isLoaded: false, // 网页是否被加载
    proObj: null, // 进度条对象
    progress: 0, // 网页访问的进度条
    secUrl: '', // 安全链接

    title: '加载中',
    url: ''
  };

  constructor(public navCtrl: NavController,
              private params: NavParams,
              private sanitizer: DomSanitizer,
              private popoverCtrl: PopoverController,
              private http: Http,
              private commonService:AppCommonService) {
    let browser = this.params.get('browser');
    // if(browser) {
    //   this.browser.title = browser.title;
    //   this.browser.url = browser.url;
    //   this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(browser.url);
    // } else {
    //   this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(browser.url);
    // }
    console.log(this.browser.secUrl);
    this.reload();
    this.webFilePath = browser.url;
    console.log(browser.url);
    //如果已经向服务器请求WEB路径和文件路径,则不再重复发送该请求
    console.log(this.commonService.getReportServerPath());
    this.http.post(this.commonService.getReportServerPath()+"/app/AppReportUrl",null,{headers: this.commonService.getHeaders()}).toPromise().then(
        res=>{ 
            console.log("11111");
            this.reportUrl = this.commonService.getWebReportPath();
            this.webPath = res.json().appPath;
            // console.log(this.reportUrl);
            // console.log(this.webPath);
            // console.log(this.webFilePath);
            this.appUrl = this.reportUrl + decodeURIComponent(decodeURIComponent(this.webFilePath)).replace(this.webPath,"");
            console.log(this.appUrl);
            // console.log(this.sanitizer.bypassSecurityTrustResourceUrl(this.appUrl));
            if(browser) {
              this.browser.title = browser.title;
              this.browser.url = this.appUrl;
              this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.appUrl);

            } else {
              this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.appUrl);
            }
            console.log(this.browser.secUrl);
            this.reload();
        }
    );
 
    
  }

  ionViewDidLoad() {
    if(!this.browser.proObj) {
      this.browser.proObj = document.getElementById('progress');
    }
    this.onprogress();
  }

  // 生成随机数
  private random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 网页访问进度
  private onprogress() {
    // 随机时间
    let timeout = this.random(10, 30);

    let timer = setTimeout(() => {
      if(this.browser.isLoaded) {
        this.browser.proObj.style.width = '100%';
        clearTimeout(timer);
        return;
      }

      // 随机进度
      this.browser.progress += this.random(1, 5);

      // 随机进度不能超过 90%，以免页面还没加载完毕，进度已经 100% 了
      if(this.browser.progress > 90){
        this.browser.progress = 90;
      }

      this.browser.proObj.style.width = this.browser.progress + '%';
      this.onprogress();
    }, timeout);
  }

  // 如果iframe页面加载成功后
  loaded() {
    this.browser.isLoaded = true;
  }

  // 重新加载页面
  reload() {
    let title = this.browser.title;
    let url = this.browser.secUrl;
    this.browser.title = '加载中';
    this.browser.secUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');

    setTimeout(() => {
      this.browser.isLoaded = false;
      this.browser.progress = 0;
      if(!this.browser.proObj) {
        this.browser.proObj = document.getElementById('progress');
      }
      this.onprogress();
      this.browser.title = title;
      this.browser.url = url;
    }, 10);
  }

}