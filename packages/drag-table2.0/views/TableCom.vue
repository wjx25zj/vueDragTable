 <template>

  <div
    v-if="myTable"
    class="clearfix"
    style="position: relative;"
    @keydown="myTable.onKeyDown($event)"
    @keyup="myTable.onKeyUp($event)"
  >
    <!-- 左上角填充 -->
    <TopLeftFixTable
      :inputTable="myTable"
      v-if="myTable.hasLeftFixedTable && myTable.hasTopFixedTable"
    ></TopLeftFixTable>
    <!-- 左侧固定表头 -->
    <LeftFixTable
      :inputTable="myTable"
      v-if="myTable.hasLeftFixedTable"
    ></LeftFixTable>
    <!-- 上测固定表头 -->
    <TopFixTable
      :inputTable="myTable"
      v-if="myTable.hasTopFixedTable"
    ></TopFixTable>

    <!-- 主表 -->
    <div
      v-bind:style="myTable.style.mainTable"
      :scrollTop="myTable.style.scrollTop"
      @scroll="myTable.onScroll($event)"
      class="main-table"
    >
      <table
        v-if='myTable && myTable.$rowNumber[0] && myTable.$colNumber[0]'
        class='my-table'
        cellspacing="0"
        cellpadding="0"
        border="0"
      >
        <!-- TopIndexThead -->
        <tr v-if="myTable.isShowColIndex">
          <!-- IndexTopLeft  -->
          <th
            v-if="myTable.isShowRowIndex"
            class="rowNumber"
            tabindex="1"
            v-bind:style="{width:myTable.$rowNumber[0].style.width,height:myTable.$colNumber[0].style.height}"
          >
            <div v-bind:style="{width:myTable.$rowNumber[0].style.width,height:myTable.$colNumber[0].style.height,lineHeight:myTable.$colNumber[0].style.height}">
              {{myTable.isTopLeftShow? myTable.topLeftValue:''}}
            </div>
          </th>
          <th
            class="colNumber"
            v-for='(th,i) in myTable.$colNumber'
            :key='"col"+i'
            @dragover='th.dragOver($event)'
            @dragleave="th.dragLeave($event)"
            @dragenter="th.dragEnter($event)"
            @drop='th.drop($event)'
            @mousedown="th.onMouseDown($event)"
            @mousemove="th.onMouseMove($event)"
            @mouseout="th.onMouseOut($event)"
            v-bind:style="[th.style]"
          >
            <div v-bind:style="[th.cell.style]">{{th.cell.content}}</div>
          </th>
        </tr>

        <tr
          v-for='(th, i) in myTable.$rowNumber'
          :key='th.id'
        >
          <!-- TopThead -->
          <template v-if="i < myTable.$tableHeadTop.length">
            <!-- rowIndexTh -->
            <th
              v-if="myTable.isShowRowIndex"
              @mousedown="th.onMouseDown($event)"
              @mousemove="th.onMouseMove($event)"
              @mouseout="th.onMouseOut($event)"
              @dragover='th.dragOver($event)'
              @dragleave="th.dragLeave($event)"
              @dragenter="th.dragEnter($event)"
              @drop='th.drop($event)'
              class="rowNumber"
            >
              <div v-bind:style="[th.cell.style]">
                {{ myTable.hasLeftFixedTable ?'':th.cell.content}}
              </div>
            </th>
            <!-- TopLeft  -->
            <th
              class="colNumber"
              tabindex="1"
              v-if='i===0 && myTable.$tableHeadLeft[0] && myTable.$tableHeadTop[0]'
              :colspan="myTable.theadLeftEntity.side2"
              :rowspan="myTable.theadTopEntity.side2"
              v-bind:style="[myTable.tableHeadTopLeft.style]"
            >
              <div v-bind:style="[myTable.tableHeadTopLeft.cell.style]">
              </div>
            </th>
            <!-- topTh -->
            <th
              v-for='(th, j) in myTable.$tableHeadTop[i]'
              :key='th.id'
              :colspan="th.span1"
              :rowspan="th.span2"
              v-bind:style="[th.style]"
              @click="th.onClick($event)"
              :draggable="th.draggable"
              @dragstart="th.dragStart($event)"
              @dragend="th.dragEnd($event)"
              @dragover='th.dragOver($event)'
              @dragleave="th.dragLeave($event)"
              @dragenter="th.dragEnter($event)"
              @drop='th.drop($event)'
              @mousedown="th.onMouseDown($event)"
              @mousemove="th.onMouseMove($event)"
              @mouseout="th.onMouseOut($event)"
              tabindex="1"
            >
              <svg
                v-if="th.treeContainer.show"
                v-bind:style="th.treeContainer.style"
                viewBox="0 0 1024 1024"
                @click="th.treeContainer.onClick($event)"
              >
                <path
                  v-for="d in th.treeContainer.svg[th.treeContainer.$openStatus].paths"
                  :d="d"
                ></path>
              </svg>
              <svg
                v-for="sc in th.selfContainers"
                v-bind:style="sc.style"
                viewBox="0 0 1024 1024"
                v-if="sc.show"
                @click="sc.onClick($event)"
              >
                <path
                  v-for="d in sc.svg[sc.type].paths"
                  :d="d"
                ></path>
              </svg>

              <div
                v-bind:style="[th.cell.style]"
                @dblclick="th.cell.onDbClick($event)"
                v-if="th.cell.displayClass[th.cell.status].displayType == 'text'"
                :title="th.cell.title"
              >
                {{th.cell.content}}
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
                <button @click="th.cell.onClick($event)">{{th.cell.content}}</button>
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
          </template>
          <!-- TBODY -->
          <template v-else>
            <!-- rowIndexThead -->
            <th
              v-if="myTable.isShowRowIndex"
              class="rowNumber"
              v-bind:style="th.style"
              @mousedown="th.onMouseDown($event)"
              @mouseout="th.onMouseOut($event)"
              @mousemove="th.onMouseMove($event)"
              @dragover='th.dragOver($event)'
              @dragleave="th.dragLeave($event)"
              @dragenter="th.dragEnter($event)"
              @drop='th.drop($event)'
            >
              <div v-bind:style="[th.cell.style]">
                {{th.cell.content}}
              </div>
            </th>
            <!-- leftThead -->
            <th
              v-for="(th,j) in myTable.$tableHeadLeft[i - myTable.$tableHeadTop.length]"
              tabindex="1"
              v-bind:style="[th.style]"
              :key='th+j'
              @click="th.onClick($event)"
              @blur="th.onBlur($event)"
              :draggable="th.draggable"
              @dragstart="th.dragStart($event)"
              @dragend="th.dragEnd($event)"
              @dragover='th.dragOver($event)'
              @dragleave="th.dragLeave($event)"
              @dragenter="th.dragEnter($event)"
              @drop='th.drop($event)'
              @mousedown="th.onMouseDown($event)"
              @mousemove="th.onMouseMove($event)"
              @mouseout="th.onMouseOut($event)"
              :colspan="th.span2"
              :rowspan="th.span1"
            >
              <svg
                v-if="th.treeContainer.show"
                v-bind:style="th.treeContainer.style"
                viewBox="0 0 1024 1024"
                @click="th.treeContainer.onClick($event)"
              >
                <path
                  v-for="d in th.treeContainer.svg[th.treeContainer.$openStatus].paths"
                  :d="d"
                ></path>
              </svg>
              <svg
                v-for="sc in th.selfContainers"
                v-bind:style="sc.style"
                viewBox="0 0 1024 1024"
                v-if="sc.show"
                @click="sc.onClick($event)"
              >
                <path
                  v-for="d in sc.svg[sc.type].paths"
                  :d="d"
                ></path>
              </svg>
              <div
                v-bind:style="[th.cell.style]"
                @dblclick="th.cell.onDbClick()"
                :title="th.cell.title"
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
                @click="th.cell.onClick($event)"
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

            <!-- Tbody -->
            <td
              v-for='(td, j) in myTable.$tableBody[i - myTable.$tableHeadTop.length]'
              :key='1 + j'
              tabindex="1"
              v-bind:style="[td.style]"
              @click="td.onClick($event)"
              @mousedown="td.onMouseDown($event)"
              @blur="td.onBlur($event)"
              @paste="td.onPaste($event)"
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
                v-if="td.cell && td.cell.displayClass[td.cell.status].displayType == 'select'"
                tabindex="1"
                v-model="td.cell.value"
                v-bind:style="[td.cell.style]"
                @blur="td.cell.onBlur($event)"
                @mouseover="td.cell.onMouseOver($event)"
                @change="td.cell.onChange($event)"
              >
                <option
                  v-for="option in td.cell.select.optionList"
                  :key="option.value"
                  :value="option.text"
                >{{option.text}}</option>
              </select>

            </td>
          </template>
        </tr>

      </table>
      <SelectBox
        :inputTable="myTable"
        positionType='main'
        v-if="myTable"
      ></SelectBox>
    </div>

    <div id='rightMeu'>
      <ul>

      </ul>
    </div>
  </div>

</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import TopFixTable from "./com/TopFixTable.vue";
  import TopLeftFixTable from "./com/TopLeftFixTable.vue";
  import LeftFixTable from "./com/LeftFixTable.vue";
  import SelectBox from "./com/SelectBox.vue";
  import { BaseTable } from "../viewModule/table/BaseTable";
  export default Vue.component("MyTable", {
    components: {
      TopLeftFixTable,
      TopFixTable,
      LeftFixTable,
      SelectBox
    },
    props: {
      inputTable: Object
    },
    data: function() {
      return {
        myTable: this.inputTable || new BaseTable({ id: "test" })
      };
    },
    watch: {
      inputTable: function(val, oldVal) {
        this.myTable = val || oldVal;
      }
    },
    created() {
      console.log(this.myTable.id);
    }
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../css/table.css"; /*引入公共样式*/
</style>
