<template>
  <div class="container home">
    <div class="row">
      <div class="col-12 mt-4 text-start">
        <button @click="list() "  class="list btn btn-outline-info border-0 me-1">
          <i class=" fa fa-list"></i>
        </button>
        <button @click="grid()" class="grid btn btn-outline-info border-0">
          <i class=" fa fa-th-large"></i>
        </button>
      </div>
    <HelloWorld v-if="gridVlog " msg="Welcome to Your Vue.js App"/>
    <ListVlog v-else="listVlog" msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ListVlog from "@/components/ListVlog.vue"
import { faL } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    ListVlog
  },
  data() {
    return {
      listVlog : false,
      gridVlog : false
      
    }
  },
  methods: {
    grid() {
       this.gridVlog = true;
       this.listVlog = false;
      
    },
    list() {
      this.listVlog =true;
      this.gridVlog = false;
    }
  },
}
</script>
