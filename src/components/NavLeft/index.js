import React from  'react'
import MenuConfig from '../../config/menuConfig'
import { Menu  } from 'antd';
import {NavLink} from 'react-router-dom'
import './index.less'

const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component{

    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu = (data)=>{         //利用递归的思想遍历所有的菜单
        return  data.map((item)=>{
            if(item.children){            // 如果有子节点的话继续递归一次这个函数
               return (
                   <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}       
                   </SubMenu>
               )
            }
            return  <Menu.Item  key={item.key} >
                            <NavLink to={item.key}> {item.title} </NavLink>
                    </Menu.Item>
        })
    }

    render(){
        return(
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Zoom 789</h1>
                </div> 
                <Menu theme="dark">
                   {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }
}