<script setup>
import { useWindowSize, useWindowScroll } from "@vueuse/core";
import { computed } from "vue";

const { height } = useWindowSize();

const { y } = useWindowScroll();

let por = computed(() => {
  return (y.value / height.value) * 100;
});
</script>

<template>
  <div class="wall">
    <!-- page1 -->
    <div class="full-section page1">
      <div class="top-name">
        <h1>Jackson Almeida</h1>
        <div class="hehe">{{ y }} - {{ height }} - {{ por }}</div>
      </div>
      <div class="boxes">
        <div class="top-boxes">
          <h1>Born to be wild</h1>
        </div>
        <div class="top-gradient"></div>
      </div>
    </div>
    <div class="full-section page2">
      <div class="top-page2">
        <div class="img-block design">
          <h1>Design</h1>
          <img src="./assets/2.jpg" alt="" />
        </div>

        <div class="img-block produce">
          <h1>Produce</h1>
          <img src="./assets/1.webp" alt="" />
        </div>
      </div>

      <div class="img-block info-block">
        <h1 class="info">+ 1000 Design</h1>
        <h1 class="info">Unlimited developments</h1>
        <h1 class="info">Liability</h1>
        <h1 class="info">Confidence</h1>
      </div>
    </div>
    <div class="full-section"></div>
  </div>
</template>

<style scoped>
.hehe {
  position: fixed;
  top: 2;
  right: 90px;
  color: aqua;
}
.wall {
  /* display: flex;
  flex-direction: column;
  height: auto; */
}

.full-section {
  height: 100vh;
  text-align: center;
}

/* page 1 */
.page1 {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.top-name > h1 {
  font-size: 56px;
}

.boxes {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
}

.boxes .top-boxes {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  height: 100%;

  position: sticky;
  font-size: 66px;
}

.boxes .top-gradient {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(231, 231, 231, calc(v-bind(por) / 100)) 100%,
    rgba(36, 36, 36, 1) 25%
  );
  transform: translateY(calc(70% - 2% * v-bind(por)));

  display: flex;
  align-items: flex-end;
  justify-content: center;
}

/* page2 */

.page2 {
  padding: 20px;

  display: flex;
  flex-direction: column;
}

.top-page2 {
  display: flex;
  flex-direction: row;
}

.img-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
}

.img-block > h1 {
  width: 100%;
  /*  background-color: red; */

  display: flex;
  justify-content: start;
}

.img-block > img {
  background-color: red;
  border-radius: 20px;
  width: 700px;
  height: 500px;
  border: 2px solid lightblue;
}

.design {
  margin-left: 100px;
  transform: translateX(calc(50% - 1% * v-bind(por)));
  /* transform: translateY(calc(50% - 1% * v-bind(por))); */
}

.produce {
  margin-left: -200px;
  transform: translateX(calc(50% - 1% * v-bind(por)));
}

.info-block {
  margin-top: 100px;
}

.info {
  color: rgb(229, 234, 238, min((v-bind(por)), 100));
}
</style>
