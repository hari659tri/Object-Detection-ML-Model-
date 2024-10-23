import { createContext } from "react";

export const DrawRect=(detections,ctx)=>{
    detections.forEach(prediction => {
        const[x,y,width,height]=prediction['bbox'];
        const text=prediction['class'];
        const color="#"+Math.floor(Math.random()*16777215).toString(16);
        ctx.strokeStyle=color;
        ctx.font='29px Arial';
        ctx.fillStyle=color
        
         // draw rectangle 
         ctx.beginPath();
         ctx.fillText(text,x,y);
         ctx.rect(x,y,width,height);
         ctx.stroke();

    });
}