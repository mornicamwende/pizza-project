// $('.summary').hide();
// $('.customer').hide();

// $
// // cusomer order
// $(".continue").click(function (){
//   let flavo=$(".flavor:selected").val();
//   let crust=$(".crust:selected").val();
//   let size=$(".size:selected").val();
//   let toppings=$(".toppings:selected").val();
//   let number=$(".number:selected").val();
  
// });


$(document).ready(function() {
  //form function to submit the users input, calculate total for the order, and prompt the user for some details
    $("#continue").click(function(event) {
      //functions to get user input from the forms
      function flavor() {
        var pizzaFlavour = document.getElementById("flavor").value;
        return parseInt(pizzaFlavour);
      }
      function size() {
        var pizzaSize = document.getElementById("size").value;
        return parseInt(pizzaSize);
      }
      function crust() {
        var pizzaCrust = document.getElementById("crust").value;
        return parseInt(pizzaCrust);
      }
      function topping() {
        var pizzaTopping = document.getElementById("topping").value;
        return parseInt(pizzaTopping);
      }
      function number() {
        var pizzaNumber = document.getElementById("number").value;
        return parseInt(pizzaNumber);
      }
      function delivery() {
        var pizzaDelivery= document.getElementById("delivery").value;
        return parseInt(pizzaDelivery);
      }
  
      //a constructor to create objects/instances of a user's orders
      function Order(flavor, size, crust, topping, number, delivery) {
        this.newFlavor = flavor;
        this.newSize = size;
        this.newCrust = crust;
        this.newTopping = topping;
        this.newNumber = number;
        this.newDelivery=delivery;
      }
  
      //an object/instance (of the above constructor) to save the users order
      var userInput = new Order(flavor(), size(), crust(), topping(), number(), delivery());
  
      //a variable to store the total expenditure of the user
      var totalCost =
        (userInput.newSize +
          userInput.newCrust +
          userInput.newTopping +
          userInput.newFlavor *
          userInput.newNumber+
          userInput.newDelivery
        );
  
      //prompts for the user
      alert("Your charges for Pizza is" + totalCost);
      prompt("enter your email address");
      prompt("enter your phone number");
      prompt("enter your location");
      alert("Your pizza will be delivered");
  
      //a method to reset the form after all operations have been completed
      $("#text-center").reset();
  
      event.preventDefault();
    });
  });




















// contact us
$(document).ready(function(){
    $("#form1").submit(function(event){
  
      var name= $("#n").val();
      var email= $("#m").val();
      var comment= $("#comment").val();
      alert(name + ", we have received your message.Thank you for reaching out to us.")
    })
  })