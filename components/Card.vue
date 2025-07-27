<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue";
import { useData } from "vitepress";
const props = defineProps({
  size: String,
  title: String,
  description: String,
  video: String,
  image: String,
  link: String,
});
const styles = ref({
  size:
    (props.size ? Number(convertFractionIntoNumber(props.size)) * 100 : 100) +
    "%",
});
const { isDark } = useData();
const spinnerGif = `/spinner_${ref(isDark).value ? "dark" : "light"}.gif`;

onMounted(() => {
  // レンダリング完了後にspinnerを表示させないよう、強制的にビデオの再生と一時停止を行う
  document.querySelectorAll("video").forEach((video) => {
    video.play().then(() => video.pause());
    // video.play();
    // video.pause();
  });
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

function convertFractionIntoNumber(fractionString: String): Number {
  // 分数表記の文字列を"/"で分割
  const parts = fractionString.split("/");

  if (parts.length !== 2 || Number(parts[1]) === 0) {
    throw new Error(`分数表記でない文字列が指定されました: ${fractionString}`);
  }

  // 分子を分母で割り、小数を返す
  return Number(parts[0]) / Number(parts[1]);
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
        :poster="spinnerGif"
        muted
        loop
        playsinline
        preload="auto"
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
      width: 100%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-clamp: 2;
    }
    p {
      white-space: pre-line;
      width: 100%;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      line-clamp: 3;
    }
  }

  .media-box {
    display: flex;
    justify-content: center;
    .media-content {
      max-height: 270px;
      max-width: 85%;
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
