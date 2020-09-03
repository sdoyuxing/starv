<template>
  <div>
    <ul :class="listClasses">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
import Popper from "popper.js";
const prefixCls = "sta-select";
export default {
  name: "Drop",
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
  computed: {
    listClasses() {
      return `${prefixCls}-dropdown-list`;
    },
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
    click() {
      this.$emit("on-click");
    },
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