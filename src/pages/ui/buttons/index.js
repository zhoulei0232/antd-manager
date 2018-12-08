import React from 'react'
import {Card ,Button , Radio ,Icon} from 'antd'
import './index.less'

export default  class Buttons extends React.Component{
    constructor(){
        super()
        this.state={
            loadingFlag:true,
            size:"default"
        }
    }

    handleCloseLoading(){
        this.setState({
            loadingFlag : !this.state.loadingFlag
        })
    }
    handleChange(e){
        this.setState({
            size:e.target.value
        })
    }
    render (){
        return(
            <div>
                <Card  title="基础表单" className="card-botton-wrap">
                    <Button type="primary">zoom </Button>
                    <Button >zoom </Button>
                    <Button type = "dashed">zoom </Button>
                    <Button type = "danger">zoom </Button>
                    <Button disabled>zoom </Button>
                </Card>
                <Card  title="图形按钮" className="card-botton-wrap">
                    <Button icon="plus">创建 </Button>
                    <Button icon="edit" >编辑 </Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索 </Button>
                    <Button type="primary" icon="download">下载 </Button>
                </Card>
                <Card  title="Loading按钮" className="card-botton-wrap">
                    <Button type="primary" loading={this.state.loadingFlag}>确定 </Button>
                    <Button type="primary" shap="circle" loading={this.state.loadingFlag}> </Button>
                    <Button loading={this.state.loadingFlag}>点击加载 </Button>
                    <Button shape="circle" loading={this.state.loadingFlag}></Button>
                    <Button type="primary" onClick={this.handleCloseLoading.bind(this)}>{this.state.loadingFlag?'关闭':'开启'} </Button>
                </Card>
                <Card  title="按钮组" style={{marginBottom: '10px'}}>
                    <Button.Group>
                          <Button type="primary" icon="left">返回</Button>
                          <Button type="primary" >前进<Icon type="right" /></Button>
                    </Button.Group>
                </Card>
                <Card  title="按钮尺寸" className="card-botton-wrap">
                    <Radio.Group value = {this.state.size} onChange={this.handleChange.bind(this)}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>zoom</Button>
                    <Button  size={this.state.size}>zoom</Button>
                    <Button type="dashed" size={this.state.size}>zoom</Button>
                    <Button type="danger" size={this.state.size}>zoom</Button>
                </Card>

            </div>
        )
    }
}