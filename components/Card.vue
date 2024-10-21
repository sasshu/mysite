<script setup lang="ts">
import { ref, defineProps } from "vue";
const props = defineProps({
  size: String,
  title: String,
  description: String,
  video: String,
  image: String,
  link: String,
});
const styles = ref({
  size: (props.size ? Number(props.size) * 100 : 100) + "%",
});

function playVideo(event: MouseEvent) {
  if (event.currentTarget instanceof HTMLElement) {
    const elem: HTMLVideoElement | null =
      event.currentTarget?.querySelector("video");
    elem?.play();
  }
}

function pauseVideo(event: MouseEvent) {
  if (event.currentTarget instanceof HTMLElement) {
    const elem: HTMLVideoElement | null =
      event.currentTarget?.querySelector("video");
    elem?.pause();
  }
}
</script>

<template>
  <div
    class="card"
    @mouseover="playVideo($event)"
    @mouseleave="pauseVideo($event)"
  >
    <div class="card-content">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="media-box">
      <img v-if="image" class="media-content" :src="image" />
      <video
        v-else-if="video"
        class="media-content"
        :src="video"
        muted
        loop
        playsinline
      ></video>
    </div>
    <div v-if="link" class="link-content">
      <a :href="link" target="_blank">詳しく見る</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  margin: 16px;
  width: calc(v-bind("styles.size") - 32px);
  background-color: var(--vp-c-bg-soft);
  padding: 24px;
  border-radius: 10px;
  transition: all 0.3s ease 0s;

  .card-content {
    h2 {
      padding: 0;
      margin: 0;
      border: none;
    }
  }

  .media-box {
    display: flex;
    justify-content: center;
    .media-content {
      max-height: 300px;
      max-width: 80%;
    }
  }

  .link-content {
    margin-top: 20px;
  }

  &:hover {
    transform: scale(1.05);
  }
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
  }
}
</style>
