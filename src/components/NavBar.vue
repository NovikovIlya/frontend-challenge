<script setup lang="ts">
import { onMounted, ref } from 'vue';
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/message-box/style/css';

//data
const active = ref(window.location.href.includes('favorite') ? 2 : 1);

//functions
const activeOne = () => {
  active.value = 1;
  localStorage.setItem('active', '1');
};
const activeTwo = () => {
  active.value = 2;
  localStorage.setItem('active', '2');
};

//Lifecycle hooks
onMounted(()=>{
  if(window.location.href.includes('favorite')){
    activeTwo()
  }else{
    activeOne()
  }
})

</script>

<template>
  <div class="navigation-example">
    <div class="containerNav">
      <RouterLink to="/frontend-challenge" class="td"
        ><div :class="{ active: active===1}" @click="activeOne" class="left">
          <span class="text">Все котики</span>
        </div></RouterLink
      >
      <RouterLink to="/frontend-challenge/favorite" class="td"
        ><div :class="{ active: active===2 }" @click="activeTwo" class="right">
          <span class="text">Любимые котики</span>
        </div></RouterLink
      >
    </div>
  </div>
</template>

<style scoped>
.td{
  text-decoration: none;
}
.containerNav {
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.left {
  /* margin-left: 62px; */
}
.left,
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 64px;
  cursor: pointer;
}
.right {
  width: 173px;
  height: 64px;
}
.left:hover,
.right:hover {
  background-color: #1976d2;
}
.active {
  background-color: #1976d2;
}
.text {
  color: #ffffff;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.25px;
  text-align: center;
}
@media screen and (min-width: 1441px) {
  .containerNav,.infinite-list{
    width: 75% ;
  }
  
}
@media screen and (max-width: 600px) {
  .containerNav {
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .left,.right{
    width: 100%;
  }
  
}
</style>
