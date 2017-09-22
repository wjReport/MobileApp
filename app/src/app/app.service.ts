import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Headers } from '@angular/http';
import { AppCommonService } from '../app/app-common';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class AppService
{
    protected headers = new Headers({'Content-Type': 'application/json'});
	selectParams: { in: string; out: string };
	constructor(private http: Http,private commonService:AppCommonService) {
		
	}
	//先对密码加密再登录
	login(credentials): Promise<string>{
        console.log("login"+credentials);
		return this.encodePwd(credentials).then(credentials=>{
			return this.http.post(this.commonService.getReportServerPath()+"/user/login",credentials,{headers: this.headers}).toPromise().then(
				res=>{
                    console.log("res1"+res.text());
                    return res.json().LOGINRESULT;
                }
			);
		});
	}
	//直接登录(密码已经加密)
	loginDirect(credentials):Promise<string>{
		return this.http.post(this.commonService.getReportServerPath()+"/user/login",credentials,{headers: this.headers}).toPromise().then(
			res=>{return res.json().LOGINRESULT}
		);
	}
	//对密码加密
	private encodePwd(credentials){
        console.log("encodePwd"+credentials);
		return this.http.post(this.commonService.getReportServerPath()+"/user/encodePwd",credentials.Pwd,{headers: this.headers}).toPromise().then(
			res=>{
                console.log("res2"+res.text());
				credentials.Pwd = res.json().encodePwd;
				return credentials}
		);
	}
	//通过类别返回名称
	getSelectClass(): Promise<string>{
		return this.http.post(this.commonService.getReportServerPath()+"/select/getSelectClass",{headers: this.headers}).toPromise().then(
			res=>{
				console.log("SelectClassRes:"+res.json());
				return res.json();
			}
		);
	}
	//通过类别返回名称
	getSelectName(reportCategory): Promise<string>{
		return this.http.post(this.commonService.getReportServerPath()+"/select/getSelectName/"+reportCategory,{headers: this.headers}).toPromise().then(
			res=>{
				console.log("SelectNameRes:"+res.json());
				return res.json();
			}
		);
	}
	// 根据SQLID 取入参 出参信息
	getSelectInParam(reportCategory,reportName): Promise<string>{
		return this.http.post(this.commonService.getReportServerPath()+"/select/getSelectParam/"+reportCategory+"/"+reportName,{headers: this.headers}).toPromise().then(
			res=>{
				console.log("SelectParamRes:"+res.json());
				return res.json().in;
			}
		);
	}
	getSelectOutParam(reportCategory,reportName): Promise<string>{
		return this.http.post(this.commonService.getReportServerPath()+"/select/getSelectParam/"+reportCategory+"/"+reportName,{headers: this.headers}).toPromise().then(
			res=>{
				console.log("SelectParamRes:"+res.json());
				return res.json().out;
			}
		);
	}
}