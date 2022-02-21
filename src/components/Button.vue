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
        this.$emit('btn-click');
      }
    }

}
</script>

<style>

</style>