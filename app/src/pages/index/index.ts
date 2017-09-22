import { NavController, NavParams } from 'ionic-angular';
import {Component, ViewChild, ElementRef} from '@angular/core';
import echarts from 'echarts';
/*
  Generated class for the Index page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {
  @ViewChild('container') container: ElementRef;
  chart: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
  }

  ionViewDidEnter() {
    let ctx = this.container.nativeElement;
    this.chart = echarts.init(ctx);
    var all_income = { 
            theme: '',
            title: {text: '某站点用户访问来源', subtext: '纯属虚构',x: 'center'},
            tooltip: {trigger: 'item', formatter: "{a} <br/>{b} : {c} ({d}%)"},
            legend: {orient: 'vertical',left: 'left',top:'10%',
                     data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']},
            series: [{name: '访问来源',type: 'pie',startAngle: 180, radius: '55%',center: ['50%', '60%'],
                      data: [{value: 335,name: '直接访问'}, {value: 310,name: '邮件营销'},
                             {value: 234, name: '联盟广告'}, {value: 135, name: '视频广告'},
                             {value: 1548, name: '搜索引擎'}],
                      itemStyle: { emphasis: {shadowBlur: 10,shadowOffsetX: 0,shadowColor: 'rgba(0, 0, 0, 0.5)'}}
           }]
        };
        this.chart.setOption(all_income);
    // this.chart.setOption({
    //   color: ['#3398DB'],
    //   tooltip : {
    //     trigger: 'axis',
    //     axisPointer : {
    //       type : 'shadow'
    //     }
    //   },
    //   grid: {
    //     left: '3%',
    //     right: '4%',
    //     bottom: '3%',
    //     width: '100%',
    //     height: '100%',
    //     containLabel: true
    //   },
    //   xAxis : [
    //     {
    //       type : 'category',
    //       data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //       axisTick: {
    //         alignWithLabel: true
    //       }
    //     }
    //   ],
    //   yAxis : [
    //     {
    //       type : 'value'
    //     }
    //   ],
    //   series : [
    //     {
    //       name:'直接访问',
    //       type:'bar',
    //       // barWidth: '60%',
    //       data:[10, 52, 200, 334, 390, 330, 220]
    //     }
    //   ]
    // });
  }
}
