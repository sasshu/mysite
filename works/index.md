---
layout: home
hero:
  text: Works
  tagline: これまでに開発したアプリの一覧です。
---

<script setup>
import Card from '../components/Card.vue'
</script>

<!-- # Works

これまでに開発したアプリの一覧です。 -->

<div class="work-list">
  <Card
    size="0.5"
    color="#c8e7fa"
    title="yamapan"
    description="シールを集めながらその合計点数を計算することができるスマホアプリです。某パン製造メーカーのキャンペーン時には必須です（昔作ったのでもう動かないと思われます...）。"
    video="/works/yamapan.mp4"
  />
  <Card
    size="0.5"
    color="#c8e7fa"
    title="パネルメモ"
    description="Chromeの拡張機能です。サイドパネルを開いてメモを取ることができます。中身はVueで作りました。400人の方に使っていただいています。"
    video="/works/panelmemo.mp4"
  />
  <Card
    size="0.5"
    color="#c8e7fa"
    title="keypick"
    description="パスワードやよく使うテキスト等を管理できるデスクトップアプリです。electronとバニラJSでできています。個人的に仕事でよく使います。"
    video="/works/keypick.mp4"
  />
</div>

<style lang="scss" scoped>
.work-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
