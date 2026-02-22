// main site (visible by default)
// 
document.getElementById("myForm").addEventListener("submit",
    function(Event)
    {
        Event.preventDefault();

        // getting data inputed by the user in text field of a form
        const myFormData = new FormData(Event.target);
        let textInputValue = myFormData.get("userAddedText");

        localStorage.text = textInputValue;

        // creating div
        const boxesColumn = document.getElementById("textBoxesColumn");
        let myDiv = document.createElement('div');
        myDiv.className = "box";
        myDiv.textContent = textInputValue;
        boxesColumn.appendChild(myDiv);
    }
)

// Eventlistener on a red button - to remove all .box'es
document.querySelector('input[name="resetAll"]').addEventListener('click',
    function(Event)
    {
        let boxes = document.querySelectorAll(".box");
        
        for(let i=0; i<boxes.length; i++)
        {
            boxes[i].remove();
        }
    }
)

// Catching all global shortcuts, and handling them
document.body.addEventListener("keydown",
    function(Event)
    {
        // preventing shortcuts from beeing triggered while inputing data into text area of a form
        if (Event.target.matches('input, textarea, select, [contenteditable="true"]')) return;

        const boxesColumn = document.getElementById("textBoxesColumn");
        let myDiv = document.createElement('div');

        // creating box using shortcut
        if(Event.key == "l")
        {
            
            myDiv.className = "box";
            myDiv.textContent = "added by a shortcut";
            boxesColumn.appendChild(myDiv);
        }

        // removing last box - using shortcut
        if(Event.key == "x")
        {
            let boxes = document.querySelectorAll(".box");
            if(boxes.length > 0)
            {
                boxes[boxes.length - 1].remove();
            }
           
        }

        // toggling overlay
        if(Event.key == "e")
        {
            let zone = document.getElementById('inputShade');
            if(zone.style.display == "none")
            {
                zone.style.display = "flex";
            }
            else if(zone.style.display == "flex")
            {
                zone.style.display = "none";
            }
        }

        // exiting overlay
        if(Event.key == "Escape")
        {
            let zone = document.getElementById('inputShade');
            zone.style.display = "none";
        }

        // entering overlay
        if(Event.key == "F2")
        {
            let zone = document.getElementById('inputShade');
            zone.style.display = "flex";

            // focus on dialog window, when opened
            document.getElementById("overlayInput").focus();
        }
    }
)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// overlay stuff

document.getElementById("overlayInput").addEventListener("keydown",
    function(Event)
    {
        if(Event.key == "Escape")
        {
            // opposite of focus()
            document.getElementById("overlayInput").blur();
        }
    }
)

document.getElementById("overlayForm").addEventListener('submit',
    function(Event)
    {
        Event.preventDefault();

        // getting data inputed by the user in text field of a form
        const myFormData = new FormData(Event.target);
        let textInputValue = myFormData.get("userAddedText");

        // creating div
        const boxesColumn = document.getElementById("textBoxesColumn");
        let myDiv = document.createElement('div');
        myDiv.className = "box";
        myDiv.textContent = textInputValue;
        boxesColumn.appendChild(myDiv);
    }
)

// example function showing how to make txt, and download it to computer

function downloadTxt()
{
    let text_data = "default / storage empty";


    // checking if localstorage value exists, and using it
    let storage_text = localStorage.getItem("text");
    if(storage_text !== null)
    {
        text_data = storage_text;
    }

    const blob = new Blob([text_data],{ type: "text/plain"});
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "data.txt";

    a.click();


    URL.revokeObjectURL(url);
}