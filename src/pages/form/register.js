import React from 'react'
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,Icon,message, InputNumber} from 'antd'
import moment from 'moment';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea ;


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
      message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
  }

class FormRegister extends React.Component {
    constructor(){
        super()
        this.state={
            
        }
    }
    handleSubmit(){
        let userInfo = this.props.form.getFieldsValue() ;
        let allError = this.props.form.getFieldsError() ;
        console.log(allError)
        if(allError.userName||allError.userPwd){
            message.success(`${userInfo.userName}恭喜你，登录成功，当前密码为:${userInfo.userPwd}`)
        }else{
            message.success(`用户名或者密码不能为空`)
        }
        
    }
    getBase64 = (img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    handleChange = (info) => {
            //注意需要上传的图片格式为JPG
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
          }));
        }
      }
    render(){
        const { getFieldDecorator } = this.props.form ;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout = {
            wrapperCol:{
                xs:24,
                sm:{
                    span:24,
                    offset:4
                }
            }
        }
        return(
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required : true,
                                            message:'用户名不能为空'
                                        }
                                    ]
                                })(
                                    <Input placeholder="请输入用户名" />
                                )
                            }
                           
                        </FormItem>
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required : true,
                                            message:'密码不能为空'
                                        }
                                    ]
                                })(
                                    <Input type="password" placeholder="请输入密码" />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue:'1',
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue: 18,
                                })(
                                    <InputNumber />
                                )
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue: '2',
                                })(
                                    <Select>
                                        <Option value='1'>咸鱼一条</Option>
                                        <Option value='2'>咸鱼两条</Option>
                                        <Option value='3'>凹凸曼</Option>
                                        <Option value='4'>钢铁侠</Option>
                                        <Option value='5'>浩克</Option>
                                        <Option value='6'>海王</Option>
                                        <Option value='7'>帅到木有朋友</Option>
                                        <Option value='8'>家里有矿</Option>
                                        <Option value='9'>手里木钱</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest',{
                                    initialValue: ['2','5'],
                                })(
                                    <Select mode="multiple" maxTagCount={1}>
                                        <Option value="1">游泳</Option>
                                        <Option value="2">打篮球</Option>
                                        <Option value="3">踢足球</Option>
                                        <Option value="4">跑步</Option>
                                        <Option value="5">爬山</Option>
                                        <Option value="6">骑行</Option>
                                        <Option value="7">桌球</Option>
                                        <Option value="8">麦霸</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarried',{
                                    initialValue: false,
                                    valuePropName:'checked'
                                })(
                                    <Switch />
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                                    initialValue: moment('2018-08-08'),
                                })(
                                    <DatePicker />
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                                    initialValue: '火星殖民地',
                                })(
                                    <TextArea autosize={{minRows:4,maxRows:6}} />
                                )
                            }
                        </FormItem>
                        <FormItem label="早起时间" {...formItemLayout}>
                            {
                                getFieldDecorator('time',{
                                    initialValue: moment('07:08:23', 'HH:mm:ss'),
                                })(
                                    <TimePicker/>
                                )
                            }
                        </FormItem>
                        <FormItem label="上传头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                        listType="picture-card"
                                        showUploadList={false}
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        onChange={this.handleChange}
                                    >
                                        {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                                    </Upload>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('agreenment')(
                                    <Checkbox>我已阅读<a herf="#">用户协议</a></Checkbox>
                                )
                            }
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            <Button type="primary" onClick={this.handleSubmit.bind(this)}>注册</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}

export default Form.create()(FormRegister)