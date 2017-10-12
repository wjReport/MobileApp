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
  selector: 'page-resultValue',
  templateUrl: 'resultValue.html'
})
export class ResultValuePage {
  selectOutParam:OutParam;
  resultValue:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,private commonService:AppCommonService) {
      this.resultValue = navParams.get('resultValue');
      this.selectOutParam = navParams.get('selectOutParam');
      
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

