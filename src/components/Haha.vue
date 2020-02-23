<template>
  <div id="haha">
    <div id="editor" ref="editor">HTML TABLE HERE</div>
    <div id="iframe-wrapper" :style="iframe.wrapperStyle">
      <iframe
            v-if="loaded"
        :src="iframe.src"
        :style="iframe.style"
        :height="iframe.style.height"
        :width="iframe.style.width"
        type="text/html"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class Haha extends Vue {
  iframe: any;

  data() {
    return {
      loaded: true,
      iframe: {
        src: window.location.href,
        style: null,
        wrapperStyle: null,
      }
    }
  }
  mounted() {
    let editor = this.$refs.editor;
    this.iframe.style = {
      position: 'absolute',
      width: window.innerWidth,
      height: window.innerHeight,
      top: "0px",
      left: "0px",
    };
    this.iframe.wrapperStyle = {
      overflow: 'hidden',
      height: "0px",
      width: "0px",
    }
    this.loaded = true;

  }
}
</script>

<style scoped>

</style>
