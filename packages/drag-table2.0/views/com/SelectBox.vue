 <template>
  <div style="position:absolute;display:contents">
    <div
      v-for="(val, key) in myTable.$selectBoxEntity.selectList"
      v-if="val.position.table === myTable.position.table && val.selectBoxType === positionType"
      v-bind:key="key"
      v-bind:style="{
      position: 'absolute',
      top:val.style.top+'px',
      left:val.style.left+'px'
      }"
    >
      <span  >
        <div v-bind:style="val.topStyle"></div>
        <div v-bind:style="val.rightStyle"></div>
        <div v-bind:style="val.bottomStyle"></div>
        <div v-bind:style="val.leftStyle"></div>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from "vue-property-decorator";
  import { BaseTable } from "../../viewModule/table/BaseTable";
  export default Vue.component("SelectBox", {
    props: {
      inputTable: Object,
      positionType: String
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
