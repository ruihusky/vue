// boot up the demo
// eslint-disable-next-line no-undef
Vue.component('child-component', {
  template: '#child-component',
  mounted() {
    console.log('child mounted')
    setTimeout(() => {
      this.$emit('child-event')
    });
  }
})

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
    console.log('root mounted', this)
    setTimeout(() => {
      console.log("=====now set y=====");
      this.$set(this.parent, "y", "y");
      setTimeout(() => {
        console.log("=====now set ccy=====");
        this.$set(this.parent.child.cchild, "ccy", "y");
      }, 300);
    }, 300);
  },
  methods: {
    handleChildEvent(e) {
      console.log('child event handler', e)
    }
  }
});

