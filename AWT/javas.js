function demoExternalAlert(){
    alert("External Alert.");
}
function demoExternalConfirm(){
    if(confirm("Are you sure..??")){
        alert("YESSS");
    }
    else{
        alert("NOOOO");
    }
}
function demoExternalPrompt(){
    var Name=prompt("Enter name Here..");
    
    alert(Name);
}