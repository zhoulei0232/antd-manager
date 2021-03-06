import React from  'react'
import {Row,Col} from 'antd'
import './index.less'
import Util from '../../utils/utils'
import axios from '../../axios'

export default class Header extends React.Component{
    constructor(){
        super()
        this.state={
            userName:'',
            sysTime:''
    
        }
    }
   
    componentWillMount(){
        //显示用户名
        this.setState({
            userName:'二货琪少'
        })
        //显示初始时间
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
        //调用天气的API
        this.getWeatherAPIDate()
     

    }
    getWeatherAPIDate(){
        let city = '武汉';
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'   //AK值可以在百度上自己申请
        }).then((res)=>{
            if(res.status == 'success'){
                let data = res.results[0].weather_data[0]
                this.setState({
                    dayPictureUrl:data.dayPictureUrl,
                    weather:data.weather 
                })
            }
        
        })
    }
    render(){
        return(
            <div  className="header">
                <Row className ="header-top">
                    <Col span = "24">
                        <span>欢迎，{this.state.userName} </span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className ="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                         首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="weather-date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} />
                        </span>
                        <span className="weather-detail">
                             {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}