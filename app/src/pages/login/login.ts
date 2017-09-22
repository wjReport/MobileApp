import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppService } from '../../app/app.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { AppCommonService } from '../../app/app-common';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: './login.html'
})
export class LoginPage {
  public credentials = {UserCode:'',Pwd:''};
  public errMsg: string;
  public result: string;
  loginForm: FormGroup;
  username: any;
  password: any;
  path: any;
  toPage: any = TabsPage;
  constructor(public nav: NavController, private formBuilder: FormBuilder,private appService:AppService,private commonService:AppCommonService) {
    console.log(localStorage.getItem("username"));
    console.log(localStorage.getItem("password"));
    console.log(localStorage.getItem("path"));
    this.loginForm = formBuilder.group({
      // username: ['sysadmin', Validators.compose([Validators.required])],
      // password: ['sys010203', Validators.compose([Validators.required])],
      // path:['http://localhost:8080/reportServer', Validators.compose([Validators.required])]
      username: [localStorage.getItem("username"), Validators.compose([Validators.required])],
      password: [localStorage.getItem("password"), Validators.compose([Validators.required])],
      path:[localStorage.getItem("path"), Validators.compose([Validators.required])]
    })
    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
    this.path = this.loginForm.controls['path'];
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(value) {
    console.log(value.username+"   "+value.password+"   "+value.path);
    if(value.username==""||value.password==""){
      this.errMsg = "用户名或密码不能为空";
    }else if(value.path==""){
      this.errMsg = "请填写服务器地址";
    }else{
      this.credentials.UserCode = value.username;
      this.credentials.Pwd = value.password;
                this.commonService.setReportServerPath(value.path,this.credentials);
      // localStorage.setItem("username",value.username);
      // localStorage.setItem("password",value.password);
      // localStorage.setItem("path",value.path);
      // this.nav.push(this.toPage);
      this.appService.login(this.credentials).then(
          result=>{
              console.log(result);
              if("Y"==result){
                localStorage.setItem("username",value.username);
                localStorage.setItem("password",value.password);
                localStorage.setItem("path",value.path);
                this.nav.push(this.toPage);
              }else{
                this.errMsg = "用户名或密码错误";
              }
          }
        );
    }
  }

}
