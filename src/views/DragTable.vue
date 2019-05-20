<template>
  <div class='about'>
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
          <button @click="addOneRow()">添加一行空数据</button>
          <button @click="addOneCol()">添加一列空数据</button>
          <button @click="exportTbodyData()">输出数据</button>
          <button @click="addParent()">addParent</button>
          <button @click="merge()">merge</button>
          <button @click="addTableLeft()">addTableLeft</button>
          <button @click="deletTable()">删除table</button>
          <button @click="setContainerHideType('hideSelf')">hideSelf</button>
          <button @click="setContainerHideType('hideChildrenHeight')">hideChildrenHeight</button>
          <button @click="setContainerHideType('visible')">visible</button>
          <button @click="showAll()">showAll</button>

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
    DragTransferDataInterface,
    BaseTable,
    TheadContainer,
    DragTable,
    DragStartDataInterface
  } from "../../packages/drag-table2.0/index";

  import { setTimeout } from "timers";
  import { defaultCoreCipherList } from "constants";
  import { debug } from "util";
  // import { DragTable } from "../../packages/drag-table2.0/DragTable";
  export default Vue.extend({
    components: {
      TableCom
    },
    data() {
      return {
        lastEv: null,
        a: 0,
        dragTable: new DragTable("test"),
        dragTable2: new DragTable("save"),
        tmpValue: {},
        tmpTable: null,
        tmpTHead: null,
        tableCount: 0,
        testList: [],
        list: [
          { title: "物料号", id: "wlh", canSum: false },
          { title: "单价", id: "dj", canSum: true },
          { title: "地方" },
          { title: "我的名字特别长" }
        ]
      };
    },
    methods: {
      mdTest(container: any) {},
      merge() {
        this.tmpTable.merge();
      },
      addParent() {
        this.tmpTable.addParent();
      },
      setContainerHideType(type) {
        // debugger;
        if (this.tmpTable && this.tmpTHead) {
          const container: TheadContainer = this.tmpTHead.getContainerByTheadPosition(
            this.tmpTHead.theadPosition
          );
          container.setContainerData({
            hideType: type
          });
        }
        this.dragTable.render();
      },
      showAll() {
        const table: BaseTable = this.tmpTable;
        const hideMap = table.getAllHideContainer();
        hideMap.forEach((th: any, key: any) => {
          th.setContainerData({
            hideType: "visible"
          });
        });
        table.render();
      },
      deletTable() {
        const dragTable: DragTable = this.dragTable;
        const table: BaseTable = dragTable.tableList.pop();
        dragTable.deleteTable(table.id);
      },
      addTable() {
        // debugger;
        const dragTable: DragTable = this.dragTable;
        this.tableCount++;
        const table: BaseTable = (this.tmpTable = dragTable.createTable({
          id: "表" + this.tableCount,
          // isShowColIndex:false,
          // isShowRowIndex:false,
          // hasTopFixedTable: false,
          // hasLeftFixedTable: false,
          // debugLevel: 1,
          isOverflowY: true,
          isOverflowX: true,
          maxWidth: "400px",
          maxHeight: "200px",
          // isTopLeftShow: true,
          canDragResize: true
        }));
        table.topLeftValue = table.id;
        dragTable.addTable(table);
        const datawlh = {
          cell: {
            value: "物料号",
            title: "123"
          },

          id: "wlh",
          selfContainers: [
            {
              show: true,
              type: "hide",
              svg: {
                hide: {
                  paths: [
                    "M912 262v500c0 41.3-14.7 76.7-44 106s-64.6 44-106 44H262.1c-41.3 0-76.7-14.7-106-44s-44-64.6-44-106V262c0-41.3 14.7-76.7 44-106s64.6-44 106-44h500c41.3 0 76.7 14.7 106 44 29.2 29.3 43.9 64.7 43.9 106zM778.6 545.4v-66.7c0-9-3.3-16.9-9.9-23.4-6.6-6.6-14.5-9.9-23.4-9.9H278.7c-9 0-16.9 3.3-23.4 9.9-6.6 6.6-9.9 14.5-9.9 23.4v66.7c0 9 3.3 16.9 9.9 23.4 6.6 6.6 14.3 9.9 23.4 9.9h466.6c9 0 16.9-3.3 23.4-9.9 6.6-6.7 9.9-14.5 9.9-23.4z"
                  ]
                }
              }
            }
          ]
        } as any;
        table.theadAdd({
          type: "top",
          sourceContainerData: datawlh,
          targetParentPosition: []
        });

        const datawdj = {
          cell: {
            value: "单价"
          },
          treeContainer: {
            show: true
          },
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
            value: "总价"
          },
          canSum: true,
          id: "zj"
        };
        table.theadAdd({
          type: "top",
          sourceContainerData: datawdj2,
          targetParentPosition: []
        });

        const ZDYData = {
          treeContainer: {
            children: [
              {
                id: 1,
                cell: {
                  value: 1
                },
                treeContainer: {
                  children: [
                    {
                      id: 1.1,
                      cell: {
                        value: 1.1
                      },
                      treeContainer: {
                        children: [
                          {
                            id: 1.11,
                            cell: {
                              value: 1.11
                            }
                          },
                          {
                            id: 1.12,
                            cell: {
                              value: 1.12
                            }
                          }
                        ]
                      }
                    },
                    {
                      id: 1.2,
                      cell: {
                        value: 1.2
                      }
                    }
                  ]
                }
              },
              {
                id: 2,
                treeContainer: {
                  show: true
                },
                cell: {
                  value: 2
                }
              }
            ]
          },
          selfContainers: [
            {
              show: true,
              type: "hide",
              // rightNum:20,
              svg: {
                hide: {
                  paths: [
                    "M912 262v500c0 41.3-14.7 76.7-44 106s-64.6 44-106 44H262.1c-41.3 0-76.7-14.7-106-44s-44-64.6-44-106V262c0-41.3 14.7-76.7 44-106s64.6-44 106-44h500c41.3 0 76.7 14.7 106 44 29.2 29.3 43.9 64.7 43.9 106zM778.6 545.4v-66.7c0-9-3.3-16.9-9.9-23.4-6.6-6.6-14.5-9.9-23.4-9.9H278.7c-9 0-16.9 3.3-23.4 9.9-6.6 6.6-9.9 14.5-9.9 23.4v66.7c0 9 3.3 16.9 9.9 23.4 6.6 6.6 14.3 9.9 23.4 9.9h466.6c9 0 16.9-3.3 23.4-9.9 6.6-6.7 9.9-14.5 9.9-23.4z"
                  ]
                }
              }
            }
          ],
          // style:{width:'180px'},
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

        table.theadAdd({
          type: "left",
          sourceContainerData: {
            id: "none",
            tbodyConfig: {
              container: {
                renderByThead: false
              }
            }
          },
          targetParentPosition: []
        });

        const data1 = {
          cell: {
            value: "1、"
          },
          tbodyConfig: {
            container: {
              cell: {
                value: "= B2 + C2"
              }
            }
          },
          hideType: "hideSelf",
          children: [
            {
              id: "test",
              cell: {
                value: 123
              },
              tbodyConfig: {
                container: {
                  cell: {
                    value: "= {sc}2 + {sc}3"
                  }
                }
              },
              treeContainer: {
                show: true
              }
            }
          ],
          style: {
            // display:'none'
          },
          id: "row1"
        } as TheadContainer;

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
          targetParentPosition: []
        });

        // dragTable.render();
        // table.setTbodyData([[1, 2, 3,4],[1, 2, 3],[1, 2, 3],[1, 2, 3]]);
        // table.setTbodyData({'zdy_wlh':1,'zdy_dj':2,'none_dj':2});
        // table.setTbodyData([{
        //   'wlh':1,dj:2
        // }]);
        // table.addOneCol({
        //   data: {zdy:1}
        // });
        //  table.addOneRow({
        //   data: {wlh:2}
        // });
        dragTable.render();
        // table.setExpandedContainer([1]);
      },

      onTableChange(msg: any) {
        // if (msg.ev_type !== this.lastEv) {
        //   if (msg.event) {
        //     console.log(msg.ev_type + ":" + msg.event.target.tagName);
        //   }
        // }
        console.log(msg);

        this.lastEv = msg.ev_type;
        switch (msg.ev_type) {
          case "open":
            // 异步addChildren
            if (
              msg.data.objectName === "TreeContainer" &&
              msg.data.object.children.length == 0
            ) {
              const treeContainer = msg.data.object;
              const children = [];
              children.push(
                treeContainer.createContain({
                  cell: {
                    value: 2.1
                  }
                })
              );
              treeContainer.addChildrenAsy(
                new Promise((resolve, reject) => {
                  // 做一些异步操作
                  setTimeout(() => {
                    console.log("执行完成");
                    resolve(children);
                  }, 2000);
                })
              );
            }
            break;
          case "click":
            this.tmpTHead = msg.data.object;
            this.tmpTable = this.tmpTHead.$rootTable;
            if (msg.data.objectName.indexOf("Container") !== -1) {
              console.log(
                msg.data.object.position.colStr + msg.data.object.position.rowStr
              );
            }
            break;
          case "rightClick":
            document.oncontextmenu = () => {
              return false;
            };
            break;
          case "dragOver":
            // debugger;
            if (1) {
              // return "cancel";
            }
            break;

          case "drop":
            if (/dj/.test(msg.data.object.source.containerData.id)) {
              msg.data.object.target.containerData.children.forEach((th, i) => {
                const sourceContainerData = msg.data.object.source.containerData;
                sourceContainerData.id = sourceContainerData.id + i;
                this.tmpTable.theadAdd({
                  type: "top",
                  targetParentPosition: th.theadPosition,
                  sourceContainerData
                });
                this.tmpTable.render();
              });
              return "cancel";
            }
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
      addOneRow() {
        const tmpTable: BaseTable = this.tmpTable;
        if (tmpTable) {
          tmpTable.addOneRow({ render: true });
        }
      },
      addOneCol() {
        const tmpTable: BaseTable = this.tmpTable;
        if (tmpTable) {
          tmpTable.addOneCol({ render: true });
        }
      },
      addMKBM() {
        this.tableCount++;
        const dragTable: DragTable = this.dragTable;
        const tmpTable: BaseTable = dragTable.createTable({
          id: "table" + this.tableCount
        });
        dragTable.addTable(tmpTable);
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
        tmpTable.addOneRow();
        // tmpTable.render();
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
        const dragTable: DragTable = this.dragTable;
        const dragTable2: DragTable = this.dragTable2;
        const jsonList = dragTable.serialize();
        dragTable2.deserialize(jsonList);
        dragTable2.render();
      },

      addTableLeft() {
        // debugger;
        this.tableCount++;
        const dragTable: DragTable = this.dragTable;
        const tmpTable: BaseTable = dragTable.createTable({ id: "table0" });
        const datawlh = {
          cell: {
            value: "物料号",
            title: "123"
          },
          userData: {
            test: {
              a: 1
            }
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
          type: "left",
          sourceContainerData: datawlh,
          targetParentPosition: []
        });

        const datawdj = {
          cell: {
            value: "单价"
          },
          childrenShow: false,
          canSum: true,

          id: "dj"
        };
        const datawdj2 = {
          cell: {
            value: "单价2"
          },
          childrenShow: false,
          canSum: true,

          id: "dj2"
        };
        const ZDYData = {
          cell: {
            value: "自定义表区"
          },
          childrenShow: false,
          id: "zdy"
        };
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

        tmpTable.theadAdd({
          type: "left",
          sourceContainerData: data1,
          targetParentPosition: [0]
        });

        tmpTable.addOneCol();
        // tmpTable.addOneCol();
        dragTable.addTable(tmpTable);
        this.tmpTable = tmpTable;
        tmpTable.render();
      }
    },

    created() {
      const dragTable: DragTable = this.dragTable;
      dragTable.setConfig({
        table: {
          // debugLevel: 1
        }
      });
      // this.tmpTable = dragTable.createTable({ id: "123" });
      // dragTable.tableList = [this.tmpTable];
      // this.tmpTable.initTable(5);
      // this.tmpTable.render();
      const dragTable2: DragTable = this.dragTable2;
      dragTable2.setConfig({
        table: {
          canDragResize: false
        },
        topThead: {
          readonly: true,
          draggable: false
        },
        leftThead: {
          readonly: true,
          draggable: false
        },
        baseTbody: {
          readonly: true
        }
      });
      dragTable.$subject.subscribe(this.onTableChange, this);
      dragTable2.$subject.subscribe(this.onTableChange, this);
      // this.addTableLeft();
      this.addTable();
      const table = this.tmpTable;
      table.render();
    }
  });
</script>

<style>
  .table-list-left-div {
    position: relative;
    width: 100%;
    float: left;
    /* margin: 0 auto; */
    /* background: red; */
  }

  .table-list-right-div {
    position: relative;
    width: 100%;
    float: left;
    /* margin: 0 auto; */
  }
</style>

