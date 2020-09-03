<template>
  <article>
    <section>
      <h1>Icon 图标</h1>
      <p>
        starUI的图标使用了
        <a href="https://www.iconfont.cn/" target="_blank">Iconfont</a>的
        <a
          href="https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=22664"
          target="_blank"
        >Hippo Design 官方图标库</a>。扩展图标iconfont里下载要使用的图标的样式Icon组件的type为font class即可。
      </p>
    </section>
    <section>
      <h2>使用</h2>
      <pre v-highlight>
               <code class="html"> 
                {{iconCode}}
               </code>
            </pre>
    </section>
    <section>
      <div class="starv-icon-list" v-for="(item,index) in icon" :key="index">
        <Icon :type="item" />
        <div v-text="item"></div>
      </div>
    </section>
  </article>
</template>
<script>
import { icon, iconCode } from "../codeDemo/icon";
export default {
  data() {
    return {
      icon,
      iconCode
    };
  }
};
</script>