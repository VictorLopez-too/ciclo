window.onload  = () =>{
    let prueba =document.getElementById("prueba");
    let querystring = window.location.search;
    let params = new URLSearchParams(querystring);
    let jsonProyectos = loadJson();

    iniProject();

    function loadJson(){
        return [
            {},
            {},
            {},
            {}
        ]
    }

    function iniProject(){

        if(params.get("p") == null || jsonProyectos.length-1 < params.get("p") || 0 > params.get("p")){
            navigation.navigate("./index.html?p=0");
        }else{
            prueba.innerText = params.get("p"); 
        }
    }
}