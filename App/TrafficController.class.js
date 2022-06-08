
import { TrafficModel as Subject } from "./TrafficModel.class.js";


export class TrafficController extends Subject {

    constructor(props) {
        super(props);
        TrafficController.updateAllClients()
    }


    static updateAllClients(){
        let bulb1 = document.getElementById('light1')
        let bulb2 = document.getElementById('light2')
        let bulb3 = document.getElementById('light3')
        setInterval(() => {
            bulb1.classList.add('light')
            bulb2.classList.add('light')
            bulb3.classList.add('light')

        }, 100);
    }

    getElem = (id) => document.getElementById(id)



}

let TrafficObject = new TrafficController()
