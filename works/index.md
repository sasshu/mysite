---
layout: home
hero:
  text: Works
  tagline: これまでに開発したアプリの一覧です。
---

<script setup>
import Card from '../components/Card.vue'
</script>

<div class="work-list">
  <Card
    size="0.5"
    color="#c8e7fa"
    title="yamapan"
    description="シールを集めながらその合計点数を計算することができるスマホアプリです。某パン製造メーカーのキャンペーン時には必須です（昔作ったのでもう動かないと思われます...）。"
    video="/works/yamapan.mp4"
    link="https://github.com/sasshu/yamapan"
  />
  <Card
    size="0.5"
    color="#c8e7fa"
    title="パネルメモ"
    description="Chromeの拡張機能です。サイドパネルを開いてメモを取ることができます。中身はVueで作りました。現在約400人の方にインストールしていただきました。"
    video="/works/panelmemo.mp4"
    link="https://chromewebstore.google.com/detail/パネルメモ/jboecmpdefmkkhdbhlkgjpfliegpgcae?hl=ja"
  />
  <Card
    size="0.5"
    color="#c8e7fa"
    title="keypick"
    description="パスワードやよく使うテキスト等を管理できるデスクトップアプリです。ElectronとバニラJSでできています。個人的に仕事でよく使います。"
    video="/works/keypick.mp4"
    link="https://github.com/sasshu/keypick"
  />
</div>

<style lang="scss" scoped>
.work-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
