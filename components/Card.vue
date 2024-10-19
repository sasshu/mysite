<script setup lang="ts">
import { ref, defineProps } from "vue";
const props = defineProps({
  size: String,
  title: String,
  description: String,
  video: String,
  image: String,
  alt: String,
});
const styles = ref({
  size: (props.size ? Number(props.size) * 100 : 100) + "%",
});

function playVideo(event: MouseEvent) {
  if (event.target instanceof HTMLElement) {
    const elem: HTMLVideoElement | null = event.target?.querySelector("video");
    elem?.play();
  }
}

function pauseVideo(event: MouseEvent) {
  if (event.target instanceof HTMLElement) {
    const elem: HTMLVideoElement | null = event.target?.querySelector("video");
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
    <div class="image-box">
      <video
        class="image-content"
        :src="video"
        muted="true"
        loop="true"
      ></video>
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

  .image-box {
    display: flex;
    justify-content: center;
    .image-content {
      max-height: 300px;
      max-width: 80%;
    }
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
