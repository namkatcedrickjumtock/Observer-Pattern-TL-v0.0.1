
import { TrafficModel as Subject } from "./TrafficModel.class.js";


export class TrafficController extends Subject {

    clientspreviousState = false
    bulbs = []
    constructor(props) {
        super(props);
        this.updateAllClients()
    }


     updateAllClients() {
        setTimeout(() => {
            let bulb = document.getElementsByClassName('bi-lightbulb')
            for (const items in bulb) {
                bulb[items].classList.add("text-success")
                this.bulbs.push(bulb[items])
                this.clientspreviousState = false
            }
            this.clientspreviousState = false
        }, 1000);
        if (!this.clientspreviousState){
            this.bulbs.map(item =>item.classList.remove("text-success"))
        }
        // this.updateAllClients()
    }

    getElem = (id) => document.getElementById(id)



}

let TrafficObject = new TrafficController()
