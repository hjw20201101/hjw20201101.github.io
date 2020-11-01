
import layuicss from '../node_modules/layui-src/dist/css/layui.css'

import React from 'react'
import ReactDOM from 'react-dom'


// class MyCmp extends React.Component {
//     render(){
//         return <button type="button" className={[layuicss['layui-btn'],layuicss['layui-btn-warm']].join(' ')}>一个标准的按钮2</button>
//     }
// }

// ReactDOM.render(<MyCmp></MyCmp>,document.getElementById('app'))

class MyList extends React.Component {
    constructor() {
        super()
        this.state = {
            myList: [
                { id:1,title: 'text你好111', type: '发文', content: 'Hazelcast代替zookeeper实现缓存数据同步暂不可直接更新到项目上需在测试环境进行测试通过1引入jar包cp-hzsyncjar以及sync-hazelcast模块的class或者直接把cp-hzsyncjar以及sync-hazelcast模块的class打包成mp-hzsyncjar包2server\config\tpl\envproperties新增配置项缓存同步是不是启用haz' },
                { id:2,title: '全文检索测试的部门文件001', type: '发文', content: '\'\'' },
                { id:3,title: '支持5G网络建设', type: '\'\'', content: '\'\'' },
                { id:4,title: 'AA项目工作处理', type: '\'\'', content: '\'\'' },
                { id:5,title: '乌山项目需求会议会议纪要', type: '发文', content: '\'\'' },
                { id:6,title: 'Aa-1项目', type: '\'\'', content: '\'\'' },
                { id:7,title: '年中工作总结各单位/部门需按要求完成', type: '收文', content: '\'\'' },
                { id:8,title: '进一步支持5G网络建设和产业发展十条措施的通知', type: '收文', content: '\'\'' },
                { id:9,title: '做好第51个世界地球日主题宣传活动周的通知', type: '发文', content: '\'\'' },
                { id:10,title: '疫情常态化的防疫措施', type: '发文', content: '\'\'' },
                
            ],
        }
    }
    render() {
        return <div className='grid-demo'>
            {this.state.myList.map(item => {
                return <dl className="search-list" key={item.id}>
                    <dt><a href="#"><span style={{ color: 'rgb(78, 110, 242)' }}><span
                        style={{ color: 'red' }}>关于</span>{item.title}</span></a><span
                            className="layui-badge layui-bg-gray">{item.type}</span></dt>
                    <dd>
                        {item.content}
                    </dd>
                    <dd style={{ display: 'block' }}><span>文号：</span> <span
                        style={{ textAlign: 'center', width: '32.5%' }}>拟稿：HJW</span> <span
                            style={{ textAlign: 'right' }}>2020-09-29</span></dd>
                </dl>
            })}

        </div>
    }
}

class MyButton extends React.Component{
    render(){
        return <button type="button" className="layui-btn layui-btn-normal" onClick={()=>{this.myfunction()}}>搜索</button>
    }
    myfunction(){
        ReactDOM.render(<MyList></MyList>, document.getElementById('showResult'))
    }
}



ReactDOM.render(<MyButton></MyButton>,document.getElementById('search'))
