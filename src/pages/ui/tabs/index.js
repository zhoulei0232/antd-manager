import React from 'react' 
import {Card ,Tabs ,message ,Icon} from 'antd'
import './index.less'
const TabPane = Tabs.TabPane ;

export default class Tab extends React.Component {
    newTabIndex = 0 ;
    componentWillMount(){
        const panes = [
            {
                title:'Tab 1',
                content:'Tab 1',
                key:'1'
            }, {
                title:'Tab 2',
                content:'Tab 2',
                key:'2'
            }, {
                title:'Tab 3',
                content:'Tab 3',
                key:'3'
            },
        ]
        this.setState({
            activeKey:panes[0].key,
            panes
        })
    }
    handleCallback(key){
        message.info('你选择了页签'+key)
    }
    onchange(key){
        this.setState({
            activeKey:key
        })
    }
    onEdit(targetKey,action){
       this[action](targetKey) ;
    }
    add(){
        const panes =this.state.panes ;
        const activeKey = `newTab ${this.newTabIndex++}` ;
        panes.push({title:activeKey , content:'new tab pane ',key:activeKey})
        this.setState({
            panes,
            activeKey
        })
    }
    remove(targetKey){
        let activeKey = this.state.activeKey ;
        let lastIndex ;
        this.state.panes.forEach((item,index)=>{
            if(item.key === targetKey) {
                lastIndex = index -1
            }
        })
        const panes = this.state.panes.filter(item => item.key !== targetKey)
        if(lastIndex >=0 && activeKey === targetKey){
            activeKey = panes[lastIndex].key
        }
        this.setState({panes,targetKey})
    }

    render(){
        return (
            <div>
                <Card title="Tab页签"  className="card-botton-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback.bind(this)}>
                        <TabPane tab="Tab 1" key="1">欢迎来到React世界1</TabPane>
                        <TabPane tab="Tab 2" key="2">欢迎来到React世界2</TabPane>
                        <TabPane tab="Tab 3" key="3">欢迎来到React世界3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带icon的页签" className="card-botton-wrap" >
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback.bind(this)}>
                        <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">欢迎来到React世界1</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">欢迎来到React世界2</TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">欢迎来到React世界3</TabPane>
                    </Tabs>
                </Card>
                <Card title="Tab带icon遍历的页签" className="card-botton-wrap">
                    <Tabs 
                        onChange = {this.onchange.bind(this)}
                        activeKey = {this.state.activeKey}
                        type = "editable-card"
                        onEdit = {this.onEdit.bind(this)}
                    >
                       {
                           this.state.panes.map((item)=>{
                               return <TabPane tab={item.title} key={item.key} >{item.content}</TabPane>
                           })
                       }
                    </Tabs>
                </Card>
            </div>
        )
    }
}