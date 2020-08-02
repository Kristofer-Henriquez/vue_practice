var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    yolo: "yolo",
    name: "Kris",
    ShowInfo: false,
  },
  methods: {
    ChangeMessage: function() {
      console.log("changing message...");
      this.message = "hello from another dimension";
    },
    ToggleInfo: function() {
      console.log("hiding info...");
      this.ShowInfo = !this.ShowInfo;
    },
  }
});