const roles=["MERN STACK DEVELOPER (FRESHER)","FRONTEND DEVELOPER (REACT.JS)","FRESHER | IMMEDIATE JOINER"];
let r=0,c=0,del=false;
const el=document.getElementById("typingText");
function type(){
  const cur=roles[r];
  if(!del){ el.textContent=cur.substring(0,c+1); c++; if(c===cur.length){ del=true; setTimeout(type,1500); return; } }
  else{ el.textContent=cur.substring(0,c-1); c--; if(c===0){ del=false; r=(r+1)%roles.length; } }
  setTimeout(type, del?50:90);
}
document.addEventListener("DOMContentLoaded",type);