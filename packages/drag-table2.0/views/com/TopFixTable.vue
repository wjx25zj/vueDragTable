 <template>
  <!-- 上测固定表头 -->
  <div
    class="fix-top-table"
    :scrollLeft.prop="myTable.style.scrollLeft"
    v-bind:style="myTable.style.topTable"
  >
    <table
      v-if='myTable && myTable.$rowNumber[0] && myTable.$colNumber[0]'
      class='my-table'
      cellspacing="0"
      cellpadding="0"
      border="0"
    >
      <thead>

        <!-- TopIndexThead -->
        <tr v-if="myTable.isShowColIndex">
          <!-- IndexTopLeft  -->
          <th
            class="rowNumber"
            tabindex="1"
            v-if="myTable.isShowRowIndex"
            v-bind:style="{padding:myTable.$rowNumber[0].style.padding,
            background:myTable.$rowNumber[0].style.background}"
          >
            <div v-bind:style="{width:myTable.$rowNumber[0].style.width,
            height:myTable.$colNumber[0].style.height,lineHeight:myTable.$colNumber[0].style.height}">
              {{myTable.isTopLeftShow? myTable.topLeftValue:''}}
            </div>
          </th>
          <th
            v-for='(th,i) in myTable.$colNumber'
            :key='"col"+i'
            class="colNumber"
            tabindex="1"
            v-bind:style="th.style"
            @mousedown="th.onMouseDown($event)"
            @mouseout="th.onMouseOut($event)"
            @mousemove="th.onMouseMove($event)"
            @click="th.onClick($event)"
            @dragover='th.dragOver($event)'
            @dragleave="th.dragLeave($event)"
            @dragenter="th.dragEnter($event)"
            @drop='th.drop($event)'
          >
            <div v-bind:style="th.cell.style">{{th.cell.content}}</div>
          </th>
        </tr>

        <!-- TopThead -->
        <tr
          v-for='(tr, i) in myTable.$tableHeadTop'
          :key='"tr"+i'
        >
          <th
            v-if="myTable.isShowRowIndex"
            tabindex="1"
            class="rowNumber"
            v-bind:style="myTable.$rowNumber[i].style"
            @mousedown="myTable.$rowNumber[i].onMouseDown($event)"
            @mousemove="myTable.$rowNumber[i].onMouseMove($event)"
            @mouseout="myTable.$rowNumber[i].onMouseOut($event)"
            @dragover='myTable.$rowNumber[i].dragOver($event)'
            @dragleave="myTable.$rowNumber[i].dragLeave($event)"
            @dragenter="myTable.$rowNumber[i].dragEnter($event)"
            @drop='myTable.$rowNumber[i].drop($event)'
          >
            <div v-bind:style="myTable.$rowNumber[i].cell.style">{{myTable.$rowNumber[i].cell.content}}</div>
          </th>
          <!-- TopLeft  -->
          <th
            class="colNumber"
            tabindex="1"
            v-if='i===0 && myTable.$tableHeadLeft[0] && myTable.$tableHeadTop[0]'
            :colspan="myTable.theadLeftEntity.side2"
            :rowspan="myTable.theadTopEntity.side2"
            v-bind:style="myTable.tableHeadTopLeft.style"
          >
            <div v-bind:style="myTable.tableHeadTopLeft.cell.style">
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
            :colspan="th.span1"
            :rowspan="th.span2"
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
              @dblclick="th.cell.onDbClick()"
              v-bind:style="[th.cell.style]"
              v-if="th.cell.displayClass[th.cell.status].displayType == 'text'"
              :title="th.cell.title"
            >
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
              @click="th.cell.onClick($event)"
            >{{th.cell.content}}</button>

          </th>
        </tr>
      </thead>
    </table>
    <SelectBox
      :inputTable="myTable"
      positionType='top'
      v-if="myTable"
    ></SelectBox>
  </div>

</template>

<script lang="ts">
  import { Vue } from "vue-property-decorator";
  import { BaseTable } from "../../viewModule/table/BaseTable";
  export default Vue.component("TopFixTable", {
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
