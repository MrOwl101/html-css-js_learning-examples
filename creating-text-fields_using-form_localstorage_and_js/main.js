// let kolumny = document.querySelector(".col");
// kolumny.append("hello");
// kolumny.querySelector("div").append(" hello");
// kolumny.onclick = function() { kolumny.append("hello") };
/* kolumny.onclick = function() { 
    let temp = kolumny.append(document.createElement("div"));
    //temp.className = "test"
};*/
// kolumny.onmouseover = function() { kolumny.style.background="red" };
// kolumny.onmouseleave = function() { kolumny.style.background="white" };
// kolumny.ondblclick = function () { kolumny.querySelector("div")}

////////////////////////////////////////////////////////////////////////////////////////////////////
/*
document.getElementById('myForm').addEventListener('submit', 
  function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const form = event.target;
    const formData = new FormData(form);

    // Convert FormData to a regular object (optional)
    //const data = Object.fromEntries(formData.entries());
    const txt = formData.get('userAddedText');

    //console.log(txt); // { username: "value", email: "value" }
    let zone = document.querySelector("#playField");
    let brr = document.createElement("br");
    zone.append(txt, brr);
    if(txt == "red")
    {
      zone.className="myBoxRed";
    }

    if(txt == "blue")
    {
      zone.className="myBoxBlue";
    }
      
   

  // You now have form data in a JS variable
});*/

document.getElementById("myForm").addEventListener('submit',
  function(ev)
  {
    ev.preventDefault();
    const formData = new FormData(ev.target);
    const text_input_value = formData.get('userAddedText');

    let renderZone = document.querySelector("#playField");

    const inner = document.createElement('div');
    inner.className = "tt";

    inner.textContent = text_input_value;

    localStorage.dane = text_input_value;
    console.log(localStorage.dane);

    if(text_input_value == "red")
    {
      inner.classList.add('myBoxRed');
    }

    if(text_input_value == "blue")
    {
      inner.classList.add('myBoxBlue');
    }

    renderZone.appendChild(inner);
      

    

    //renderZone.append(text_input_value, document.createElement("br"));

  });

  document.body.addEventListener('keydown',(event)=>
  {
    if (event.target.matches('input, textarea, select, [contenteditable="true"]')) return;

    if(event.key == "l")
    {
      document.getElementById('playField').append('keypress l',document.createElement("br"));
    }
  })

  // clear button

  document.getElementById("clear").addEventListener('submit',
    function(e)
    {
      e.preventDefault();
      console.log("clear");

      let tt = document.getElementsByClassName("tt")
      console.log(tt);

      while (tt.length > 0) {
        tt[0].remove(); // remove the first element each time
      }

      localStorage.dane="";

    }
  )

