import React from 'react' 
import {Card  ,Spin ,Icon ,Alert} from 'antd'
import './index.less'

export default class Loadings extends React.Component {
   

    render(){
        const icon =<Icon type="loading" style={{fontSize:24}}  />
        const iconLoading = <Icon type="loading" style={{fontSize:24}} />
        return (
            <div>
                <Card title="Spin用法" className="card-botton-wrap">
                    <Spin size="small" />
                    <Spin style={{margin:'0  10px'}} />
                    <Spin size="large" />
                    <Spin indicator={icon} style={{marginLeft:10}} spinning={true} />
                </Card>
                <Card title="内容遮罩" className="card-botton-wrap">
                    <Alert
                        message="React"
                        description="欢迎来到react 世界"
                        type="info"
                        style={{marginBottom:10}} 
                    />
                    <Spin>
                        <Alert
                            message="React"
                            description="欢迎来到react 世界"
                            type="warning"
                            style={{marginBottom:10}} 
                        />
                    </Spin>
                    <Spin tip="加载中。。。">
                        <Alert
                            message="React"
                            description="欢迎来到react 世界"
                            type="warning"
                            style={{marginBottom:10}} 
                        />
                    </Spin>
                    <Spin indicator={iconLoading}>
                        <Alert
                            message="React"
                            description="欢迎来到react 世界"
                            type="warning"
                        />
                    </Spin>

                </Card>
            </div>
        )
    }
}