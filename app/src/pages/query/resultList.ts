import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { AppCommonService } from '../../app/app-common';
/*
  Generated class for the Query page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-resultList',
  templateUrl: 'resultList.html'
})
export class ResultListPage {
  selectOutParam:OutParam;
  resultList:any;
  result:string[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,private commonService:AppCommonService) {
      console.log("~~~~~~~~~~");
      console.log(navParams.get('resultList'));
      //输出表头
      //生成行
        //生成列
 
      this.resultList = navParams.get('resultList');
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultListPage');
  }

}
export class OutParam{
  id:string;
  name: string;
  datatype: string;
  child:any;

  toString(){
      return "{name="+this.name+",id="+this.id+",datatype="+this.datatype+"}";
  }
}

