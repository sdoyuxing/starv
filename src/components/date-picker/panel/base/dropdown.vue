<template>
  <div style="height: 274px">
    <slot></slot>
  </div>
</template>
<script>
import Popper from "popper.js";
export default {
  name: "drop",
  props: {
    placement: {
      type: String,
      default: "bottom-start",
    },
  },
  data() {
    return {
      popper: "",
    };
  },
  mounted() {
    this.popper = new Popper(this.$parent.$el, this.$el, {
      placement: this.placement,
      forceAbsolute: true,
      modifiers: {
        computeStyle: {
          gpuAcceleration: false,
        },
        preventOverflow: {
          boundariesElement: "star",
        },
      },
      onCreate: () => {
        this.resetTransformOrigin();
        this.$nextTick(this.popper.update());
      },
      onUpdate: () => {
        this.resetTransformOrigin();
      },
    });
  },
  beforeDestroy() {
    if (this.popper) {
      this.popper.destroy();
    }
  },
  methods: {
    resetTransformOrigin() {
      let x_placement = this.popper.popper.getAttribute("x-placement");
      let placementStart = x_placement.split("-")[0];
      let placementEnd = x_placement.split("-")[1];
      const leftOrRight = x_placement === "left" || x_placement === "right";
      if (!leftOrRight) {
        this.popper.popper.style.transformOrigin =
          placementStart === "bottom" ||
          (placementStart !== "top" && placementEnd === "start")
            ? "center top"
            : "center bottom";
      }
    },
  },
};
</script>