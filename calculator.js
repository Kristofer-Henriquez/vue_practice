var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    number1: "2",
    number2: "3",
    number3: "6",
    product: "",
  },
  methods: {
    ProductNumber: function() {
      this.product = parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3);
    }
  }
});