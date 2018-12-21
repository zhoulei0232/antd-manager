import React from 'react'
import {Card ,Table ,Modal ,Button ,message ,Badge} from  'antd' 
import axios from '../../axios/index'
import Utils from '../../utils/utils'

export default class HighTable extends React.Component{
    constructor(){
        super()
        this.state={

        }
        this.params={

        }
    }
    componentDidMount(){
        this.request();
    }
    request = ()=>{
        let _this =this;
        axios.ajax({
            url:'highTable',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            if(res.code == 0){
                res.result.dataSource2.map((item,index)=>{
                    item.key = index ;
                })
                this.setState({
                    dataSource:res.result.dataSource2
                })
            }
        })
    }
    handleChange = (pagination, filters,sorter)=>{
        this.setState({
            sortOrder:sorter.order
        })
    }
    handleDelete = (item)=>{
        let id = item.id ;
        console.log(item)
        Modal.confirm({
            title:"确认",
            content:"您确认删除此条数据吗？",
            onOk:()=>{
                message.success('删除成功');

                let data = this.state.dataSource.filter((item)=>{
                    return  item.id !== id
                })
                this.setState({
                    dataSource:data
                })
            }
        })
    }
    render(){
        const columns1 = [
            {
                title: 'id',
                key: 'id',
                width:80,
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                width: 80,
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                width: 80,
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                width: 120,
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                width: 80,
                dataIndex: 'time'
            }
        ]
        const columns2 = [
            {
                title: 'id',
                key: 'id',
                width: 80,
                fixed:'left',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                width: 80,
                fixed: 'left',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                width: 80,
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                width: 80,
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                width: 80,
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '生日1',
                key: 'birthday1',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日2',
                key: 'birthday2',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日3',
                key: 'birthday3',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日4',
                key: 'birthday4',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日5',
                key: 'birthday5',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日6',
                key: 'birthday6',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日7',
                key: 'birthday7',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日8',
                key: 'birthday8',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日9',
                key: 'birthday9',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日10',
                key: 'birthday10',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日11',
                key: 'birthday11',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日12',
                key: 'birthday12',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日13',
                key: 'birthday13',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日14',
                key: 'birthday14',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日15',
                key: 'birthday15',
                width: 120,
                dataIndex: 'birthday'
            }, {
                title: '生日16',
                key: 'birthday16',
                width: 120,
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                width: 120,
                // fixed: 'right',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                width: 80,
                // fixed: 'right',
                dataIndex: 'time'
            }
        ]
        const columns3 = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age',
                sorter:(a,b)=>{
                    return a.age - b.age;
                },
                sortOrder:this.state.sortOrder
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]
        const columns4 = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '年龄',
                key: 'age',
                dataIndex: 'age'
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': <Badge status="success" text="成功"/>,
                        '2': <Badge status="error" text="报错" />,
                        '3': <Badge status="default" text="正常" />,
                        '4': <Badge status="processing" text="进行中" />,
                        '5': <Badge status="warning" text="警告" />
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '操作',
                render:(text,record,index)=>{
                    return <Button size="small" onClick={() => { this.handleDelete(record) }}>删除</Button>
                }
            }
        ]
        return(
            <div>
                <Card title="头部固定">
                    <Table 
                        bordered
                        columns={columns1}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{y:140}}
                    />
                </Card>
                <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table 
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{x:2650}}
                    />
                </Card>
                <Card title="表格排序" style={{ margin: '10px 0' }}>
                    <Table 
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作按钮" style={{ margin: '10px 0' }}>
                    <Table 
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}