<template v-if="nodes.length">
  <div class="tree-node">
    <ul class="tree-node__list">
      <li class="tree-node__item" v-for="node in nodes" :key="node.node?.name || node.name">
        <span
          ref="nodeNames"
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
  methods: {
    showDescription(node) {
      this.$emit("show-description", node);
    },
    addTreeLines() {
      this.$nextTick(() => {
        const nodeNames = this.$refs.nodeNames;
        if (!nodeNames) return;

        nodeNames.forEach((nodeName, index) => {
          const node = this.nodes[index];
          if (node.children && node.children.length) {
            const childNodes = nodeName
              .closest(".tree-node__item")
              .querySelectorAll(":scope > .tree-node > .tree-node__list > .tree-node__item > .tree-node__item__name");

            childNodes.forEach(childNode => {
              const verticalLine = document.createElement("div");
              verticalLine.className = "tree-node__item__name__line tree-node__item__name__line--vertical";

              const horizontalLine = document.createElement("div");
              horizontalLine.className = "tree-node__item__name__line tree-node__item__name__line--horizontal";

              const parentRect = nodeName.getBoundingClientRect();
              const childRect = childNode.getBoundingClientRect();

              const verticalHeight = childRect.top + childRect.height / 2 - parentRect.bottom;
              const horizontalWidth = parentRect.left + parentRect.width / 1.6 - childRect.left;

              verticalLine.style.top = `${nodeName.offsetHeight}px`;
              verticalLine.style.height = `${verticalHeight}px`;

              horizontalLine.style.top = `${verticalHeight + nodeName.offsetHeight}px`;
              horizontalLine.style.width = `${horizontalWidth}px`;

              nodeName.appendChild(verticalLine);
              nodeName.appendChild(horizontalLine);
            });
          }
        });
      });
    }
  },
  mounted() {
    this.addTreeLines();
  },
  updated() {
    this.addTreeLines();
  }
};
</script>
