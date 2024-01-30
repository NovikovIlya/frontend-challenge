<script setup lang="ts">
import { ref, watch } from 'vue';
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/message-box/style/css';
import style from '../assets/style.css';

//data
const active = ref(1)

//functions
const activeOne = ()=>{
  active.value = 1
}
const activeTwo = ()=>{
  active.value = 2
}
</script>

<template>
  <div class="navigation-example">
    <div class="containerNav">
      <RouterLink to="/"><div :class="{active: active === 1}" @click="activeOne" class="left"><span  class="text">Все котики</span></div></RouterLink>
      <RouterLink to="/favorite"><div :class="{active: active === 2}" @click="activeTwo" class="right"><span  class="text">Любимые котики</span></div></RouterLink>
    </div>
  </div>
</template>

<style scoped>

.containerNav{
  width: 90%;
  display: flex;

}
.navigation-example {
  background-color: #2196f3;
  box-shadow: var(--horizontal-sheet);
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  
}
.left{
  /* margin-left: 62px; */
}
.left,.right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 64px;
  cursor: pointer;
}
.right{
  width: 173px;
height: 64px;
}
.left:hover,.right:hover {
  background-color: #1976d2;
}
.active{
  background-color: #1976d2;
}
.text {
  color:#FFFFFF;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.25px;
  text-align: center;
}
</style>
