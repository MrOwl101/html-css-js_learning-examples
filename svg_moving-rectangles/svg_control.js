let rect_transform_position = 1;

document.addEventListener("keydown", function(event){

    let x = document.querySelectorAll('rect');
    
    if(event.code === "ArrowRight")
    {
        
        for(i=0 ; i<x.length ; i++)
        {
            x[i].style.transform = `translateX(${rect_transform_position*100}px)`;
        }
        rect_transform_position+=1;

        let rect = x[1].getBoundingClientRect();
        console.log(rect.left, rect.top);

        console.log("space")
    }

    if(event.code === "ArrowLeft")
    {
        rect_transform_position-=1;

        // const style = window.getComputedStyle(x[0]));
        // const matrix = new DOMMatrixReadOnly(style.transform);
        // console.log(matrix.m41); // translateX pos

        for(i=0 ; i<x.length ; i++)
        {
            x[i].style.transform = `translateX(${rect_transform_position*100}px)`;
        }
        console.log("space")
    }

    if(event.key === "x")
    {
        rect_transform_position = 1;
        for(i=0 ; i<x.length ; i++)
        {
            x[i].style.transform = `translateX(0px)`;
        }
        console.log("reset")
    }
})