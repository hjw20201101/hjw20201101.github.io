import React from 'react' 
import layui from '../node_modules/layui-src/dist/layui.js'



    export default class Mytree extends React.Component{
        init(){
            layui.use('laypage', function () {
                var laypage = layui.laypage;
        
                //执行一个laypage实例
                laypage.render({
                    elem: 'laypage' ,//注意，这里的 test1 是 ID，不用加 # 号 
                    count: 10 ,//数据总数，从服务端得到
                    limit: 8,
                    theme:'#1E9FFF'
                });
            });
        }
        
        render(){
            
            return <div id='laypage'>{this.init()}</div>
        }
    }
