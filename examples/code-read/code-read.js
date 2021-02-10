// boot up the demo
// eslint-disable-next-line no-undef
new Vue({
  el: "#demo",
  data: {
    parent: {
      x: 1,
      child: {
        cx: 1,
        cchild: {
          ccx: 1,
        },
      },
    },
  },
  mounted() {
    setTimeout(() => {
      console.log("=====now set y=====");
      this.$set(this.parent, "y", "y");
      setTimeout(() => {
        console.log("=====now set ccy=====");
        this.$set(this.parent.child.cchild, "ccy", "y");
      }, 300);
    }, 300);
  },
});
