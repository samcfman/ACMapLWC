import { LightningElement, api ,wire, track} from 'lwc';

import getAccount from '@salesforce/apex/AccountLocation.getAccount';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
const fields = [NAME_FIELD];

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

    userId = Id;
    @wire(getRecord, { recordId: '$userId', fields })
    user;
    get name() {
        return getFieldValue(this.user.data, NAME_FIELD);
    }

    zoomLevel = 15;
}