layui.use(['tree','laypage'], function () {
    var tree = layui.tree;
    var laypage = layui.laypage;
    //渲染
    var inst1 = tree.render({
        elem: '#test1', //绑定元素
        data: [{
            title: '按分类统计(15件)',//一级菜单
            children: [{
                title: '行政发文', //二级菜单
            },
            {
                title: '公司收文'
            },
            {
                title: '部门发文'
            },
            {
                title: '部门签报'
            },
            {
                title: '会议纪要'
            },
            {
                title: '协同工作'
            },
            {
                title: '部门收文'
            },
            {
                title: '会议通知'
            }
            ]
        }],
        accordion: true
    });
    laypage.render({
        elem: 'laypage' ,//注意，这里的 test1 是 ID，不用加 # 号 
        count: 10 ,//数据总数，从服务端得到
        limit: 8,
        theme:'#1E9FFF'
    });
});