import React from "react" ;
import {Card ,Form ,Input ,Button ,Checkbox ,Icon ,message} from "antd" ;
const FormItem = Form.Item ;

class FormLogin extends React.Component {
    handleSubmit(){
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName}恭喜你，登录成功，当前密码为:${userInfo.userPwd}`)
            }
        }
           
        )
    
    }
    render(){
        const { getFieldDecorator } = this.props.form ;
        return(
            <div>
                <Card title="登录行内表单" style={{marginBottom:10}}>
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button  type="primary" >登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录行内表单">
                    <Form style={{width:200}} >
                        <FormItem>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:'用户名不能为空'
                                        },
                                        {
                                           min:6,
                                           max:11,
                                           message:'长度需在6-11位'
                                        },
                                        {
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:'用户名必须为字母或者数字'
                                        }

                                    ]
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名" />
                                )
                            }
                            
                        </FormItem>
                        <FormItem>
                            {
                               getFieldDecorator('userPwd',{
                                   initialValue:'',
                                   rules:[]
                               })(
                                <Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码" />
                               ) 
                            }
                        </FormItem>
                        <FormItem>
                            {
                               getFieldDecorator('remember',{
                                   initialValue:true,
                                   valuePropName:'checked'
                                   
                               })(
                                 <Checkbox>记住密码</Checkbox>
                               ) 
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button  type="primary"  onClick={this.handleSubmit.bind(this)} >登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormLogin) ;