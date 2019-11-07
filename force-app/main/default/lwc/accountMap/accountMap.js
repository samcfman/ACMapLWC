import { LightningElement, api ,wire, track} from 'lwc';

import getAccount from '@salesforce/apex/AccountLocation.getAccount';

export default class accountMap extends LightningElement {
    @api recordId;
    @track accounts;
    @track error;
    @track showFooter = true ;

    @wire(getAccount, {acctID: '$recordId'}) 
    wiredAccountss({error, data}) {
        if (data) {
            this.accounts = data;
        } else if(error) {
            this.error = error;
        }
    }
    zoomLevel = 15;
}