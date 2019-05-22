##  0.2.16 :2019.5.20
- bugFix
  - 修复当通过addReplace方法添加带有treeContainer的容器时，不能添加孩子bug
  - 修改dragstartData中的withchilren不能传入dropHand中;
  - 修改getDataByWeight中 权重bug
  
  
##  0.2.14 :2019.3.25
- new
  - 增加tbody垃圾清理机制，暂时只是在表格保存时自动清理。
- change 
  - 2019/4/2因为时间不够 逻辑未明确 所以注释该语句，解决$ICObject所存数据未及时更新bug，但产生的后果是，公式中单元格位置变动时，不能自动更新公式 
  
##  0.2.13 :2019.3.20
- new
  - 增加dragOver,dragLeave事件回调处理，当返回'cancel'时，取消默认dragover,dragLeave事件；

##  0.2.12 :2019.3.18
- new
  - 增加 drop事件回调处理，当返回'cancel'时，取消用户拖拽操作（可进行自定义添加事件）；

##  0.2.11 :2019.3.14
- new
  - 增加 'dragLeave' | 'dragEnter' | 'dragEnd' |事件回调
- change
  - 简化View层逻辑

##  0.2.10 :2019.3.13
- new
  - BaseCell里增加 nullReplace 默认为''，用于替换当value为null、''、undefined的情况
  - 增加 dragOver 事件回调
- bugFix
  - 修改BaseTbody类中setData方法，bug导致SetTbodyData后公式计算错误;

##  0.2.9 :2019.3.5
- change
  - 修改数据存储导出结构


##  0.2.7 :2019.3.1
- bugFix
  - 修改 TopLeltCell 宽高计算bug

##  0.2.6 :2019.2.28
- bugFix
  - 修改（修改indexContainer的id属性为renderId）产生显示bug
  
##  0.2.5 :2019.2.28
- change
  - 修改indexContainer的id属性为renderId,原有Id改为对应的行列号
  - 修改TbodyContainer中renderByThead属性的更新机制
- bugFix
  - 按住Ctrl选择单元格 不能从下往上选
  - 多拽到单元格上方样式错位bug


##  0.2.4 :2019.2.27
- change
  - 修改DragTable类中的setDefaultConfig方法名为setConfig
- bugFix
  - 按住Ctrl选择单元格 重复bug
  - 修改treeContainer的padding计算bug
  - 修改表头blur时间报错bug
  - 修复dragEnd的Bug


##  0.2.3 :2019.2.21
- bugFix
  - 恢复拖动到单元格上方无反应的bug
  - 修改selectBox会遮挡其他单元格bug，将最外层div的display属性更改为contents,
- change
  - 更改InnerContainer类为TreeContainer,相关使用修改查看官网实例
  - SubjectMsgInterface中加入render:boolean,用于替换原来RenderEvent:string[]作用(判断是否需要渲染)
  - 去除TreeContainer中无关属性
  - 修改表头纵表渲染方式（左表）
- new
  - 加入TheadContainer中加入selfContainers:SelfContainer[],可以自定义加入按钮
  - 表头中加入hideType:'visible' | 'hideChildrenHeight' | 'hideAll' | 'hideSelf'属性,用于控制表头显示隐藏
    - 'visible' :可见
    - 'hideChildrenHeight': 仅仅隐藏孩子节点高度
    - 'hideAll': 隐藏该单元格及孩子节点
    - 'hideSelf':仅仅隐藏该单元格
  - 表头加入显示所有单元格的方法1、临时改变 2、永久改变
     
##  0.2.2 :2019.2.15
- bugFix
  - 修复树形展开bug
- new
  - 加入默认展开
  - 异步数据加载
  
##  0.2.1 :2019.2.12
- bugFix
  - 复杂左表头显示bug
  - 单元格默认宽度统一
- change
  - 修改dragstart dragover等拖拽事件；
  - 调整架构
##  0.2.0
- new
  - 透露接口DragTable.ts代替index.ts
  - 添加树展开功能
- bugFix
  - 若
