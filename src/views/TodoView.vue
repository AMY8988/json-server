<template>
    <div class="container" >
          <div class="row justify-content-center align-items-center">
              <div class="col-12 col-lg-5">
                  <div class="my-3">
  
                     <Title title="Vue Js ToDo Lists"></Title>
                     
                      
                      <div class="row ">
                          <list-create-vue @create="create"></list-create-vue>
                      </div>
  
                      <div class="d-flex justify-content-between align-items-center my-3">
                          <p class=" mb-0 fw-bold">
                               To do list
                               <base-text-vue text="amy"></base-text-vue>
                          </p>
                          <span v-if="lists.length>0 && doneTotal == lists.length" class="badge bg-success border border-0 rounded-pill  ">
                              Done {{doneTotal}}
                              <i class="fas fa-circle-check"> </i>
                          </span>
                          <span v-else class="badge bg-info border border-0 rounded-pill  ">Done {{doneTotal}}</span>
                      </div>
  
                      <ul class="list-group">
                          <list-vue  v-for="list in lists" :key="list.id" @del="del" :list="list"></list-vue>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </template>
  
  <script>
  import BaseTextVue from '@/components/BaseText.vue';
  import listVue from '@/components/list.vue';
  import listCreateVue from '@/components/listCreate.vue';
  import titleVue from '@/components/title.vue';
  
  
  
  
  export default {
    components: { titleVue, listVue, listCreateVue, BaseTextVue },
    name: 'App',
    
    data() {
      return {
        currendId : 0,
        lists : []
      }
    },
    computed: {
        doneTotal(){
            return this.lists.filter(el=>el.isDone === true).length;
        }
    },
    methods : {
        create(x){
            if(x == ""){
                
            }else{
                this.currendId++;
                this.lists.push({
                    id: this.currendId ,
                    message: x ,
                    isDone: false,
                    isDelete:false
                    
                    
                })
                this.newMessage = "";
            }
        },
        del(x){
          
                 setTimeout(()=> this.lists =  this.lists.filter(el=>el.id !== x),500)
        },
                  
      }
  
  }
  </script>
  
  <style lang="scss">
  .hover{
    cursor: pointer;
  }
  .done{
      text-decoration: line-through !important;
  }
  .created{
      animation: 0.5s fadeInDown;
  }
  .shake{
      animation: 1s shakeX;
  }
  .zoom{
      animation: 0.5s zoomOut;
  }
  </style>
  