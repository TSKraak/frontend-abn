<template v-if="nodes.length">
  <div class="tree-node">
    <ul class="tree-node__list">
      <li class="tree-node__item" v-for="node in nodes" :key="node.node?.name || node.name">
        <span
          :class="{ 'tree-node__item__name': true, 'tree-node__item__name--selected': node === selectedNode }"
          @click="showDescription(node)"
          >{{ node.node?.name || node.name }}
        </span>
        <template v-if="node.children && node.children.length">
          <tree-node
            :nodes="node.children"
            :selectedNode="selectedNode"
            @show-description="showDescription"></tree-node>
        </template>
      </li>
    </ul>
  </div>
</template>

<style src="./TreeNode.scss" lang="scss" />

<script>
export default {
  name: "TreeNode",
  props: {
    nodes: {
      type: Array,
      required: true
    },
    selectedNode: null
  },
  data() {
    return {
      hoveredNode: null
    };
  },
  methods: {
    showDescription(node) {
      this.$emit("show-description", node);
    }
  }
};
</script>
