---
layout: home
hero:
  text: Articles
  tagline: これまでに書いた記事の一覧です。
---

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Card from '../components/Card.vue';

const zennFeedUrl: String = 'https://zenn.dev/sasshu/feed';
const feedData: any = ref({});
const formatDateString: String = ref(() => {});

onMounted(async () => {
  const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${zennFeedUrl}`);
  feedData.value = await res.json();
});

formatDateString.value = (feedItem) => {
  const description = feedItem.description;
  const firstLineEnd = description.indexOf('。');
  const firstLineBreak = description.indexOf(`\n`);

  let firstLineStart;
  // 改行前に最初の文がある
  if (firstLineEnd < firstLineBreak) {
    firstLineStart = 0;
  } else {
    firstLineStart = firstLineBreak + 1;
  }

  const targetLine = description.substring(firstLineStart, firstLineEnd + 1);
  const formattedDate = feedItem.pubDate.replace(/-/g, '/').slice(0, -9);
  return `${formattedDate}\n${targetLine}`;
}
</script>

<div class="article-list">
    <Card
      v-for="feedItem in feedData.items"
      size="1/3"
      :title="feedItem.title"
      :description="formatDateString(feedItem)"
      :image="feedItem.enclosure.link"
      :link="feedItem.link"
  />
</div>

<style lang="scss" scoped>
.article-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
</style>
