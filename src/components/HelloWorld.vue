<template>
  <div class= " container hello">
    <div class="row align-items-start">
      <div v-if="lists.length == 0" class="col-12">
        <h3 class=" text-black-50"> News admin Dashboard with vuejs</h3>
      </div>
      <div v-else v-for="list in lists" :key="list.id"  class=" col-3  my-5">
            <div class="text-start border border-0 shadow p-3 rounded">
              <h4 class=" text-center fw-bolder"> {{list.title}} </h4>
              <p class=" text-center text-black-50"> {{list.description}} </p>
              <span class=" text-black ">- {{list.author}} </span>
            </div>
          </div>
    </div>
    
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'HelloWorld',
  data() {
    return {
      title: "",
      description: "",
      author: "",
      lists: []
    }
  },
  mounted(){
      
        axios.get('http://localhost:3000/posts')
        .then(response => {
          console.log(response.data)
          this.lists = response.data
        
        })
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
