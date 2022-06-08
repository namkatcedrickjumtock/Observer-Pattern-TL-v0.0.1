import { TrafficController } from "./TrafficController.class.js";

export class TrafficModel {

    observableInitialState = true
    changeInterval

    constructor() {


    }




    getState = () => this.observableInitialState ? true : this.observableInitialState = false

    notify = () => this.getState() != 1 ? false : TrafficController.updateAllClients()

    addClient(observer) { }
    removeClient(client) { }




}