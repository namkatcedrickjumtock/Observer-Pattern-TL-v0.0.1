
import { TrafficModel as Subject } from "./TrafficModel.class.js";


export class TrafficController extends Subject {
    // controller variables
    clientsBulbs = []

    constructor(props) {
        super(props);
        this.updateAllClients()
    }

    getClients = () => [...document.getElementsByClassName('bi-lightbulb')].filter(item =>
        this.clientsBulbs.push(item))


    updateAllClients() {
        this.getClients()
        setTimeout(() => {
            if (this.hasStateChange == 1) {
                document.getElementById('state').innerHTML = this.hasStateChange
                this.clientsBulbs.map(elems => elems).filter(items => items.style.color = "red")
                document.getElementById('chip').style.color = "rgb(11, 192, 72)"
                let newState = this.hasStateChange = 0
                newState
            } else {
                document.getElementById('state').innerHTML = this.hasStateChange
                this.clientsBulbs.map(elems => elems).filter(items => items.style.color = "black")
                document.getElementById('chip').style.color = "black"
                this.hasStateChange = 1
            }
            this.updateAllClients()
        }, 1000);

    }

    changeTimeInterval(ineterval) {
        this.updateAllClients(ineterval)
    }
    stopSimulation = () => { this.hasStateChange = 0 }
}

window.onload = (event) => {
    let TrafficObject = new TrafficController()
    // let elem = document.getElementById('form')
    let stop = document.getElementById('stop')


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let elem = document.getElementById('input').value
        TrafficObject.changeTimeInterval(elem)
        document.getElementById('input').value = ""

    })
    stop.addEventListener('click', TrafficObject.stopSimulation)
}



