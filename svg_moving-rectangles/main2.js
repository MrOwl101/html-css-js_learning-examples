let index = 0;

document.body.addEventListener('keydown',(event)=>
  {

    const renderZone = document.querySelector("#playField");
    const inner = document.createElement('div');
    inner.classList.add('basicBox');

    if (event.target.matches('input, textarea, select, [contenteditable="true"]')) return;

    if(event.key == "l")
    {
        inner.setAttribute("id", index);
        inner.textContent = "right" + " " + index;
        inner.classList.add('toleft');
        renderZone.appendChild(inner);
        index += 1;
        console.log(index);
    }

    if(event.key == "j")
    {
        inner.setAttribute("id", index);
        inner.textContent = "down" + " " + index;
        inner.classList.add('clc');
        renderZone.appendChild(inner);
        index += 1;
        console.log(index);
    }

    if(event.key == "k")
    {
        inner.setAttribute("id", index);
        inner.textContent = "up" + " " + index;
        inner.classList.add('clc');
        renderZone.appendChild(inner);
        index += 1;
        console.log(index);
    }

    


  })