<template>
  <div class="dialog-box" v-if="showAlert" @click="close">
    <div class="dialog">
      <h1 class="title">{{title}}</h1>
      <div class="content">
        <slot name="main"></slot>
      </div>
      <div class="btn-box" :style="{'padding':padding}">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
	props: ["showAlert", "title", "padding"],
	data() {
		return {};
	},
	methods: {
		close(e) {
			if ($(e.target).hasClass("dialog-box")) {
				this.$emit("closeAlert");
			}
		}
	}
};
</script>
<style lang="stylus" scoped>
.dialog-box {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 9;
  text-align: center;

  &::after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }
}

.dialog {
  display: inline-block;
  vertical-align: middle;
  min-width: 400px;
  border-radius: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  text-align: left;

  .title {
    text-align: center;
    font-size: 16px;
    color: #555;
    background-color: #F2F2F2;
    line-height: 50px;
    font-weight: 400;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid transparent;
  }

  .content {
    padding: 20px;
    max-height: 500px;
    overflow-y: auto;
  }

  .btn-box {
    text-align: right;
    padding: 10px 10px 20px;
  }
}
</style>
