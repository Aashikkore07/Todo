// document.querySelector("#btn-1").addEventListener("click",function(){
//     document.querySelector("#input-box").textContent=null;
// })
document.querySelector("#btn-1").addEventListener("click", function() {
    // document.querySelector("#input-box").value = ""; // Clear the input box
    var inputvalue = document.querySelector("#input-box").value;
    var newparagraph = document.createElement("p");
    newparagraph.textContent = inputvalue;
    document.querySelector(".container1") .appendChild (newparagraph);
    document.querySelector("#input-box").value = "";
  });

  