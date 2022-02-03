<template>
  <div class="page-layout" :style="{ 'background-color': pageColor }">
    <!-- header -->
    <div v-if="showHeader" class="page-header">
      <slot name="header"></slot>
    </div>

    <!-- loading -->
    <div v-if="loading" class="page-loading fcc">
      <slot name="loading">
        <!-- <i-loading /> -->
      </slot>
    </div>

    <!-- main -->
    <scroll-view
      v-if="show && useScrollView"
      :refresherEnabled="refresherEnabled"
      :refresherTriggered="refresherTriggered"
      class="page-main"
      scroll-y="true"
      :style="{ 'background-color': color }"
      @refresherrefresh="$emit('refresh')"
      @scrolltolower="$emit('scrolltolower')"
      @scroll="$emit('scroll', $event.detail.scrollTop)"
    >
      <slot></slot>
    </scroll-view>

    <div
      v-else-if="show && !useScrollView"
      class="page-main box flex"
      :style="{ 'background-color': color }"
    >
      <slot></slot>
    </div>

    <!-- popup -->
    <!-- fix ios fixed -->
    <div class="page-popup">
      <slot name="popup"></slot>
    </div>

    <!-- footer -->
    <div v-if="showFooter" class="page-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 经典的可配置三段式布局（header、main、footer）可满足大部分应用场景
  import { computed, toRef } from 'vue';

  defineEmits(['refresh', 'scrolltolower', 'scroll']);

  interface Props {
    mode?: 'loading' | 'show';
    color?: string;
    pageColor?: string;
    useScrollView?: boolean;
    refresherEnabled?: boolean;
    refresherTriggered?: boolean;
  }

  const props = withDefaults(defineProps<Props>(), {
    mode: 'show',
    color: '#FFF',
    pageColor: '#FFF',
    useScrollView: true,
    refresherEnabled: false,
    refresherTriggered: false,
  });

  let mode = toRef(props, 'mode');
  let loading = computed(() => mode.value === 'loading');
  let show = computed(() => mode.value === 'show');
  let showHeader = computed(() => show.value);
  let showFooter = computed(() => show.value);
</script>

<style lang="scss" scoped>
  .page-layout {
    display: flex;
    flex-direction: column;
    // #ifdef MP-WEIXIN
    height: calc(100vh - env(safe-area-inset-bottom));
    // #endif
    // #ifdef MP-ALIPAY
    height: calc(100vh - constant(safe-area-inset-bottom));
    height: calc(100vh - env(safe-area-inset-bottom));
    // #endif
    overflow-x: hidden;
  }

  .page-loading {
    height: 100%;
  }

  .page-header {
    z-index: 2;
  }

  .page-main {
    flex: 1 1 0%;
    overflow-x: hidden;
  }

  .page-main.box {
    overflow-y: scroll;
  }

  .page-popup {
    height: 0;
  }
</style>
