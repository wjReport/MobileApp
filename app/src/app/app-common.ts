import {Injectable} from '@angular/core';
import { Headers} from '@angular/http';

@Injectable()
export class AppCommonService{
    url:any;
    credentials:any;
    private headers = new Headers({'Content-Type': 'application/json;charset=UTF-8'});

    getHeaders()
    {
        this.headers.set("credentials",JSON.stringify(this.credentials));
        return this.headers;
    }

    setReportServerPath(path,credentials){
        this.url = path;
        this.credentials = credentials;
    }
    //获取report的url,e.g,http://localhost:8080/report
    getContextPath()
    {
	    var url = window.location.href;
	    return url.substring(0,url.indexOf("/",url.indexOf("/",url.indexOf("/",url.indexOf("/") + 1) + 1) + 1));
    }
    //获取reportServer的url
    getReportServerPath()
    {
        // return "http://114.251.247.113:8080/reportServer";
        //return "http://localhost:8080/reportServer";
        return this.url;
    }
    //获取ibas2插件的url
    getIbas2DownloadPath()
    {
        return "http://114.251.247.113:4200/ibas2/install/Setup.exe";
    }

    private getCurrentRequestIp()
    {
        var url = this.url;
    	var ip = url.substring(url.indexOf("//")+2,url.indexOf(":",url.indexOf(":")+1));
        return ip;
    }

    getWebReportPath()
    {
        return "http://"+this.getCurrentRequestIp()+":8080/report/appFile";
    }
}