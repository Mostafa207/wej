var arr=[{
    name:"mostafa",
    pass:"mo2st0afa07"
}
]
function check(){
    var Name=document.getElementById("name");
    var Pass=document.getElementById("pass");
    for(var i=0;i<arr.length;i++){
        if(arr[i].name==Name.value&&arr[i].pass==Pass.value){
            
            console.log( "infor"+ arr );
        }  
        else{
            alert("no soka");
            console.log("no")
        }

    }
}