import { LightningElement, track } from 'lwc';
export default class HelloWorld extends LightningElement {
    @track greeting = 'World';
    changeHandler(event) {
        this.greeting = event.target.value;
        const msgevent = new CustomEvent ('messagechange', {
            detail:this.greeting
            }
        )
        this.dispatchEvent(msgevent);
    }
}