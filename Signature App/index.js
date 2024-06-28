const colorPicker=document.getElementById("colorPicker");
const canvasColor=document.getElementById("canvasColor");
const canvas=document.getElementById("myCanvas")
const clearButton=document.getElementById("clearButton")
const saveButton=document.getElementById("saveButton")
const fontPicker=document.getElementById("fontPicker")
const retrieveButton=document.getElementById("retrieveButton")

const ctx=canvas.getContext("2d")

colorPicker.addEventListener("change",(e)=>{
    ctx.strokeStyle=e.target.value;
    ctx.fillStyle=e.target.value;
})

canvas.addEventListener("mousedown",(e)=>{
    isDrawing=true
    lastX=event.offsetX
    lastY=event.offsetY
})

canvas.addEventListener("mousemove",(e)=>{
    if(isDrawing){
        ctx.beginPath();
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(event.offsetX,event.offsetY)
        ctx.stroke()
        lastX=event.offsetX
        lastY=event.offsetY
    }
})
canvasColor.addEventListener("change",(e)=>{
    ctx.fillStyle=e.target.value;
    ctx.fillRect(0,0,800,500)
})
fontPicker.addEventListener("change",(e)=>{
    ctx.lineWidth = e.target.value;
})

canvas.addEventListener("mouseup",()=>{
    isDrawing=false
})



clearButton.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
})

saveButton.addEventListener("click",()=>{
    localStorage.setItem("canvasContexts",canvas.toDataURL())

    let link=document.createElement("a")

    link.download="my-canvas.png";

    link.href=canvas.toDataURL()

    link.click()
})

retrieveButton.addEventListener("click",()=>{
    let savedCanvas=localStorage.getItem("canvasContexts")
    if(savedCanvas){
        let img=new Image()
        img.src=savedCanvas
        ctx.drawImage(img,0,0);
    }
})