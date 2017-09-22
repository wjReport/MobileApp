import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { AppCommonService } from '../../app/app-common';
import { ParamPage } from '../query/param';
/*
  Generated class for the Query page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-selectName',
  templateUrl: 'selectName.html'
})
export class SelectNamePage {
  conditions:any;
  selectName:any;
  selectInParam:any;
  selectOutParam:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,private commonService:AppCommonService) {
      this.conditions = navParams.get('conditions');
      this.selectName = navParams.get('selectName');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectNamePage');
  }

  getSelectParam(reportName) {
    this.http.post(this.commonService.getReportServerPath()+"/select/getSelectParam/"+this.selectName+"/"+reportName,null,{headers: this.commonService.getHeaders()}).toPromise().then(
        res=>{
            console.log("SelectParamRes:");
            console.log(res.json());
            this.navCtrl.push(ParamPage,{
                selectParamRes: res.json(),
                selectName: this.selectName,
                reportName: reportName
            });
        }
    );
  }
  

}
