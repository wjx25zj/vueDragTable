<template>
  <div class='about'>
    <div style="display: inline-block;">
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

    <div style="width:100%">
      <div class="table-list-left-div">
        <p>
          <button @click="addMKBM()">addMKBM</button>
          <button @click="save()">保存</button>
          <button @click="addSum()">添加合计</button>
          <button @click="addOneRowTbody()">添加一行空数据</button>
          <button @click="addOneCol()">添加一列空数据</button>
          <button @click="addleftThead()">添加左表头</button>
          <button @click="exportTbodyData()">输出数据</button>
          <button @click="addParent()">addParent</button>
          <button @click="merge()">merge</button>
          <button @click="addSimpleTable()">addSimpleTable</button>
          <button @click="deletTable()">删除table</button>
        </p>

        <TableCom
          v-for="table in dragTable.tableList"
          :key="table.id"
          :inputTable="table"
        ></TableCom>
      </div>
      <div class="table-list-right-div">
        <TableCom
          v-for="table in dragTable2.tableList"
          :key="table.id"
          :inputTable="table"
        ></TableCom>
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
  } from "../../packages/drag-table2.0/index";
  import { DragTable } from "../../packages/drag-table2.0/DragTable";
  import { BaseTableInterface } from "../../packages/drag-table2.0/interface/viewModule/table/BaseTable";
  export default Vue.extend({
    components: {
      TableCom
    },
    data() {
      return {
        a: 0,
        dragTable: new DragTable("test"),
        dragTable2: new DragTable("save"),
        tmpValue: {},
        tmpTable: new BaseTable("def", {}),
        tmpTHead: null,
        tableCount: 0,
        list: [
          { title: "物料号", id: "wlh", canSum: false },
          { title: "单价", id: "dj", canSum: true },
          { title: "地方" },
          { title: "我的名字特别长" }
        ]
      };
    },
    methods: {
      deletTable() {
        const dragTable: DragTable = this.dragTable;
        dragTable.deleteTable(0);
      },
      addTable() {
        // debugger;
        const dragTable: DragTable = this.dragTable;
        this.tableCount++;
        const table: BaseTableInterface = dragTable.createTable({
          id: "表" + this.tableCount
        });
        dragTable.addTable(table);
        table.$subject.subscribe(this.onTableChange, this);
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
                    displayType: "select",
                    select: {
                      optionList: [
                        {
                          text: "html2",
                          value: "1"
                        },
                        {
                          text: "js",
                          value: "2"
                        }
                      ]
                    }
                  },
                  dbclick: {
                    displayType: "select",
                    select: {
                      optionList: [
                        {
                          text: "html2",
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
        table.theadAdd({
          type: "top",
          sourceContainerData: datawlh,
          targetParentPosition: []
        });

        const datawdj = {
          cell: {
            value: "单价"
          },
          // childrenShow: false,
          canSum: true,

          id: "dj"
        };
        table.theadAdd({
          type: "top",
          sourceContainerData: datawdj,
          targetParentPosition: []
        });
        const datawdj2 = {
          cell: {
            value: "单价2"
          },
          // childrenShow: false,
          canSum: true,

          id: "dj2"
        };
        table.theadAdd({
          type: "top",
          sourceContainerData: datawdj2,
          targetParentPosition: []
        });

        const ZDYData = {
          cell: {
            value: "自定义表区"
          },
          // childrenShow: false,
          id: "zdy"
        };

        table.theadAdd({
          type: "left",
          sourceContainerData: ZDYData,
          targetParentPosition: []
        });

        const data1 = {
          cell: {
            value: "1、"
          },
          style: {
            // display:'none'
          },
          id: "row1"
        };

        const data2 = {
          cell: {
            value: "2、"
          },
          tbodyConfig: {
            weight: 3,
            dbclick: {
              displayType: "text"
            }
          },
          style: {
            // display:'none'
          },
          id: "row2",
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

        table.theadAdd({
          type: "left",
          sourceContainerData: data1,
          targetParentPosition: [0]
        });

        dragTable.render();
      },
      onTableChange(msg: any) {
        if (msg.data.objectName.indexOf("Container") !== -1) {
          console.log(
            msg.data.object.position.colStr + msg.data.object.position.rowStr
          );
        }

        switch (msg.ev_type) {
          case "click":
            this.tmpTHead = msg.data.object;
            this.tmpTable = this.tmpTHead.$rootTable;
            console.log(msg);
            break;
          case "rightClick":
            document.oncontextmenu = () => {
              return false;
            };
            break;
          default:
        }
      },
      addSum() {
        //  debugger;
        if (this.tmpTable && this.tmpTHead) {
          this.tmpTable.addSum(this.tmpTHead.type, this.tmpTHead.theadPosition);
        }
      },
      addSimpleTable() {},
      addleftThead() {
        const tmpTable: BaseTable = this.tmpTable;
        tmpTable.theadAdd({
          type: "left",
          targetParentPosition: this.tmpTHead ? this.tmpTHead.theadPosition : [],
          sourceContainerData: {
            cell: {
              value: "我是左表头"
            }
          }
        });
        tmpTable.render();
      },
      addOneRowTbody() {
        if (this.tmpTable) {
        }
      },
      addOneCol() {},
      addMKBM() {
        this.tableCount++;
        const dragTable: DragTable = this.dragTable;
        const tmpTable: BaseTable = dragTable.createTable({
          id: "表" + this.tableCount,
          config: {
            tableGroupId: "haier",
            debugLevel: 0,
            canResizeWidth: true
          }
        });
        tmpTable.$subject.subscribe(this.onTableChange, this);
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
        theadList.forEach(title => {
          const addData = {
            cell: {
              value: title,
              title: title === "模块编码" ? "123" : ""
            },
            canSum: title === "终投单价" ? true : false,
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
                  verification: {
                    hasVerification: title === "模块编码" ? true : false,
                    vTypes: ["decimal%3"] //
                  },
                  value:
                    title === "终投单价"
                      ? "= {sc-2}{sr} + {sc -1}{sr}"
                      : undefined,
                  displayClass: {
                    normal: {
                      displayType: "text",
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
              background: "#1fd8f4",
              width: "100px"
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
        this.addOneRowTbody();
        // tmpTable.setTbodyData([]);
      },
      dragStart(ev: any, item: any) {
        this.a++;
        const data = {
          operationType: "add",
          containerData: {
            cell: {
              value: item.title + this.a,
              data: item
            },

            canSum: item.canSum,
            test: 111,
            id: item.id + this.a
          }
        };
        console.log(data);
        ev.dataTransfer.setData("dragStartData", JSON.stringify(data));
      },
      save() {
        // debugger;
        const dragTable: DragTable = this.dragTable;
        const dragTable2: DragTable = this.dragTable2;
        const jsonList = dragTable.serialize();
        dragTable2.deserialize(jsonList);
        dragTable2.render();
      }
    },

    created() {
      this.addTable();
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
    width: 100%;
    float: left;
    /* margin: 0 auto; */
  }
</style>

