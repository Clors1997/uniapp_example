<script>
  export default {
    onLaunch: function() {
      console.log('App Launch')

      // #ifdef APP-PLUS || APP-PLUS-NVUE
      plus.screen.lockOrientation('portrait-primary'); //锁定竖屏
      // #endif
    },
    onShow: function() {
      console.log('App Show')
    },
    onHide: function() {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
  /* #ifndef APP-NVUE */
  /* 引入官方样式库 */
  @import "./common/uni.css";
  /* animate */
  @import "./common/animate.css";
  /* icon */
  // @import "./common/icon.css";
  @import "uview-ui/index.scss";
  /* #endif */



  /* tree默認樣式庫 */
  @import "common/free.css";

  /* 全局样式库 */
  @import "common/common.css";

  /* 圖標庫 */
  /* #ifndef APP-NVUE */
  @import "common/iconfont.css";
  /* #endif */
</style>
