
function preproHPP1(){
  const scriptURL =
  "https://script.google.com/macros/s/AKfycbxY7Waup2n1s6ewb73E7LxDjUgNUnGKMLr4FQCW6chhFfy7E2xeD37Sz39p93pNxi91/exec";
const form = document.forms["home-product-1-order-form-submit-to-google-sheet"];
const msg = document.getElementById("OrderMsg");
// const feedsubmit  = document.getElementById('FeedSubmit');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //alert("your Message has been sent Successfully!");
  document.querySelector("#HomPro1FormSubmit").value = "Submiting...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
    (response) => {
      msg.innerHTML =
        '<div data-form-alert="" class="alert alert-success col-12">Order is Placed!</div>';
      document.querySelector("#HomPro1FormSubmit").value = "submit";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    }
  );
});

}


// MORE PRO PAGE
//product 1 ka script
