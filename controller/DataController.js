import DataService from "../model/DataService.js";
import DataView from "../view/DataView.js";
import hibaView from "../view/HibaView.js";
import UrlapController from "./UrlapController.js";

class Controller{
    constructor(){
        console.log("test");
        this.dataService=new DataService()
        this.dataService.getData("../adat.json", this.megjelenit, this.hibaMegjelenit)
        
    }

    megjelenit(lista){
        console.log("controllerben", lista);
        new DataView(lista, $(".lista"))
    }

    hibaMegjelenit(error){
        console.log(error);
        new hibaView(error, $(".lista"))
    }
}
export default Controller