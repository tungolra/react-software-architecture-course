import { makeObservable, observable, action } from "mobx";

export class Counter {
    numberOfClicks = 0;
    
    constructor() {
        // telling mobx to make numberofclicks state to be observable
        // action is calling a method that modifies the state
        makeObservable(this, {
        numberOfClicks: observable,
        increment: action,
        });
    }
    
    increment = (amount) => {
        this.numberOfClicks += amount;
    };
}