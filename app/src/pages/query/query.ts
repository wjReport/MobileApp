import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { AppCommonService } from '../../app/app-common';
import { SelectNamePage } from '../query/selectName';
import { Headers} from '@angular/http';
/*
  Generated class for the Query page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-query',
  templateUrl: 'query.html'
})
export class QueryPage {
  private headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});
  public credentials = {UserCode:'',Pwd:''};
  conditions:any;
  reportCategory:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,private commonService:AppCommonService) {
    this.credentials.UserCode = localStorage.getItem("username");
    this.credentials.Pwd = localStorage.getItem("password");
    this.headers.set("credentials",JSON.stringify(this.credentials));
    this.getSelectClass();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QueryPage');
  }

  getSelectClass(){
    console.log(this.commonService.getHeaders());
		this.http.post(this.commonService.getReportServerPath()+"/select/getSelectClass",null,{headers: this.commonService.getHeaders()}).toPromise().then(
			res=>{
				this.conditions = res.json();
			}
		);
	}
  getSelectName(reportCategory){
    this.reportCategory = reportCategory;
    this.http.post(this.commonService.getReportServerPath()+"/select/getSelectName/"+reportCategory,null,{headers: this.commonService.getHeaders()}).toPromise().then(
			res=>{
        this.navCtrl.push(SelectNamePage,{
          conditions: res.json(),
          selectName: reportCategory
        });
				// this.conditions = res.json();
			}
		);
  }

}
