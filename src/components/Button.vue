<template>
  <button :style="{background: color}" @click="onClick()"  class="btn" >{{title}}</button>
</template>

<script>
export default {
    name: 'Button-Component',
    props:{
        title: String,
        color: String
    },
    methods:{
      onClick(){
        console.log("hello from click");
      }
    }

}
</script>

<style>

</style>