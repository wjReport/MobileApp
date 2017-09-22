import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { AppCommonService } from '../../app/app-common';
import { ResultListPage } from '../query/resultList';
import { AlertController,LoadingController } from 'ionic-angular';
/*
  Generated class for the Query page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-param',
  templateUrl: 'param.html'
})
export class ParamPage {
  selectInParam:InParam;
  selectOutParam:Array<OutParam>;
  selectParamRes:Param;
  selectName:any;
  reportName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,private commonService:AppCommonService,private alertCtrl: AlertController,public loadingCtrl: LoadingController) {
      console.log("~~~~~~~~~~");
      console.log(navParams.get('selectParamRes'));
      this.selectParamRes = navParams.get('selectParamRes');
      this.selectInParam = navParams.get('selectParamRes').in;
      console.log("in~~~~~~~~~~");
      console.log(this.selectInParam);
      
      this.selectOutParam = navParams.get('selectParamRes').out;
      this.selectName = navParams.get('selectName');
      this.reportName = navParams.get('reportName');
  }

  presentAlert(i:InParam) {
    const items: any[] = [];
    console.log(i.lookup);
    this.http.post(this.commonService.getReportServerPath()+"/dictionary/execlAppDictionary/"+i.lookup,null,{headers: this.commonService.getHeaders()}).toPromise().then(
        res=>{
            for (let out of res.json()) {
              const item = { type:'radio',label:out.NAME,value:out.VALUE };
              items.push(item);
            }
            console.log(items);
            let alert = this.alertCtrl.create({
                title: i.name,
                inputs: items,
                buttons: [
                  {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                    }
                  },
                  {
                    text: 'OK',
                    handler: data  => {
                      console.log(data);
                      i.value = data;
                    }
                  }
                ]
              });
              alert.present();
        }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamPage');
  }

  execSelect(){
    console.log("selectParamRes");
    console.log(this.selectParamRes);
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: '正在加载数据....'
    });

    loading.present();
    this.http.post(this.commonService.getReportServerPath()+"/select/execSelectAPP/"+this.selectName+"/"+this.reportName,this.selectParamRes,{headers: this.commonService.getHeaders()}).toPromise().then(
        res=>{
            console.log("execSelect:");
            console.log(res.json());
            // setTimeout(() => {
               this.navCtrl.push(ResultListPage,{
                    resultList: res.json()
                });
              loading.dismiss();
            // }, 1000);
        }
    );
  }
  
  

}
export class InParam{
  id:string;
  name: string;
  datatype: string;
  value:string;
  lookup:string;

  toString(){
      return "{name="+this.name+",id="+this.id+",datatype="+this.datatype+",value="+this.value+"}";
  }
}
export class OutParam{
  id:string;
  name: string;
  datatype: string;

  toString(){
      return "{name="+this.name+",id="+this.id+",datatype="+this.datatype+"}";
  }
}
export class Param{
  db:string;
  desc: string;
  in: InParam;
  out:OutParam;

  toString(){
      return "";
  }
}
