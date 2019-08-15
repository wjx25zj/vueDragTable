 <template>
  <div
    class="fix-left-table"
    :scrollTop.prop="myTable.style.scrollTop"
    v-bind:style="myTable.style.leftTable"
  >
    <table
      v-if='myTable && myTable.$rowNumber[0] && myTable.$colNumber[0]'
      class='my-table left-table'
    >
      <thead>
        <!-- TopIndexThead -->
        <tr v-if="myTable.isShowColIndex">
          <!-- IndexTopLeft  -->
          <th
            class="rowNumber"
            tabindex="1"
            v-bind:style="{padding:(myTable.$rowNumber[0]||myTable.$colNumber[0]||{}).style.padding,background:(myTable.$rowNumber[0]||myTable.$colNumber[0]||{}).style.background}"
          >
            <div v-bind:style="{width:myTable.$rowNumber[0].style.width,height:myTable.$colNumber[0].style.height,lineHeight:myTable.$colNumber[0].style.height}">
              {{myTable.isTopLeftShow? myTable.topLeftValue:''}}
            </div>
          </th>
          <th
            v-for="(th,i) in myTable.theadLeftEntity.$leafIndexList2"
            class="colNumber"
            v-bind:style="myTable.$colNumber[i].style"
          >
            <div v-bind:style="myTable.$colNumber[i].cell.style">
              {{myTable.$colNumber[i].cell.content}}
            </div>
          </th>
        </tr>
        <!-- LeftThead -->
        <tr
          v-for='(th, i) in myTable.$rowNumber'
          :key='"row"+i'
        >
          <th
            v-if="myTable.isShowRowIndex"
            class="rowNumber"
            v-bind:style="th.style"
            tabindex="1"
            @mousedown="th.onMouseDown($event)"
            @mouseout="th.onMouseOut($event)"
            @mousemove="th.onMouseMove($event)"
            @click="th.onClick($event)"
            @dragstart="th.dragStart($event)"
            @dragend="th.dragEnd($event)"
            @dragover='th.dragOver($event)'
            @dragleave="th.dragLeave($event)"
            @dragenter="th.dragEnter($event)"
            @drop='th.drop($event)'
          >
            <div
              v-bind:style="[th.cell.style]"
              :title=th.cell.content
            >{{th.cell.content}}</div>
          </th>
          <!-- TopLeft  -->
          <th
            class="colNumber"
            tabindex="1"
            @click="myTable.onClick($event)"
            v-if='i===0 && myTable.$tableHeadLeft[0]&&myTable.$tableHeadTop[0]'
            :colspan="myTable.theadLeftEntity.side2"
            :rowspan="myTable.theadTopEntity.side2"
            v-bind:style="myTable.tableHeadTopLeft.style"
          >
            <div v-bind:style="myTable.tableHeadTopLeft.cell.style">
            </div>
          </th>
          <th
            tabindex="1"
            v-for="(th,j) in myTable.$tableHeadLeft[i - myTable.theadTopEntity.side2]"
            :key='th+j'
            v-bind:style="[th.style]"
            @click="th.onClick($event)"
            @blur="th.onBlur($event)"
            :draggable="th.draggable"
            @dragstart="th.dragStart($event)"
            @dragover='th.dragOver($event)'
            @drop='th.drop($event)'
            @dragleave="th.dragLeave($event)"
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
              v-if="th.cell.displayClass[th.cell.status].displayType == 'text'"
              v-bind:style="[th.cell.style]"
              @dblclick="th.cell.onDbClick()"
              :title="th.cell.title"
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
        </tr>
      </thead>
    </table>
    <SelectBox
      :inputTable="myTable"
      positionType='left'
      v-if="myTable"
    ></SelectBox>
  </div>
</template>

<script lang="ts">
  import { Vue } from "vue-property-decorator";
  import { BaseTable } from "../../viewModule/table/BaseTable";
  export default Vue.component("LeftFixTable", {
    props: {
      inputTable: Object
    },
    data: function() {
      return {
        myTable: this.inputTable
      };
    },
    watch: {
      inputTable: function(val, oldVal) {
        this.myTable = val || oldVal;
      }
    }
  });
</script>
