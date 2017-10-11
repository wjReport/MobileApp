import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',//1
})
export class AboutPage {

  page_content = "<ion-card class='card-iÍos'><ion-card-header>hello</ion-card-header><ion-card-content>Card Content</ion-card-content></ion-card>";
 
  test:string=`<ion-grid>
  <ion-row>
     <ion-col col-3>
       <span>缓存</span></ion-col>
     <ion-col col-3>
       <span>收藏</span></ion-col>
     <ion-col col-3>
       <span>历史</span></ion-col>
     <ion-col col-3>
       <span>提醒</span></ion-col>
   </ion-row>
 </ion-grid>`;

 html: string;

  constructor(public sanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams) {
    this.html = "<span style=\"color:red;\">1234</span>";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  showLogin() {
    this.navCtrl.push('LoginPage')
  }
  myClick() {

    var json = [{ "Type": "Coding1", "Height": 100 },{ "Type": "Coding2", "Height": 200 },{ "Type": "Coding3", "Height": 300 }];
    var myTable=document.getElementById("myTable");
    
    var rowStr="<tr>";
    //增加表头
    for (var key in json[0]) {
     // alert(key);
     //alert(json[key]);
     rowStr+='<td>'+key+'</td>'
    }
    rowStr+='</tr>';
    

    //增加表体
    for(var i=0;i<json.length;i++)
    {
      rowStr+="<tr>";
      //增加表头
      for (var key in json[i]) {
       // alert(key);
       //alert(json[key]);
       rowStr+='<td>'+json[i][key]+'</td>'
      }
      rowStr+='</tr>';

    }
    

    myTable.innerHTML=rowStr;
   // alert(this.getJsonLength(json));

  }

  myClick1() {
    
        var json = [{ "Type": "Coding1", "Height": 100 },{ "Type": "Coding2", "Height": 200 },{ "Type": "Coding3", "Height": 300 }];
        var myTable=document.getElementById("myTable");
        
        var rowStr="<ion-row></ion-row>";
        //增加表头
        for (var key in json[0]) {
         // alert(key);
         //alert(json[key]);
         rowStr+='<span>'+key+'</span>'
        }
        rowStr+='</ion-item>';
        
    
        //增加表体
        for(var i=0;i<json.length;i++)
        {
          rowStr+="<ion-item>";
          //增加表头
          for (var key in json[i]) {
           // alert(key);
           //alert(json[key]);
           rowStr+='<span>'+json[i][key]+'</span>'
          }
          rowStr+='</ion-item>';
    
        }
        rowStr+='</ion-list>';
       
        
      //this.test=this.sanitizer.bypassSecurityTrustHtml(rowStr);
       // alert(this.getJsonLength(json));
    
      }

  getJsonLength(jsonData){
    
    var jsonLength = 0;
    
    for(var item in jsonData){
    
    jsonLength++;
    
    }
    
    return jsonLength;
    
    }

}
