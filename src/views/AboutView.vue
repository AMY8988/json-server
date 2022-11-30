<template>
  <div class=" container about">
    <div class="row">
      <div class="col-12">
        <h1>Edit Json Server</h1>
        <div class="d-flex  flex-column align-items-center">
          <div class="col-5">
          <div class=" ">
              <input v-model="title" placeholder="Title" type="text" class=" form-control my-2">
              <textarea v-model="description" placeholder=" description" name="" class=" my-2 form-control" id="" cols="50" rows="10"></textarea>  
              <div class=" col-4 my-2">
                <input v-model="author" placeholder="author" type="text" class=" form-control">
                
              </div>
              <button @click="addPost()" class=" btn btn-outline-primary rounded ">Submit</button>
              
          </div>
        </div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import axios from "axios"

export default {
  data() {
    return {

      title: "",
      description: "",
      author: "",
      
    }
  },
  methods: {
    addPost() {
      let newdata = {
        title : this.title,
        description : this.description,
        author : this.author
      };
      console.log(newdata)
      

      

      if(this.title == ""){
        alert("can't add newpost")
      }else{
        axios.post("http://localhost:3000/posts" , newdata);
        this.title = "";
        this.description ="";
        this.author = "";
      }
      
        
        
      
    }
    
  }
  
}
</script>