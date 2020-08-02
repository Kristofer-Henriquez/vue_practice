var app = new Vue({
  el: "#app",
  data: {
    message: "Hello from JavaScript!",
    yolo: "yolo",
    name: "Kris",
    ShowInfo: false,
    fruits: ["pineapple", "mango", "cherry"],
    newFruit: "add new fruit here"
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
    addFruit: function() {
      console.log('adding fruit...');
      // get the user input 
      console.log(this.newFruit)
      // add that user input to the array
      this.fruits.push(this.newFruit);
    }
  }
});