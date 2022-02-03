<script setup lang="ts">
  import { onShow } from '@dcloudio/uni-app';

  onShow(() => {
    const updateManager = uni.getUpdateManager();
    updateManager.onUpdateReady(() => {
      console.log('即将重启自动应用新版本');
      updateManager.applyUpdate();
    });
  });
</script>

<style lang="stylus">
  @import "tailwindcss/utilities.css";

  ::-webkit-scrollbar
    width 0 !important
    height 0 !important

  page, div, scroll-view, img, image, span, textarea, input
    box-sizing border-box

  page
    height 100vh

    button
      border-radius 0
      padding 0
      margin-left 0
      margin-right 0
      outline none

      &::after
        display none

  .line-1
    text-overflow ellipsis
    white-space nowrap
    overflow hidden

  .fcc
    display flex
    justify-content center
    align-items center

  .flex
    display flex

  .main-left
    display flex
    justify-content flex-start

  .main-right
    display flex
    justify-content flex-end

  .main-justify
    display flex
    justify-content space-between

  .main-center
    display flex
    justify-content center

  .cross-center
    display flex
    align-items center
</style>
