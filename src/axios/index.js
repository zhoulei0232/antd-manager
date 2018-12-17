import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
// easy-mock 账号为 zhoulei0232     我的手机号
export default  class Axios{
  
    static jsonp(options){
     return   new Promise((resolve,reject) =>{
                    JsonP(options.url,{
                        param:'callback'
                    },function(err,response){
                        resolve(response)
                        reject(err)
                    })
                })
    }

    static ajax(options){
        let baseApi = 'https://www.easy-mock.com/mock/5c14cdf47aeb86217625d7c5/antd/'
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data && options.data.params)||''
            }).then((response)=>{
                if(response.status == '200'){
                    let res = response.data ;
                    if(res.code == '0'){
                        resolve(res)
                    }else{
                        Modal.info({
                            title:'提示',
                            content:res.msg
                        })
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }

}