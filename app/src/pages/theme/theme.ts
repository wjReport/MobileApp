import { NavController, NavParams } from 'ionic-angular';
import {Component, ViewChild, ElementRef} from '@angular/core';
import { BrowserPage } from './browser';
import echarts from 'echarts';
/*
  Generated class for the Index page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html'
})
export class ThemePage {
  @ViewChild('theme') theme: ElementRef;
  @ViewChild('theme1') theme1: ElementRef;
  chart: any;
  chart1: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemePage');
  }

  ionViewDidEnter() {

    //图表
    let ctx = this.theme.nativeElement;
    this.chart = echarts.init(ctx);
    var all_income = { 
           tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                top: '5%',
                left: '3%',
                right: '10%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 1]
            },
            yAxis: {
                type: 'category',
                data: ['武汉','十堰','黄冈']
            },
            series: [
                {
                    name: '2017年',
                    type: 'bar',
                    data: [10,20,30]
                }
            ]
        };
        this.chart.setOption(all_income);

    let ctx1 = this.theme1.nativeElement;
    this.chart1 = echarts.init(ctx1);
    var all_income1 = { 
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                top: '3%',
                left: '3%',
                right: '10%',
                bottom: '10%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '20%',
                    data:[10, 52, 200]
                }
            ]
        };
        this.chart1.setOption(all_income1);
  }
  gotoIframe(){
    this.navCtrl.push(BrowserPage, {
        browser: {
            title: 'baidu',
            url: 'http://www.baidu.com'
        }
    });
  }
}
