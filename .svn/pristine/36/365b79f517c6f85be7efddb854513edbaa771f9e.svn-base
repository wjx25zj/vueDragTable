<template>
  <div class='about'>
    <div style="display: inline-block;">
      <ul
        style="   float:left; display:block;width: 73%; overflow: hidden;  padding: 0;
    margin: 0;"
        v-if="tmpTHead"
      >
        <li
          tabindex="1"
          @click="onKeyClick(key,value)"
          style="list-style: none;width:30%;float:left"
          v-for="(value,key) in tmpTHead.cell"
          :key='key'
        >
          {{key}}
        </li>
      </ul>
      <textarea
        style="float:left;width:25%;height:200px;"
        v-model="tmpValue"
      ></textarea>
      <button
        type="button"
        @click="change()"
      >change</button>
    </div>
    <div
      id="del-area"
      style="position: relative;width:100%;height:50px;background-color:red"
      @drop="tmpTable.dragDel($event)"
      @dragover='tmpTable.dragOver($event)'
    > </div>
    <ul>
      <li
        v-for='item in list'
        :key='item.title'
        draggable='true'
        v-on:dragstart='dragStart($event,item)'
      >
        {{item.title}}
      </li>
    </ul>
    <button @click="addTable()">添加表区</button>

    <!-- <h2 @dblclick="myTable.ondbClick(myTable)">
      <div v-if="myTable.showType == 0">{{myTable.name}}
      </div>
      <div v-if="myTable.showType == 1">
        <input @mouseover="myTable.getfocus($event)" 
        @blur="myTable.inputOnBlur(myTable)" v-model="myTable.name" />
      </div>
    </h2> -->
    <div style="width:100%">
      <p> <button @click="addMKBM()">addMKBM</button>

        <button @click="addZCLF()">addZCLF</button>
        <button @click="clearTmpTHead()">清除TmpTHead</button>
        <button @click="saveTable()">保存</button>
        <button @click="addSum()">添加合计</button>
        <button @click="addOneRowTbody()">添加一行空数据</button>
        <button @click="addOneCol()">添加一列空数据</button>

        <button @click="exportTbodyData()">输出数据</button>
        <button @click="addParent()">addParent</button>
        <button @click="merge()">merge</button></p>
      <p> <button @click="delOneRowCol('row')">删除一行</button>
        <button @click="delOneRowCol('col')">删除一列</button></p>

      <div class="table-list-left-div">

        <MyTable
          v-for="table in tableList"
          :key="table.id"
          :inputTable="table"
        ></MyTable>
      </div>
      <div class="table-list-right-div">
        <MyTable
          v-for="table in saveList"
          :key="table.id"
          :inputTable="table"
        ></MyTable>
      </div>
    </div>
    <button @click="addOne()">添加一行</button>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue } from "vue-property-decorator";
  import {
    TableCom,
    BaseTable,
    DragTransferDataInterface,
    DragStartDataInterface
  } from "../../lib/drag-table.umd.min";

  export default Vue.extend({
    components: {
      MyTable: TableCom as any
    },
    data() {
      return {
        a: 0,
        tmpKey: "",
        tmpValue: "",
        tableCount: 0,
        tmpTHead: null,
        tmpTable: null,
        tableList: [],
        saveList: [],
        list: [
          { title: "物料号", id: "wlh", canSum: false },
          { title: "单价", id: "dj", canSum: true },
          { title: "地方" },
          { title: "我的名字特别长" }
        ]
      };
    },
    methods: {
      clearTmpTHead() {
        this.tmpTHead = null;
      },
      delOneRowCol(type) {
        if (this.tmpTable && this.tmpTHead) {
          this.tmpTable.delOneRowCol(this.tmpTHead, type);
        }
      },
      addSum() {
        //  debugger;
        if (this.tmpTable && this.tmpTHead) {
          this.tmpTable.addSum(this.tmpTHead.type, this.tmpTHead.theadPosition);
        }
      },
      onTableChange(msg: any) {
        console.log(msg);
        if (msg.data.objectName.indexOf("Container") !== -1) {
          console.log(
            msg.data.object.position.colStr + msg.data.object.position.rowStr
          );
        }

        switch (msg.ev_type) {
          case "click":
            this.tmpTHead = msg.data.object;
            this.tmpTable = this.tmpTHead.$rootTable;

            if (this.tmpTHead.showType === 2) {
              this.addbuttonClick(this.tmpTable);
            }

            break;
          case "rightClick":
            document.oncontextmenu = () => {
              return false;
            };
            break;
          default:
        }
      },
      addbuttonClick(cell) {
        const tmpTHead = cell.$parent;
        const tmpTable = tmpTHead.$rootTable;
        const parentPosition = tmpTHead.position.slice(
          0,
          tmpTHead.position.length - 1
        );
        const insertIndex = tmpTHead.position[tmpTHead.position.length - 1];
        const newRow = {
          cell: {
            value: insertIndex + 1 + "、"
          },
          id: "row" + (insertIndex + 1)
        };
        tmpTable.theadAdd({
          type: tmpTHead.type,
          sourceContainerData: newRow,
          targetParentPosition: parentPosition,
          insertIndex
        });
        tmpTable.render();
      },
      saveTable() {
        this.saveList = [];
        this.tableList.forEach((table) => {
          let tmpSaveJson = table.serialize();
          console.log(tmpSaveJson);
          for (const key in tmpSaveJson) {
            if (tmpSaveJson.hasOwnProperty(key)) {
              JSON.stringify(tmpSaveJson[key]);
              console.log(key);
            }
          }
          tmpSaveJson = JSON.parse(JSON.stringify(tmpSaveJson));
          const tmpTable: BaseTable = new BaseTable(tmpSaveJson.tableId);
          tmpTable.deserialize(tmpSaveJson);
          tmpTable.setDefaultConfig({
            topThead: {
              readonly: true,
              draggable: false
            },
            leftThead: {
              readonly: true,
              draggable: false
            }
          });

          tmpTable.tableSubject.subscribe(this.onTableChange, this);
          this.saveList.push(tmpTable);
        });
      },
      dragStart(ev: any, item: any) {
        this.a++;
        const addData = {
          operationType: "add",
          containerData: {
            cell: {
              value: item.title + this.a,
              data: item
            },
           
              canSum: item.canSum
            ,
            test: 111,
            id: item.id + this.a
          }
        };
        console.log(addData);
        ev.dataTransfer.setData(
          "dragStartData",
          JSON.stringify(addData)
        );
      },
      addTable() {
        // debugger;
        this.tableCount++;
        const tmpTable: BaseTable = new BaseTable("表" + this.tableCount);
        tmpTable.position.table = this.tableCount - 1;
        tmpTable.tableSubject.subscribe(this.onTableChange, this);

        const datawlh = {
          cell: {
            value: "物料号"
          },
          tbodyConfig: {
            weight: {
              cell: {
                displayClass: {
                  normal: 100,
                  dbclick: 100
                }
              }
            },
            container: {
              cell: {
                displayClass: {
                  normal: {
                    displayType: "text"
                  },
                  dbclick: {
                    displayType: "select",
                    select: {
                      optionList: [
                        {
                          text: "html",
                          value: "1"
                        },
                        {
                          text: "js",
                          value: "2"
                        }
                      ]
                    }
                  }
                }
              }
            }
          },
          id: "wlh"
        };
        tmpTable.theadAdd({
          type: "top",
          sourceContainerData: datawlh,
          targetParentPosition: []
        });

        const datawdj = {
          cell: {
            value: "单价"
          },
          
            canSum: true
          ,
          id: "dj"
        };
        tmpTable.theadAdd({
          type: "top",
          sourceContainerData: datawdj,
          targetParentPosition: []
        });

        const ZDYData = {
          cell: {
            value: "自定义表区"
          },
          id: "zdy"
        };

        tmpTable.theadAdd({
          type: "left",
          sourceContainerData: ZDYData,
          targetParentPosition: []
        });

        const data1 = {
          cell: {
            value: "1、"
          },
          id: "row1"
        };

        const data2 = {
          cell: {
            displayClass: {
              normal: {
                displayType: "button"
              }
            },

            button: {
              text: 123,
              click: this.addbuttonClick
            },
            value: " + "
          },
          tbodyConfig: {
            weight: 3,
            dbclick: {
              displayType: "text"
            }
          },
          id: "+btn",
          config: {
            readonly: true
          }
        };
        const select = {
          showType: "select",
          cell: {
            value: "test"
          },
          id: "select",
          config: {
            readonly: true
          }
        };

        tmpTable.theadAdd({
          type: "left",
          sourceContainerData: data1,
          targetParentPosition: [0]
        });
        // tmpTable.theadAdd({
        //   type: "left",
        //   sourceContainerData: data2,
        //   targetParentPosition: [0]
        // });
        tmpTable.render();
        this.tableList.push(tmpTable);
        this.tmpTable = tmpTable;
      },
      addOneRowTbody() {
        const data = null;
        const targetPosition = (this.tmpTHead || {}).theadPosition;
        this.tmpTable.addOneRow(data, undefined, targetPosition);
        this.tmpTable.render();
      },
      addOneCol() {
        const data = null;
        const targetPosition = (this.tmpTHead || {}).theadPosition;
        this.tmpTable.addOneCol(data, undefined, targetPosition);
        this.tmpTable.render();
      },
      exportTbodyData() {
        this.tmpTable.getTbodyData();
      },
      addParent() {
        this.tmpTable.addParent({
          cell: {
            value: "新建单元格",
            data: ""
          },
          showType: 0
        });
      },
      merge() {
        this.tmpTable.merge();
      },
      onKeyClick(key, value) {
        this.tmpKey = key;
        this.tmpValue = JSON.stringify(value);
      },
      change() {
        const value = JSON.parse(this.tmpValue);
        const container = this.tmpTable.getContainer(
          this.tmpTHead.type,
          this.tmpTHead.position
        );
        container.cell[this.tmpKey] = value;
      },
      addMKBM() {
        this.tableCount++;
        const tmpTable: BaseTable = new BaseTable("表" + this.tableCount);
        tmpTable.tableSubject.subscribe(this.onTableChange, this);
        this.tmpTable = tmpTable;
        const theadList = [
          "模块编码",
          "模块专用号",
          "模块描述",
          "模块属性",
          "资源量",
          "工厂",
          "高峰月产能",
          "要求供货时间",
          "价格单位",
          "采购单位",
          "货币",
          "供应商预测日产能",
          "计算单价",
          "终投单价"
        ];
        theadList.forEach((title) => {
      
          const addData = {
            cell: {
              value: title
            },
            tbodyConfig: {
              weight: {
                cell: {
                  value: title === "模块编码" ? 101 : 100,
                  displayClass: {
                    normal: 100,
                    dbclick: 100
                  }
                }
              },
              container: {
                cell: {
                  verification: {
                    hasVerification: title === "模块编码" ? true : false,
                    vType: "time" //
                  },
                  value: title === "终投单价" ? "=L{sr}+M{sr}" : undefined,
                  displayClass: {
                    normal: {
                      displayType: "text"
                    },
                    dbclick: {
                      displayType: "input",
                      select: {
                        optionList: [
                          {
                            text: "html",
                            value: "1"
                          },
                          {
                            text: "js",
                            value: "2"
                          }
                        ]
                      }
                    }
                  }
                }
              }
            },
            style: {
              background: "#1fd8f4"
            },
            id: title
          };
          tmpTable.theadAdd({
            type: "top",
            sourceContainerData: addData,
            targetParentPosition: []
          });
        });
        tmpTable.render();
        //  tmpTable.initTable(5);
        this.addOneRowTbody();
        this.tableList.push(tmpTable);
      },
      addZCLF() {
        const theadList = [
          "物料号(编码）",
          "物料描述",
          "规格（请详细描述主材料属性参数）",
          "二三级物料分类",
          "自制外购",
          "注塑件克重",
          "二三级供应商名称",
          "损耗率（%）",
          "订单单位  （采购单位）",
          "耗用数量（单耗）",
          "单价",
          "成本"
        ];
        theadList.forEach((title) => {
          const addData = {
            cell: {
              value: title
            },
          
              canSum: (["成本"].indexOf(title) !== -1)
            ,

            id: title
          };
          const tmpTable: BaseTable = this.tmpTable;
        
          // tmpTable.theadAdd({
          //   type: "top",
          //   sourceContainerData: addData,
          //   targetParentPosition: []
          // });
        });
       
        this.tmpTable.render();
        // this.addOneRowTbody();
        // this.tableList.push(tmpTable);
      }
    },

    created() {
      // this.addTable();
      this.addMKBM();
    }
  });
</script>

<style>
  .table-list-left-div {
    position: relative;
    width: 100%;
    float: left;
    /* margin: 0 auto; */
  }

  .table-list-right-div {
    position: relative;
    margin-top: 20px;
    width: 199%;
    float: left;
    /* margin: 0 auto; */
  }
  
  @import "../../lib/drag-table.css";
 
</style>

