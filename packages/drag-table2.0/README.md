# 2018/9/28
1、添加双击编辑表头
2、添加样式：点击A、B、C 表头样式改变
3、添加选中两个表头单元格 添加父级功能
4、将span1、span2从container属性中删除、移动到cell属性里
5、container 派生 出TbodyContainer 与 TheadContainer
6、baseTableConfig中加入topleftShowTableName 控制左上角是否显示表名
# 2018/9/29
1、单元格宽度自适应rowspan，超出长度省略号隐藏
2、添加拖动删除
3、解决选中border bug，  原因 /* border-collapse: collapse; */ 导致单元边框合二为一
4、添加父级功能bug修复
5、取消Tbody 和Thead的抽象类属性。
6、修改div在th中比例，修改padding、修改input大小
7、修改表格头样式#
8、抽离出table.css
9、interface文件夹 里加入TheadContainerInterface，DragStartData中的containerData修改为  TheadContainerInterface类型
10、修复dragover 边框显示bug
11、添加自动区分上侧表头 和 左侧表头功能，将view层与thead层分离。

# 2918/10/8
1、单个单元格粘贴功能
2、修复移动不能携带子容器的bug
3、修改clone函数、增加对象中function的拷贝
4、选择行列标签 获取表头叶子节点
5、添加表名修改编辑功能。
6、表内容添加行、列功能实现。
7、修改TheadContainer.ts中的resize方法，添加入参leafIndexList,用来记录叶子节点顺序，方便今后点击行列标签选中后映射叶子节点，以及拖拉控制单元格宽度
8、baseThead中加入leafIndexList属性，配合修改7使用
8、添加对表内容的编辑功能

# 2918/10/9
1、TheadContainer 修改calWidth :取消入参，改为内部container就是this
2、将width属性从cell的style中移除，添加到container的style属性中 并加入内边框属性
3、￥￥￥添加鼠标拖拽控制单元格宽度功能
4、将Style.ts中方法改为静态方法
5、修复上册表头固定缺少部分单元格bug
6、遗留问题左侧表头无法控制宽度，如果将宽度与行列标识联系到一起 是问题关键。目前是有ABCD标识的宽度影响下面单元格的宽度，但存在bug。
7、修改drop dragover中对positionCheck的判断 false则不进行位置判断（目前用于区分ABCD与表头的拖拽事件）
8、修改BaseCell构造函数 入参从对象{content:'',data:{}},改为content，后续加入setCellData函数用于 添加Cell中的data
9、在resize函数里 加入了控制width （px）的语句，用于控制横表头宽度 calWidth函数目前只在BaseTable里使用,后续考虑是否需要去除
10、重新命名baseTable下函数名规范
11、修改部分currentTarget target srcElement内容
12、BaseConfig里加入 开关控制
13、baseTbody里加入changeOneColStyle控制一列单元格style
14、colNumber与rowNumber数组内容改变，改为TheadContainer[]

# 2918/10/10
1、添加移动到单元格内部（覆盖功能）
2、DragStartData.ts 里 isNew属性 改为operationType 目前分为:'add'、'addreplace'、'move'、'movereplace'，分    别代表新建、新建覆盖、移动、移动并覆盖
3、修复拖动控制表格宽度点击两次bug 原因是失去焦点事件里多掉一次render();
4、在resizeTable里 将补充的空白表头也加入theadEntity中，支撑覆盖功能；
5、新添加IndexContainer 用于行列标识表头容器。
6、左侧表格拖拽宽度完成 THeadContainer里添加changeWidthByStandard方法用来支撑

# 2918/10/11
1、修改添加行bug 误将bodyWidth写为bodyHeight
2、user-select:none; 影响了直接粘贴功能


# 2918/11/13
1、添加多表区
2、BaseTable类中加入tableSubject属性，用于反馈点击事件，今后完善
3、BaseTable类中加入tableId属性，记录table标识
4、BaseTable类中加入baseConfig属性，记录初始config
5、BaseTable加入属性 protected style = {
        scrollTop: 0,
        scrollLeft: 0,
        mainTable:{
            overflow: this.config.isOverflow ? 'auto' : 'visible',
            width:!this.config.isOverflow ? 'auto' : '1000px',
            height:!this.config.isOverflow ? 'auto' : '500px',
        },
        topTable:{
            overflow: this.config.isOverflow ? 'hidden' : 'visible',
        }
        
    };
    控制 是否设置宽度隐藏
6、设计 各个类中config用于记录配置信息 暂时只有BaseTable  
     protected config = {
        isShowColIndex: false,
        isShowRowIndex: false,
        isOverflow: false,
        canResizeWidth : false,
    };
    控制是否显示1、2、34、和ABCD
7、BaseTable初始化不设定 宽高，抽离出initTbody和initThead
8、BaseTable 加入addTheadManual方法 手动添加表头
9、thead类里加入showType = 2 为button；


# 2918/11/15
1、移除DefaultTable.ts、Baseconfig.ts文件 化简结构 
2、BaseTable.ts 重新调整参数 函数位置 并添加注释
3、移除有bug的行列选中效果
4、序列化与反序列化


# 2918/11/16
1、Container.js中修改setConfig方法
2、Container.ts 将export方法与clone方法融合 改名为clone，去除原有方法，修改原export对于数组拷贝的bug(使得拷贝无效)

# 2918/11/20
1、将BaseCell中的data从数组any[]改回any对象，并修改setData方法
2、在TbodyContainer.ts中加入renderTBodyContainer方法 用来渲染tbodycontainer内容
3、在BaseTbody中加入    public topLeafList: BaseThead[] = new Array();
                       public leftLeafList: BaseThead[] = new Array();
                       用于将表头信息 于 表内容信息建立联系
4、BaseTable的processThead函数里将move方法对于原来container的clone去掉



# 2918/11/21
1、构造出一种Tbody
  public data: any = {
            left1:[{
                top1:{
                    cell:{
                        content:'123'
                    }
                },
                 top2:{
                    cell:{
                        content:'123'
                    }
                },
                }
        ],
        left2:[
            {
                top1:{
                    cell:{
                        content:'123'
                    }
                }，
                 top2:{
                    cell:{
                        content:'123'
                    }
                },
            }
        ]
    };
其主要思想是 数据行列其实是无序的key-val，另外通过两个数组（上册数组、下册数组）来控制顺序，但有以下几点没有仔细想通
a)当一开始没有表头时、以及thead少tbody时，如何进行数据绑定
b)当拖拽出复杂表头时，原来对应A的tbody如何转换为B例如下
  |A|C|
  |B| |
  

  # 2018/11/22
  -1、将container中的name属性统一改为type属性 目前主要取值为'top' 'left' ，程序中可能仍有残留，今后慢慢处理
  0、将今日版本命名为drag-table2.0与之前版本改动较大 所以另起版本，保留之前中间版本。
## 1、将所有@去除 保证ts的通用性
## 2、重构BaseTbody.ts 实现 2018/11/11想法
- tbody中的行列变化主要由传入的   topLeafList leftLeafList 决定。
- 重写了render、convert方法，实现数据存储是一套(data 双对象)、数据展现是一套(bodyData二维数组)
-重写了getContainer函数

## 3、对于BaseTable的初始化加入调整
## 4、BaseTable中Render函数修改
- resiztTable函数中 将thead与tbody比较 改为 colindexList rowIndexList和Thead比较
- 加入initTable函数作为@临时初始化
## 5、将position属性纳入到container一层
## 6、修改BaseThead方法resize 其原来入参leafIndexList不在由外界传入，而采用自己this.leafIndexList
## 7、在BaseTable的defaultConfig中
- table对象里加入 控制上、左表头的标识
            hasTopThead: true, // 是否有上表头
            hasLeftThead: false, // 是否有左侧表头
## 8、在BaseTable的style中
- 添加:leftTable控制 左侧固定表 滚动条状态
## 9、修改一处bug myTable.config.isShowColIndex && myTable.config.isShowRowIndex 只有同时显示行列index时，才出现左上角的小空白

----
# 2018/11/23
## 1、 BaseTable
- 在processThead函数中对于add、add-replace、move-replace中container未提供id的情况做出补偿
    ```
        if (!tmpContainer.id) {
            const timestamp = (new Date()).valueOf();
            tmpContainer.id = 'user_' + timestamp;****
        }
    ```
- initTable方法 只初始化宽度、默认高度为1
  
## 2、<font color="red"> 新增IndexThead</font> 
- 用于上、左序列表头的管理，将原来简单数组IndexContainer[]改为IndexThead 方便管理
## 3、BaseTbody
- 重写 setContainerData 方法 对于bodyData特殊处理
- 重写 createContain 方法，入参有dragstartData改为containerData?
- 重写clone方法 对于bodyData特出处理
- 添加 output1 output2 分别输出不同格式
- 修改render中bug，此前没有去数组中[0]个
## 4、小修改
- css文件中.my-table .rowNumber 中去除 /* cursor: move; */
-  TheadContainerInterface.ts中加入 id属性
-  IndexContainer.ts 重写了style属性 并加入不可选中属性   userSelect: 'none',
-  将TheadContainer中的 setContainerData函数中的
    ```
    if (containerData.hasOwnProperty(key))
    修改为
    if (this.hasOwnProperty(key))
    避免外来参数改变原来结构体参数
    ``` 
- TbodyContainer.ts setContainerData函数中的对于bodyData的处理删除、在BaseTbody里处理

# 2018/11/26
## 完成 Tbody代码重构，实现任意操作下都能建立并保持表头与表内容的联系，接下来可以实现计算公式在表格中的计算。
## TheadContainer.ts
- 修改addchild函数 对其中child.id为空的自动补充guid
- 修改resize函数中 对于children时的side1 side2重置,通过this.config.isRootThead决定，解决BUG:将表头删除赶紧时side1不能重置为0
- setContainerData中将key为children 情况中直接new Theadcontainer()改为 this.createContain(item),修复丢失$root的bug
  
## BaseTable.ts
- 去除processThead中自动填充id的方法,入参insertIndex可以为undefined（因为懒）
- 

## Container.ts
- config入加入 isRootParent side2同时为0是置true
- 加入属性canSum 记录是否为合计

## TableCom.vue
- 在html里 每个table v-if条件加入了 两条限制条件
```
myTable.rowNumber[0] && myTable.colNumber[0]
```

# 2018/11/27

## Basetbody.ts
- 修改getContainer函数 之前取值逻辑错误
## BaseThead.ts
- 删除addParent方法 

## TheadContainer.ts
- 去除ContainerAdd方法 与Addchild方法重复

## BaseTable.ts
- 修改processThead方法 入参改为
  ```
    theadType: string,
    operationType: string,
    targetParentPostion: number[],
    sourceContainer: TheadContainer,
    operationIndex?: number
  ```
- processThead中 修改operationType 为'move-replace'时，删除原有单元格
- processThead中 添加 operationType 为'delete'的删除操作
- 修改addTheadManual 入参为
    ```
    theadType: string,
    targetParentPostion: number[],
    data?: DragStartData,
    insertIndex?: number
    ```


# 2018/11/29
## 功能
- 支持用户自定数据
- 添加selet input button输入
- 对于$root $parent的clone加入keep（保持原样）功能，避免弹出th缺少root parent信息
## Container
- 添加用户自定义数据区域userData

## BaeCell
- 添加用户自定义数据区域userData(替换原来data)

## BaseThead
- 当this.dragStartData不为null时 不从trandata里转出dragStartData

## utils
- 修改baseClone 入参改为 排除数组exclude:string[] 、保持原样数组 keep:string[]、是否拷贝函数 withFunction:boolean
- 添加myObejctclone用于container和BaseCell的clone


# 2018/12/4
## 功能
- 可以从BaseTable直接获取单元格容器
- 简单公式
- 
##新增
- BaseTable里加入获取源单元格方法getContainer(type: string, containerPostion: any[]);
- interface中加入SubjectMsgInterface用于规范 信息传输
- showDoc上增加Subject文档
- BaseCell里添加Value属性(用于存储数据，比如公式，content还是用于显示)、添加render函数
- 增加简单公式

## 修改
- BaseThead 将theadChange 改为 subjectSend
- 将BaseTbody中inputOnBlur 分别加入到Theadcontainer和TbodyConatiner里
- 将Basecell中content作为展示,
- 将click dbclick inputblur 等操作从container层移动到 cell层
- 将 控制cell显示type的操作以及属性从container层移动到cell层
- 在Theadcontainer和BaseTbody中加入对tbody中cell的Render

# 2018/12/5
## 新增 
- 新增 Formula.ts类 处理公式计算 包括加减乘除 括号运算
- TbodyContainer类中 添加onMouseDown方法 用于 阻止(公式选取时)失去焦点
- 对td增加选中select的style
- BaseTbody中添加方法 getContainerById getContainer

## 修改
- BaseTbody 中将原来getContainer 改名为getContainerById 
  创建getContainer 是通过( M2 B1) 这种方法查询获取
  并且查询不到时返回null
- BaseTbody中对于Tbodycontainer的id和position定义作调整，暂时为position[M,2],id  为[id,id]
- BaeTable 中 afterContainerClick里加入 （输入公式时） 点击单元格输入公式的方法


# 2018/12/6
## 新增 
- 新增selectBox类 用于记录选中单元格事件 TableCom中添加4个div显示边框

## 修改
- BaseTable 删除SelectThSet 改为SelectBox
- 增加点击事件 change click drop drop-del 

# 2018/12/6
## 修改
- 调整vue组件html对样式的绑定
- 行列序号type从top/left改为top-index/left-index
- Container的type种类添加left-index和top-index
- 在render里添加对selectBoxSet的清除；
- 
## 新增 
- 右键点击事件
- 整行 整列删除功能
- IndexContainer中加入 $theadContainer 记录记录theadContainer
- 对所有container加入onmousedown事件 
- container里加入clearCell清除单元格功能
- TbodyContainer里加入indexNumPosition记录行列标识的单元格位置


## 移除
- 移除BaseTbody中的selectBoxList
- 
##遗留问题
- 删除复杂表头的一行时 TheadContainer还有bug ，只删除叶子节点，未删除整行
- 删除最后一个TheadContainer时，indexcontainer未被清空

# 2018/12/7
## 修改
- 修改view TableCom.vue 将v-modle="td/th.cell.value" 改为 v-modle="td/th.cell.value"
  
## 添加
- TbodyContainer里添加weight赋值方法

# 2018/12/7
## 添加
- 添加拖拽到单元格上边是触发操作
- Basecell里加入$ICObject，用于单元格与行列标识一一对应;

#2018/12/17
##修改
- 将Container.ts config中的isRootThead 移动到根属性里
## 新增
- 通过表头加入公式
- BaseCell里doVerify验证 支持日期、数字、小数

#2018/12/18
##修改
- 修改utils中objectSet 融合状态union下的bug
- 初级跨表区验证

#2018/12/19
##修改
- BaseCell render()方法中对于公式中提及到的Container进行先render再计算，解决通知延时问题，并且加入循环引用判断机制防止单元格循环引用
- Basecell onbulr onchange等结束型事件发生时，触发BaseTable.render()前，保证触发自身render（），保证数据同步性；




#2018/12/24

## vue3-drag-table 0.1.1
- 合计功能
- 跨表区公式
- 行列删除
- 数据校验
- 输入支持select、input


## vue3-drag-table 0.1.2
- 对单元格宽度加入了自适应调整
- 修改tb根据weight渲染时的bug
- 修改getContainer
- 修改interface接口说明文件

## vue3-drag-table 0.1.3
- 修复bug，当公式中存在空格是 计算错误
- 修改行列号样式显示异常（不显示ABCD、12345）
- 修改配置文件bug
- 修改不能设置单元格宽度、高度的bug
- 修改select有时不能自定义数据问题


## vue3-drag-table 0.1.4
- 修改调整行列宽度时，显示bug；
- Cell里不引用Basetable



