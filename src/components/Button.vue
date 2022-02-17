<template>
  <button :style="{background: color}"  class="btn" >{{title}}</button>
</template>

<script>
export default {
    name: 'Button-Component',
    props:{
        title: String,
        color: String
    }

}
</script>

<style>

</style>