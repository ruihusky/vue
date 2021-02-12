// boot up the demo
// eslint-disable-next-line no-undef
Vue.component("hoc-com", {
  template: "#hoc-com",
  name: "HocComponent",
  data() {
    return {
      tag: "hoc-com",
    };
  },
  mounted() {
    console.log("hoc mounted");
  },
});

// eslint-disable-next-line no-undef
Vue.component("c-com", {
  template: "#c-com",
  name: "ChildComponent",
  data() {
    return {
      tag: "child-com",
    };
  },
  mounted() {
    console.log("child mounted");
  },
});

// eslint-disable-next-line no-undef
new Vue({
  el: "#demo",
  data() {
    return {};
  },
  mounted() {
    console.log("root mounted", this);
  },
  methods: {},
});
