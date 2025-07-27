---
layout: home
hero:
  text: Works
  tagline: これまでに開発したアプリの一覧です。
---

<script setup lang="ts">
import Card from '../components/Card.vue';
</script>

<div class="work-list">
  <Card
    size="1/2"
    title="yamapan"
    description="シールを集めながらその合計点数を計算することができるスマホアプリです。某パン製造メーカーのキャンペーン時には必須です（昔作ったのでもう動かないと思われます...）。"
    video="/works/yamapan.mp4"
    link="https://github.com/sasshu/yamapan"
  />
  <Card
    size="1/2"
    title="パネルメモ"
    description="Chromeの拡張機能です。サイドパネルを開いてメモを取ることができます。中身はVueで作りました。現在約3000人の方にインストールしていただきました。"
    video="/works/panelmemo.mp4"
    link="https://chromewebstore.google.com/detail/パネルメモ/jboecmpdefmkkhdbhlkgjpfliegpgcae?hl=ja"
  />
  <Card
    size="1/2"
    title="keypick"
    description="パスワードやよく使うテキスト等を管理できるデスクトップアプリです。ElectronとバニラJSでできています。個人的に仕事でよく使います。"
    video="/works/keypick.mp4"
    link="https://github.com/sasshu/keypick"
  />
  <Card
    size="1/2"
    title="ccsv"
    description="編集不可、閲覧限定のCSVファイルビューアです。手軽にソートやフィルタリングができます。ElectronとVueを使用したデスクトップアプリです。"
    video="/works/ccsv.mp4"
    link="https://github.com/sasshu/ccsv"
  />
  <Card
    size="1/2"
    title="picpiclock"
    description="時計やタイマーを手軽に表示・利用できるWebアプリです。ピクチャーインピクチャー機能を利用し、画面に固定表示することができます。"
    video="/works/picpiclock.mp4"
    link="https://sasshu.github.io/picpiclock/"
  />
</div>

<style lang="scss" scoped>
.work-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
