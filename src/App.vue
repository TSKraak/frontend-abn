<template>
  <div id="app">
    <h1>Graph Database Visualization</h1>
    <button @click="populateDatabase">Populate Database</button>
    <TreeNode :nodes="nodes" :selectedNode="selectedNode" @show-description="openModal" />
    <ModalBlock
      v-if="isModalVisible"
      :visible="isModalVisible"
      :content="modalContent"
      @close="closeModal"></ModalBlock>
  </div>
</template>

<style src="./App.scss" lang="scss" />

<script>
import axios from "axios";
import TreeNode from "./components/TreeNode.vue";
import ModalBlock from "./components/ModalBlock.vue";

export default {
  name: "App",
  components: {
    TreeNode,
    ModalBlock
  },
  data() {
    return {
      nodes: [],
      isModalVisible: false,
      modalContent: "",
      selectedNode: null
    };
  },
  methods: {
    async populateDatabase() {
      try {
        await axios.post("https://abn-backend.azurewebsites.net/populate");
        this.fetchNodes();
      } catch (error) {
        console.error(error);
      }
    },
    async fetchNodes() {
      try {
        const response = await axios.get("https://abn-backend.azurewebsites.net/nodes");
        this.nodes = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    openModal(node) {
      this.selectedNode = node;
      this.modalContent = node.description || node.node?.description;
      this.isModalVisible = true;
    },
    closeModal() {
      this.selectedNode = null;
      this.isModalVisible = false;
      this.modalContent = "";
    }
  },
  created() {
    this.fetchNodes();
  }
};
</script>
