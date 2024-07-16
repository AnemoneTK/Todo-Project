<template lang="">
  <div>
    <router-link to="/">
    <button class="border px-2 mx-1">Home</button>
    </router-link>
    <router-link to="/create">
    <button class="border px-2 mx-1">Create</button>
    </router-link>
    <router-link to="/edit/1">
    <button class="border px-2 mx-1">Edit</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="">
  
</style>