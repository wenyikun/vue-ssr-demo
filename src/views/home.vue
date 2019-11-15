<template>
  <div class="wrap">
    <img src="@/assets/1.jpg" />
    <img class="blur" src="@/assets/1.jpg" />
    <img class="brightness" src="@/assets/1.jpg" />
    <img class="contrast" src="@/assets/1.jpg" />
    <img class="grayscale" src="@/assets/1.jpg" />
    <img class="huerotate" src="@/assets/1.jpg" />
    <img class="invert" src="@/assets/1.jpg" />
    <img class="opacity" src="@/assets/1.jpg" />
    <img class="saturate" src="@/assets/1.jpg" />
    <img class="sepia" src="@/assets/1.jpg" />
    <img class="shadow" src="@/assets/1.jpg" />
    <img src="@/assets/back.png" />
    <img src="@/assets/logo.png" />
  </div>
</template>

<script>
export default {
  asyncData({ route, store }) {
    store.commit("setTitle", "首页");
    store.commit("setPath", route.path);
  },
  computed: {
    title() {
      return this.$store.state.title;
    },
    path() {
      return this.$store.state.path;
    }
  },
  mounted() {
    this.$store.commit("setTitle", "首页");
    this.$store.commit("setPath", this.$route.path);
  }
};
</script>

<style lang="scss">
img {
  width: 300px;
  float: left;
}
.blur {
  -webkit-filter: blur(4px);
  filter: blur(4px);
}
.brightness {
  -webkit-filter: brightness(0.3);
  filter: brightness(0.3);
}
.contrast {
  -webkit-filter: contrast(180%);
  filter: contrast(180%);
}
.grayscale {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
.huerotate {
  -webkit-filter: hue-rotate(180deg);
  filter: hue-rotate(180deg);
}
.invert {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}
.opacity {
  -webkit-filter: opacity(50%);
  filter: opacity(50%);
}
.saturate {
  -webkit-filter: saturate(7);
  filter: saturate(7);
}
.sepia {
  -webkit-filter: sepia(100%);
  filter: sepia(100%);
}
.shadow {
  -webkit-filter: drop-shadow(8px 8px 10px green);
  filter: drop-shadow(8px 8px 10px green);
}
</style>
