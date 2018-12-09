import React from 'react'
import {Card , Button , notification} from 'antd'
import './index.less'

export default  class  Notification extends React.Component {
    openNotification (type,direction){
        if(direction){
            notification.config({
                placement:direction
            })
        }
        notification[type]({
            message:'下雪了',
            description:'马上要下雪，路滑，注意安全。'
        })
    }
    render(){
        return(
            <div>
                <Card title="通知提醒框" className="card-botton-wrap">
                    <Button type="primary" onClick={this.openNotification.bind(this,'success')} > success </Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'info')} > info </Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'warning')} > warning </Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'error')} > error </Button>
                </Card>
                <Card title="通知提醒框" className="card-botton-wrap">
                    <Button type="primary" onClick={this.openNotification.bind(this,'success','topLeft')} > success </Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'info','topRight')} > info </Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'warning','bottomLeft')} > warning </Button>
                    <Button type="primary" onClick={this.openNotification.bind(this,'error','bottomRight')} > error </Button>
                </Card>
            </div>

        )
    }
}