 <template>

  <div
    v-if="myTable"
    style="position: relative;float: left;"
    @keydown="myTable.onKeyDown($event)"
    @keyup="myTable.onKeyUp($event)"
  >
    <!-- 左上角填充 -->
    <div
      class="fix-top-left-table"
      v-if="myTable.config.hasLeftFixedTable && myTable.config.hasTopFixedTable"
    >
      <table
        v-if='myTable && myTable.rowNumber[0] && myTable.colNumber[0]'
        class='my-table left-table'
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <thead>
          <tr v-if="myTable.config.isShowColIndex && myTable.config.isShowRowIndex">
            <th
              class="rowNumber"
              @click="myTable.onClick($event)"
              tabindex="1"
              v-bind:style="{padding:myTable.rowNumber[0].style.padding,background:myTable.rowNumber[0].style.background}"
            >
              <div v-bind:style="{width:myTable.rowNumber[0].style.width, height:myTable.colNumber[0].style.height}">
                {{myTable.config.debugLevel === 1 ?myTable.id:''}}
              </div>
            </th>

            <th
              v-for="(th,i) in myTable.theadLeftEntity.leafIndexList2"
              class="colNumber"
              tabindex="1"
              v-bind:style="myTable.colNumber[i].style"
            >
              <div v-bind:style="myTable.colNumber[i].cell.style">
                {{myTable.colNumber[i].cell.content}}
              </div>
            </th>

          </tr>
          <tr
            v-if="myTable.config.isShowRowIndex"
            v-for='(tr, i) in myTable.tableHeadTop'
            :key='tr+i'
          >
            <th
              v-bind:style="myTable.rowNumber[i].style"
              class="rowNumber"
              @dragover='myTable.dragOver($event)'
              @drop='myTable.drop($event,myTable.rowNumber[i])'
              @mousedown="myTable.rowNumber[i].onMouseDown($event)"
              @mouseout="myTable.rowNumber[i].onMouseOut($event)"
              @mousemove="myTable.rowNumber[i].onMouseMove($event)"
            >
              <div
                tabindex="1"
                :title=myTable.rowNumber[i].cell.content
                v-bind:style="[myTable.rowNumber[i].cell.style]"
              >{{myTable.rowNumber[i].cell.content}}</div>
            </th>
            <th
              class="colNumber"
              tabindex="1"
              v-if='i===0&&myTable.tableHeadLeft[0]&&myTable.tableHeadTop[0]'
              :colspan="myTable.theadLeftEntity.side2"
              :rowspan="myTable.tableHeadTop.length"
              v-bind:style="myTable.tableHeadTopLeft.style"
              @click="myTable.onClick($event)"
              style="border-width: 1px;"
            >
              <div v-bind:style="myTable.tableHeadTopLeft.cell.style">
                {{myTable.config.topleftShowTableName ? myTable.tableHeadTopLeft.cell.content:''}}
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <!-- 左侧固定表头 -->
    <div
      v-if="myTable.config.hasLeftFixedTable"
      class="fix-left-table"
      :scrollTop.prop="myTable.style.scrollTop"
      v-bind:style="myTable.style.leftTable"
    >
      <table
        v-if='myTable && myTable.rowNumber[0] && myTable.colNumber[0]'
        class='my-table left-table'
      >
        <thead>
          <tr v-if="myTable.config.isShowColIndex">
            <th
              class="rowNumber"
              tabindex="1"
              v-bind:style="{padding:(myTable.rowNumber[0]||myTable.colNumber[0]||{}).style.padding,background:(myTable.rowNumber[0]||myTable.colNumber[0]||{}).style.background}"
            >
              <div v-bind:style="{width:myTable.rowNumber[0].style.width,height:myTable.colNumber[0].style.height}"></div>
            </th>
            <th
              v-for="(th,i) in myTable.theadLeftEntity.leafIndexList2"
              class="colNumber"
              v-bind:style="myTable.colNumber[i].style"
            >
              <div v-bind:style="myTable.colNumber[i].cell.style">
                {{myTable.colNumber[i].cell.content}}
              </div>
            </th>
          </tr>
          <tr
            v-for='(th, i) in myTable.rowNumber'
            :key='"row"+i'
          >
            <th
              v-if="myTable.config.isShowRowIndex"
              class="rowNumber"
              v-bind:style="th.style"
              tabindex="0"
              @mousedown="th.onMouseDown($event)"
              @mouseout="th.onMouseOut($event)"
              @mousemove="th.onMouseMove($event)"
              @click="th.onClick($event)"
              @dragover='myTable.dragOver($event,th)'
              @drop='myTable.drop($event,th)'
            >
              <div
                v-bind:style="[th.cell.style]"
                :title=th.cell.content
              >{{th.cell.content}}</div>
            </th>

            <th
              class="colNumber"
              v-if='i===0&&myTable.tableHeadLeft[0]'
              :colspan="myTable.theadLeftEntity.side2"
              :rowspan="myTable.tableHeadTop.length"
              v-bind:style="myTable.tableHeadTopLeft.style"
            >
              <div v-bind:style="myTable.tableHeadTopLeft.cell.style">
                {{myTable.config.topleftShowTableName ? myTable.tableHeadTopLeft.cell.content:''}}
              </div>
            </th>
            <th
              tabindex="1"
              v-for="(th,j) in myTable.tableHeadLeft[i - myTable.theadTopEntity.side2]"
              :key='th+j'
              v-bind:style="[th.style]"
              @click="th.onClick($event)"
              @blur="th.onBlur($event)"
              :draggable='th.draggable'
              @dragstart="myTable.dragStart($event,th)"
              @dragover='myTable.dragOver($event,th)'
              @drop='myTable.drop($event,th)'
              @dragleave="myTable.dragLeave($event,th)"
              @mousedown="th.onMouseDown($event)"
              @mousemove="th.onMouseMove($event)"
              @mouseout="th.onMouseOut($event)"
              :colspan="th.span2"
              :rowspan="th.span1"
            >
              <div
                v-bind:style="[th.cell.style]"
                @dblclick="th.cell.onDbClick()"
                v-if="th.cell.displayClass[th.cell.status].displayType == 'text'"
              >
                {{th.cell.content}}
              </div>

              <input
                v-if="th.cell.displayClass[th.cell.status].displayType == 'input'"
                @mouseover="th.cell.onMouseOver($event)"
                @blur="th.cell.inputOnBlur($event,true)"
                v-model="th.cell.value"
                v-bind:style="[th.cell.style]"
                style="background-color:#fff;"
              />

              <button
                @click="th.cell.click($event)"
                v-if="th.cell.displayClass[th.cell.status].displayType == 'button'"
                v-bind:style="[th.cell.style]"
              >{{th.cell.content}}</button>

              <select
                tabindex="1"
                v-if="th.cell.displayClass[th.cell.status].displayType == 'select'"
                v-model="th.cell.value"
                v-bind:style="[th.cell.style]"
                @change="th.cell.onChange($event)"
                @blur="th.cell.onBlur($event)"
              >
                <option
                  v-for="option in th.cell.select.optionList"
                  :value="option.text"
                  :key="option.value"
                >{{option.text}}</option>
              </select>

            </th>
          </tr>
        </thead>
      </table>
    </div>

    <!-- 上测固定表头 -->
    <div
      v-if="myTable.config.hasTopFixedTable"
      class="fix-top-table"
      :scrollLeft.prop="myTable.style.scrollLeft"
      v-bind:style="myTable.style.topTable"
    >
      <table
        v-if='myTable && myTable.rowNumber[0] && myTable.colNumber[0]'
        class='my-table'
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <thead>
          <tr v-if="myTable.config.isShowColIndex">
            <th
              class="rowNumber"
              v-if="myTable.config.isShowRowIndex"
              v-bind:style="{padding:myTable.rowNumber[0].style.padding,background:myTable.rowNumber[0].style.background}"
            >
              <div v-bind:style="{width:myTable.rowNumber[0].style.width,height:myTable.colNumber[0].style.height}"></div>
            </th>
            <th
              class="colNumber"
              v-for='(th,i) in myTable.colNumber'
              :key='"col"+i'
              v-bind:style="th.style"
              @mousedown="th.onMouseDown($event)"
              @mouseout="th.onMouseOut($event)"
              @mousemove="th.onMouseMove($event)"
              tabindex="1"
              @click="th.onClick($event)"
              @dragover='myTable.dragOver($event,th)'
              @drop='myTable.drop($event,th)'
            >
              <div v-bind:style="th.cell.style">{{th.cell.content}}</div>
            </th>
          </tr>
          <tr
            v-for='(tr, i) in myTable.tableHeadTop'
            :key='"tr"+i'
          >
            <th
              v-if="myTable.config.isShowRowIndex"
              class="rowNumber"
              v-bind:style="myTable.rowNumber[i].style"
            >
              <div v-bind:style="myTable.rowNumber[i].cell.style"></div>
            </th>
            <th
              class="colNumber"
              v-if='i===0 && myTable.tableHeadLeft[0] && myTable.tableHeadTop[0]'
              :colspan="myTable.theadLeftEntity.side2"
              :rowspan="myTable.tableHeadTop.length"
              v-bind:style="myTable.tableHeadTopLeft.style"
            >
              <div v-bind:style="myTable.tableHeadTopLeft.cell.style">
                {{myTable.config.topleftShowTableName ? myTable.tableHeadTopLeft.cell.content:''}}
              </div>
            </th>
            <!-- 上测固定表头 -->
            <th
              v-bind:style="th.style"
              class='top-th'
              v-for='(th, j) in tr'
              :key='th.id +j'
              tabindex="1"
              @blur="th.onBlur($event)"
              @click="th.onClick($event)"
              :draggable='th.draggable'
              @dragstart="myTable.dragStart($event,th)"
              @dragend="myTable.dragEnd($event,th)"
              @dragover='myTable.dragOver($event,th)'
              @drop='myTable.drop($event,th)'
              @dragleave="myTable.dragLeave($event,th)"
              @mousedown="th.onMouseDown($event)"
              @mousemove="th.onMouseMove($event)"
              @mouseout="th.onMouseOut($event)"
              :colspan="th.span1"
              :rowspan="th.span2"
            >

              <div
                @dblclick="th.cell.onDbClick()"
                v-bind:style="[th.cell.style]"
                v-if="th.cell.displayClass[th.cell.status].displayType == 'text'"
                :title="th.cell.title"
              >
                <i><svg
                    t="1546669133888"
                    class="icon"
                    v-if="th.cell.title"
                    v-bind:style="th.tips.style"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1069"
                  >
                    <path
                      d="M512 56.888889C261.688889 56.888889 56.888889 261.688889 56.888889 512s204.8 455.111111 455.111111 455.111111 455.111111-204.8 455.111111-455.111111-204.8-455.111111-455.111111-455.111111m0 853.333333c-221.866667 0-398.222222-176.355556-398.222222-398.222222s176.355556-398.222222 398.222222-398.222222 398.222222 176.355556 398.222222 398.222222-176.355556 398.222222-398.222222 398.222222"
                      fill="#333333"
                      p-id="1070"
                    ></path>
                    <path
                      d="M512 682.666667c-17.066667 0-28.444444 5.688889-39.822222 17.066666-11.377778 11.377778-17.066667 22.755556-17.066667 39.822223 0 17.066667 5.688889 28.444444 17.066667 39.822222 11.377778 11.377778 22.755556 17.066667 39.822222 17.066666 17.066667 0 28.444444-5.688889 39.822222-17.066666 11.377778-11.377778 17.066667-22.755556 17.066667-39.822222 0-17.066667-5.688889-28.444444-17.066667-39.822223-11.377778-11.377778-22.755556-17.066667-39.822222-17.066666z m-51.2-455.111111l17.066667 409.6h62.577777L563.2 227.555556H460.8z"
                      fill="#333333"
                      p-id="1071"
                    ></path>
                  </svg></i>

                {{th.cell.content}}

              </div>

              <input
                v-if="th.cell.displayClass[th.cell.status].displayType == 'input'"
                v-bind:style="[th.cell.style]"
                @mouseover="th.cell.onMouseOver($event)"
                @blur="th.cell.inputOnBlur($event,true)"
                v-model="th.cell.value"
              />

              <button
                v-if="th.cell.displayClass[th.cell.status].displayType == 'button'"
                v-bind:style="[th.cell.style]"
                @click="th.cell.click($event)"
              >{{th.cell.content}}</button>

            </th>
          </tr>
        </thead>
      </table>
    </div>
    <!-- 主表 -->
    <div
      v-bind:style="myTable.style.mainTable"
      :scrollTop="myTable.style.scrollTop"
      @scroll="myTable.onScroll($event)"
      class="main-table"
      id='div1'
    >
      <table
        v-if='myTable && myTable.rowNumber[0] && myTable.colNumber[0]'
        class='my-table'
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <thead>
          <tr v-if="myTable.config.isShowColIndex">
            <th
              class="rowNumber"
              v-bind:style="{width:myTable.rowNumber[0].style.width,height:myTable.colNumber[0].style.height}"
              v-if="myTable.config.isShowRowIndex"
            >
              <div></div>
            </th>
            <th
              class="colNumber"
              v-for='(th,i) in myTable.colNumber'
              :key='"col"+i'
              @dragover='myTable.dragOver($event,th)'
              @drop='myTable.dropTopA_Z($event)'
              @mousedown="th.onMouseDown($event)"
              @mousemove="th.onMouseMove($event)"
              @mouseout="th.onMouseOut($event)"
              v-bind:style="[th.style]"
            >
              <div v-bind:style="[th.cell.style]">{{th.cell.content}}</div>
            </th>
          </tr>
          <tr
            v-for='(tr, i) in myTable.tableHeadTop'
            :key='tr+i'
          >
            <th
              v-if="myTable.config.isShowRowIndex"
              @mousedown="myTable.rowNumber[i].onMouseDown($event)"
              @mousemove="myTable.rowNumber[i].onMouseMove($event)"
              @mouseout="myTable.rowNumber[i].onMouseOut($event)"
              class="rowNumber"
            >
              <div v-bind:style="[myTable.rowNumber[i].cell.style]">
                {{ myTable.config.hasLeftFixedTable ?'':myTable.rowNumber[i].cell.content}}
              </div>
            </th>
            <th
              class="colNumber"
              v-if='i===0&&myTable.tableHeadLeft[0]&&myTable.tableHeadTop[0]'
              :colspan="myTable.theadLeftEntity.side2"
              :rowspan="myTable.tableHeadTop.length"
              v-bind:style="[myTable.tableHeadTopLeft.style]"
            >
              <div v-bind:style="[myTable.tableHeadTopLeft.cell.style]">
                {{myTable.config.topleftShowTableName ? myTable.tableHeadTopLeft.cell.content:''}}
              </div>
            </th>
            <th
              v-for='(th, i) in tr'
              :key='th.id +i'
              :colspan="th.span1"
              :rowspan="th.span2"
              v-bind:style="[th.style]"
              @click="th.onClick($event)"
              :draggable="th.draggable"
              @dragstart="myTable.dragStart($event,th)"
              @dragend="myTable.dragEnd($event,th)"
              @dragover='myTable.dragOver($event,th)'
              @drop='myTable.drop($event,th)'
              @dragleave="myTable.dragLeave($event,th)"
              @mousedown="th.onMouseDown($event)"
              @mousemove="th.onMouseMove($event)"
              @mouseout="th.onMouseOut($event)"
              tabindex="1"
            >

              <div
                v-bind:style="[th.cell.style]"
                @dblclick="th.cell.onDbClick($event)"
                v-if="th.cell.displayClass[th.cell.status].displayType == 'text'"
              >{{th.cell.content}}
              </div>
              <div v-if="th.cell.displayClass[th.cell.status].displayType == 'input'">
                <input
                  v-bind:style="[th.cell.style]"
                  @mouseover="th.cell.onMouseOver($event)"
                  @blur="th.cell.inputOnBlur($event,true)"
                  v-model="th.cell.value"
                />
              </div>
              <div v-if="th.cell.displayClass[th.cell.status].displayType == 'button'">
                <button @click="th.cell.click($event)">{{th.cell.content}}</button>
              </div>

              <select
                tabindex="1"
                v-if="th.cell.displayClass[th.cell.status].displayType == 'select'"
                v-model="th.cell.value"
                v-bind:style="[th.cell.style]"
                @change="th.cell.onChange($event)"
                @blur="th.cell.onBlur($event)"
              >
                <option
                  v-for="option in th.cell.select.optionList"
                  :value="option.text"
                  :key="option.value"
                >{{option.text}}</option>
              </select>

            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for='(tr, i) in myTable.tableBody'
            :key='tr+i'
          >
            <th
              v-if="myTable.config.isShowRowIndex"
              class="rowNumber"
              v-bind:style="myTable.rowNumber[i+myTable.tableHeadTop.length].style"
              @mousedown="myTable.rowNumber[i+myTable.tableHeadTop.length].onMouseDown($event)"
              @mouseout="myTable.rowNumber[i+myTable.tableHeadTop.length].onMouseOut($event)"
              @mousemove="myTable.rowNumber[i+myTable.tableHeadTop.length].onMouseMove($event)"
            >
              <div v-bind:style="[myTable.rowNumber[i+myTable.tableHeadTop.length].cell.style]">
                {{myTable.rowNumber[i+myTable.tableHeadTop.length].cell.content}}
              </div>
            </th>
            <!-- 主表里左侧表头 -->
            <th
              tabindex="1"
              v-bind:style="[th.style]"
              v-for="(th,j) in myTable.tableHeadLeft[i]"
              :key='th+j'
              @click="th.onClick($event)"
              @blur="th.onBlur($event)"
              :draggable='th.draggable'
              @dragstart="myTable.dragStart($event,th)"
              @dragover='myTable.dragOver($event,th)'
              @drop='myTable.drop($event,th)'
              @dragleave="myTable.dragLeave($event,th)"
              @mousedown="th.onMouseDown($event)"
              @mousemove="th.onMouseMove($event)"
              @mouseout="th.onMouseOut($event)"
              :colspan="th.span2"
              :rowspan="th.span1"
            >
              <div
                v-bind:style="[th.cell.style]"
                @dblclick="th.cell.onDbClick()"
                v-if="th.cell.displayClass[th.cell.status].displayType == 'text'"
              >
                {{th.cell.content}}
              </div>

              <input
                v-if="th.cell.displayClass[th.cell.status].displayType == 'input'"
                @mouseover="th.cell.onMouseOver($event)"
                @blur="th.cell.inputOnBlur($event,true)"
                v-model="th.cell.value"
                v-bind:style="[th.cell.style]"
                style="background-color:#fff;"
              />

              <button
                @click="th.cell.click($event)"
                v-if="th.cell.displayClass[th.cell.status].displayType == 'button'"
                v-bind:style="[th.cell.style]"
              >{{th.cell.content}}</button>

              <select
                tabindex="1"
                v-if="th.cell.displayClass[th.cell.status].displayType == 'select'"
                v-model="th.cell.value"
                v-bind:style="[th.cell.style]"
                @change="th.cell.onChange($event)"
                @blur="th.cell.onBlur($event)"
              >
                <option
                  v-for="option in th.cell.select.optionList"
                  :value="option.text"
                  :key="option.value"
                >{{option.text}}</option>
              </select>

            </th>
            <td
              tabindex="1"
              v-bind:style="[td.style]"
              @click="td.onClick($event)"
              @mousedown="td.onMouseDown($event)"
              @blur="td.onBlur($event)"
              @paste="td.onPaste($event)"
              v-for='(td, j) in tr'
              :key='1 + j'
            >
              <div
                v-bind:style="[td.cell.style]"
                @dblclick="td.cell.onDbClick($event)"
                v-if="td.cell.displayClass[td.cell.status].displayType == 'text'"
              >{{td.cell.content}}
              </div>

              <input
                type="text"
                @input="td.cell.onInput($event)"
                @mouseup="td.cell.onMouseUp($event)"
                v-bind:style="[td.cell.style]"
                v-if="td.cell.displayClass[td.cell.status].displayType == 'input'"
                @mouseover="td.cell.onMouseOver($event)"
                @focus="td.cell.onFocus($event)"
                @blur="td.cell.inputOnBlur($event,true)"
                @keydown="td.cell.onKeyDown($event)"
                v-model="td.cell.value"
              />

              <select
                tabindex="1"
                v-model="td.cell.value"
                v-bind:style="[td.cell.style]"
                @blur="td.cell.onBlur($event)"
                @mouseover="td.cell.onMouseOver($event)"
                @change="td.cell.onChange($event)"
                v-if="td.cell && td.cell.displayClass[td.cell.status].displayType == 'select'"
              >
                <option
                  v-for="option in td.cell.select.optionList"
                  :key="option.value"
                  :value="option.text"
                >{{option.text}}</option>
              </select>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      v-for="(val, key) in myTable.$selectBoxEntity.selectList"
      v-bind:key="key"
      v-bind:style="{position:'absolute',top:val.fixTop?0:('-'+myTable.style.scrollTop+'px'),left:val.fixLeft?0:('-'+ myTable.style.scrollLeft+'px')}"
    >
      <span v-if="val.position.table === myTable.position.table">
        <div v-bind:style="val.topStyle"></div>
        <div v-bind:style="val.rightStyle"></div>
        <div v-bind:style="val.bottomStyle"></div>
        <div v-bind:style="val.leftStyle"></div>
      </span>
    </div>
  </div>

</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { BaseTable } from "../viewModule/table/BaseTable";
  export default Vue.component("MyTable", {
    props: {
      inputTable: Object
    },
    data: function() {
      return {
        myTable: this.inputTable || new BaseTable("test")
      };
    },
    watch: {
      inputTable: function(val, oldVal) {
        this.myTable = val || oldVal;
      }
    },
    created() {
      console.log(this.myTable.tableId);
    }
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../css/table.css"; /*引入公共样式*/
</style>
