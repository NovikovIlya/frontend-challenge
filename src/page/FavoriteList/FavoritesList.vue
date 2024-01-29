<script setup lang="ts">
import { computed, ref } from 'vue';

//data
const cartItems = ref(JSON.parse(localStorage.getItem('persons')) || []);

//functions
const deleteFavoriteCat = (person) => {
  const prev = JSON.parse(localStorage.getItem('persons')) || [];
  const newPrew = prev.filter((item) => item.id !== person.id);
  localStorage.setItem('persons', JSON.stringify(newPrew));

  cartItems.value = JSON.parse(localStorage.getItem('persons')) || [];
};
</script>

<template>
  <div v-if="cartItems" class="container2">
    <ul class="infinite-list" infinite-scroll-immediate="false">
      <TransitionGroup name="fade">
        <li v-for="person of cartItems" :key="person.id" class="infinite-list-item">
          <div @click="deleteFavoriteCat(person)" class="cat">
            <img
              class="catHover"
              :src="
                person.url
                  ? person.url
                  : 'https://myivancrismanalo.files.wordpress.com/2017/10/cropped-unknown_person.png'
              " />
            <img
              :class="{ hiddenWatch: false }"
              class="heart fullheart"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/45cce83542570fa99a82a171165d936e831b1ca10784f6b2df86696116852751?" />
          </div>
        </li>
      </TransitionGroup>
    </ul>
  </div>
</template>

<style scoped>
.zaga {
  width: 100%;
  text-align: center;
  margin-bottom: 30px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.25px;
}
.hiddenWatch {
  visibility: visible;
}
.watch {
  visibility: visible;
}
.cat {
  position: relative;
}
.catHover {
  width: 257px;
  height: 256px;
  cursor: pointer;
}

.heart {
  position: absolute;
  bottom: 19px;
  right: 15px;
  z-index: 1000;
}
.fullheart {
  position: absolute;
  bottom: 19px;
  right: 15px;
  z-index: 1000;
  visibility: visible;
  opacity: 0;
}

.cat:hover .fullheart {
  opacity: 1;
}

.name__info {
  font-size: 10px;
}
.container2 {
  padding-left: 5%;
  padding-right: 5%;
}
.infinite-list {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  list-style-type: none;
  padding-left: 0;
}
.photo {
  width: 100%;
  height: 45vh;
  border-radius: 20px 20px 0 0;
}
.personContainer {
  text-decoration: none;
  border: 2px transparent solid;
}
.infinite-list-item:hover {
  scale: 1.03;
  transition: 0.3s;
}
.infinite-list-item {
  border-radius: 20px;
  margin: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 56%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 20px;
}
.name {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.name__text {
  font-weight: 700;
  margin-bottom: 10px;
  width: 100%;
  justify-content: center;
  display: flex;
  font-size: 18px;
}
.elll {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  border-radius: 0 0 20px 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 600px) {
  .infinite-list2 {
    margin-bottom: 20px;
    grid-template-columns: 100%;
    padding: 0;
  }
  .infinite-list2-item {
    margin-bottom: 20px;
    width: 94%;
  }
  .elll {
    padding-top: 10px;
    width: 100%;
    margin: 0 auto;
  }
  .name {
    margin-bottom: 10px;
  }
}
</style>
