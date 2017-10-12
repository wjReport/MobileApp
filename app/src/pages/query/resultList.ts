import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import {Http} from '@angular/http';
import { AppCommonService } from '../../app/app-common';
import { ResultValuePage } from '../query/resultValue';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,private commonService:AppCommonService,public loadingCtrl: LoadingController) {
      console.log("~~~~~~~~~~");
      console.log(navParams.get('resultList'));
      //输出表头
      //生成行
        //生成列
 
      this.resultList = navParams.get('resultList').list;
      this.selectOutParam = navParams.get('selectOutParam');
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultListPage');
  }

  getResult(result:any){
    console.log(result.list);
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '正在加载数据....'
    });

    loading.present();
    this.navCtrl.push(ResultValuePage,{
        resultValue: result.list,
        selectOutParam: this.selectOutParam
    });
    loading.dismiss();
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

