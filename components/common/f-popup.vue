<template>
  <view v-if="status" @click.stop="insideHide" class="position-fixed top-0 left-0 right-0 bottom-0 animated faster "
    :class="animatedStatus?'fadeIn':'fadeOut'"
    style="z-index:1000; background-color: rgba(0, 0, 0, 0.4);">
    <slot></slot>
  </view>
</template>

<script>
  export default {
    props: {
      spaceHide: {
        type: Boolean,
        default: true,
        animatedStatus: true
      }
    },
    data() {
      return {
        status: false
      };
    },
    methods: {
      insideHide() {
        if(this.spaceHide){
          this.animatedStatus = false
          setTimeout(() => {
            this.status = false
          }, 500)
        }
      },
      hide() {
        this.animatedStatus = false
        setTimeout(() => {
          this.status = false
        }, 500)
      },
      show() {
        this.animatedStatus = true
        this.status = true
      }
    }
  }
</script>

<style>

</style>
