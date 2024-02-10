




























//after 3 step const feedsubmit  = document.getElementById('FeedSubmit');

/*const AppScriptURL = "https://script.google.com/macros/s/AKfycby5AjDWLAYxUpsjIKRchrj3veya6pXE7ewZkws7iJdljgoSSFPGvXGtHjG83G2zu6-TSQ/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector("#FeedSubmitBtn").value = "Submiting...";
  fetch(AppScriptURL, {method: "POST", body: new FormData(form)})
  .then(resp => {
    msg.innerHTML = '<div data-form-alert="" class="alert alert-success col-12">Thanks for your feed Back</div>';
    document.querySelector("#FeedSubmitBtn").value = "Submit Your Feedback";
    setTimeout(function () {
      msg.innerHTML = "";
    }, 5000);
    form.reset();
  })
  //.catch(error => console.error('Error!', error.message))

})*/

/*form.addEventListener("submit", (e) => {
  e.preventDefault();
  //alert("your Message has been sent Successfully!");
  document.querySelector("#FeedSubmit").value = "Submiting...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(
    (response) => {
      msg.innerHTML =
        '<div data-form-alert="" class="alert alert-success col-12">Thanks for your feed Back</div>';
      document.querySelector("#FeedSubmit").value = "Submit Your Feedback";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    }
  );
});
*/





// codewithsundeep tutorial
//        let form = document.querySelector("#FeedForm");
//        form.addEventListener('submit', (e) => {
//            e.preventDefault();
//            document.querySelector("#FeedSubmit").value = "Submiting...";
//            let data = new FormData(form);
//            fetch('https://script.google.com/macros/s/AKfycby5AjDWLAYxUpsjIKRchrj3veya6pXE7ewZkws7iJdljgoSSFPGvXGtHjG83G2zu6-TSQ/exec', {
//                method: "POST",
//                body: data
//            })
//            .then(res => res.text())
//            .then(data => {
//                document.querySelector("#msg").innerHTML = data;
//                document.querySelector("#FeedSubmit").value = "Submit Your Feedback";
//            });
//        })
// Form inputs clear karnay k leay
//        let btnClear = document.querySelector("#ClearForm");
//        let inputs = document.querySelectorAll(".inpts");
//        btnClear.addEventListener('click', () => {
//            inputs.forEach(inpts => inpts.value = '');

//        } )

// var url = "https://script.google.com/macros/s/AKfycby5AjDWLAYxUpsjIKRchrj3veya6pXE7ewZkws7iJdljgoSSFPGvXGtHjG83G2zu6-TSQ/exec";

// var form = document.querySelector('#FeedForm');
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();   //yeh reload sai bachaiga
//     document.querySelector("#FeedSubmit").value = "Submiting..";
//     var d = new FormData(form);
//     fetch(url,{
//         method: "POST",
//         body: d
//     })
//     .then((res)=>res.text())
//     .then((finalRes)=>{
//         document.querySelector("#msg").innerHTML = d;
//         document.querySelector("#FeedSubmit").value = "Submit";
//     });

// })
