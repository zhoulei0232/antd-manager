import React from 'react'
import {Card , Button , Modal} from 'antd'
import './index.less'

export default class Modals extends React.Component {
    constructor(){
        super()
        this.state={
            showModal1:false,
            showModal2:false,
            showModal3:false,
            showModal4:false,
        }
    }
    handleOpen(type){
        this.setState({
            [type]:true
        })
    }
    handleConfirm(type){
        Modal[type]({
            title:"提示",
            content:"我是一个消息提示弹框哟~~~",
            onCancel(){
                console.log('我取消了')
            },
            onOk(){
                console.log('确定')
            }

        })
    }
   

    render(){
        return (
            <div>
                <Card title="基础模态框" className="card-botton-wrap">
                    <Button type="primary" onClick={this.handleOpen.bind(this,'showModal1')}>open</Button>
                    <Button type="primary" onClick={this.handleOpen.bind(this,'showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={this.handleOpen.bind(this,'showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={this.handleOpen.bind(this,'showModal4')}>水平垂直居中</Button>
                </Card>
                <Card title="信息确认框" className="card-botton-wrap">
                    <Button type="primary" onClick={this.handleConfirm.bind(this,'confirm')}>confirm</Button>
                    <Button type="primary" onClick={this.handleConfirm.bind(this,'info')}>info</Button>
                    <Button type="primary" onClick={this.handleConfirm.bind(this,'success')}>success</Button>
                    <Button type="primary" onClick={this.handleConfirm.bind(this,'warning')}>warning</Button>
                </Card>
                <Modal 
                    title="React"
                    visible={this.state.showModal1}
                    onCancel={()=>{
                        this.setState({
                            showModal1:false
                        })
                    }}
                > 
                    <p>欢迎学习react.哈哈哈哈哈</p>
                </Modal>
                <Modal 
                    title="React"
                    visible={this.state.showModal2}
                    okText="我很好"
                    cancelText="算了吧"
                    onCancel={()=>{
                        this.setState({
                            showModal2:false
                        })
                    }}
                > 
                  <p>欢迎学习react.哈哈哈哈哈</p>
                </Modal>
                <Modal 
                    title="React"
                    style={{top:20}}
                    visible={this.state.showModal3}
                    onCancel={()=>{
                        this.setState({
                            showModal3:false
                        })
                    }}
                > 
                    <p>欢迎学习react3.哈哈哈哈哈</p>
                </Modal>
                <Modal 
                    title="React"
                    centered
                    visible={this.state.showModal4}
                    onCancel={()=>{
                        this.setState({
                            showModal4:false
                        })
                    }}
                > 
                    <p>欢迎学习react4.哈哈哈哈哈</p>
                </Modal>
            </div>
        )
    }
}
