import React from 'react'
import { Card ,Button ,message ,Icon} from 'antd';
import './index.less'

export default class Messages extends React.Component {

    handleShowMessage(type){
      
        message[type]("恭喜您，获得了一等奖！" )
    }
    render(){
        return(
            <div>
                <Card title="全局提示框" className="card-botton-wrap">
                    <Button type="primary" onClick={this.handleShowMessage.bind(this,'success')}>success</Button>
                    <Button type="primary" onClick={this.handleShowMessage.bind(this,'info')}>info</Button>
                    <Button type="primary" onClick={this.handleShowMessage.bind(this,'warning')}>warning</Button>
                    <Button type="primary" onClick={this.handleShowMessage.bind(this,'error')}>error</Button>
                    <Button type="primary" onClick={this.handleShowMessage.bind(this,'loading')}>loading</Button>
                </Card>
            </div>
        )
    }
}