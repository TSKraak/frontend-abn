<template>
  <div v-if="visible" class="modal__overlay">
    <div class="modal">
      <div class="modal__header">
        <button @click="close" class="modal__close-btn">x</button>
      </div>
      <div class="modal__body">
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<style src="./ModalBlock.scss" scoped lang="scss" />

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
