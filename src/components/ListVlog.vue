<template>
    <div class= " container hello">
      <div class="row align-items-start">
        
        <div v-if="lists.length == 0" class="col-12">
          <h3 class=" text-black-50"> News admin Dashboard with vuejs</h3>
        </div>
        
        <div v-else class="col-9">
            <table  class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="text-start"  v-for="list in lists" :key="list.id">
                        <td>{{list.id}}</td>
                        <td>{{list.title}}</td>
                        <td>{{list.description}}</td>
                        <td>{{list.author}}</td>
                    </tr>
                </tbody>
              </table>
        </div>
        
      </div>
      
    </div>
  </template>
  
  <script>
  import axios from "axios"
  
  export default {
    name: 'ListVlog',
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
  