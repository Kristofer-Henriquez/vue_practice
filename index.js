var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    yolo: "yolo",
  },
  methods: {
    ChangeMessage: function() {
      console.log("changing message...");
      this.message = "hello from another dimension";
    }
  }
});