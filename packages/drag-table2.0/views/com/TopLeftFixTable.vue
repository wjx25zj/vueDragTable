 <template>
  <div class="fix-top-left-table">
    <table
      v-if='myTable && myTable.$rowNumber[0] && myTable.$colNumber[0]'
      class='my-table left-top-table'
      cellspacing="0"
      cellpadding="0"
      border="0"
    >
      <thead>
        <tr v-if="myTable.isShowColIndex && myTable.isShowRowIndex">
          <!-- IndexTopLeft  -->
          <th
            tabindex="1"
            class="rowNumber"
            v-bind:style="{padding:myTable.$rowNumber[0].style.padding,background:myTable.$rowNumber[0].style.background}"
          >
            <div v-bind:style="{width:myTable.$rowNumber[0].style.width, height:myTable.$colNumber[0].style.height,lineHeight:myTable.$colNumber[0].style.height}">
              {{myTable.isTopLeftShow? myTable.topLeftValue:''}}
            </div>
          </th>

          <th
            v-for="(th,i) in myTable.theadLeftEntity.$leafIndexList2"
            tabindex="1"
            class="colNumber"
            v-bind:style="myTable.$colNumber[i].style"
            @mousedown="myTable.$colNumber[i].onMouseDown($event)"
            @mouseout="myTable.$colNumber[i].onMouseOut($event)"
            @mousemove="myTable.$colNumber[i].onMouseMove($event)"
            @click="myTable.$colNumber[i].onClick($event)"

            @dragenter='myTable.$colNumber[i].dragEnter($event)'
            @dragleave='myTable.$colNumber[i].dragLeave($event)'
            @dragover='myTable.$colNumber[i].dragOver($event)'
            @drop='myTable.$colNumber[i].drop($event)'
          >
            <div v-bind:style="myTable.$colNumber[i].cell.style">
              {{myTable.$colNumber[i].cell.content}}
            </div>
          </th>

        </tr>
        <tr
          v-if="myTable.isShowRowIndex"
          v-for='(tr, i) in myTable.$tableHeadTop'
          :key='tr+i'
        >
          <th
            v-bind:style="myTable.$rowNumber[i].style"
            class="rowNumber"
            tabindex="1"
            @click="myTable.$rowNumber[i].onClick($event)"
            @dragenter='myTable.$rowNumber[i].dragEnter($event)'
            @dragleave='myTable.$rowNumber[i].dragLeave($event)'
            @dragover='myTable.$rowNumber[i].dragOver($event)'
            @drop='myTable.$rowNumber[i].drop($event)'
            @mousedown="myTable.$rowNumber[i].onMouseDown($event)"
            @mouseout="myTable.$rowNumber[i].onMouseOut($event)"
            @mousemove="myTable.$rowNumber[i].onMouseMove($event)"
          >
            <div
              :title="myTable.$rowNumber[i].cell.content"
              v-bind:style="[myTable.$rowNumber[i].cell.style]"
            >
              {{myTable.$rowNumber[i].cell.content}}
            </div>
          </th>
          <!-- TopLeft  -->
          <th
            class="colNumber"
            tabindex="1"
            v-if='i === 0 && myTable.$tableHeadLeft[0] && myTable.$tableHeadTop[0]'
            :colspan="myTable.theadLeftEntity.side2"
            :rowspan="myTable.theadTopEntity.side2"
            v-bind:style="myTable.tableHeadTopLeft.style"
            style="border-width: 1px;"
          >
            <div v-bind:style="myTable.tableHeadTopLeft.cell.style">
            </div>
          </th>
        </tr>
      </thead>
    </table>
    <SelectBox
      :inputTable="myTable"
      positionType='top-left'
      v-if="myTable"
    ></SelectBox>
  </div>
</template>

<script lang="ts">
  import { Vue } from "vue-property-decorator";
  import { BaseTable } from "../../viewModule/table/BaseTable";
  export default Vue.component("TopLeftFixTable", {
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
