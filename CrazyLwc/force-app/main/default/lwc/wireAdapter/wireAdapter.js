import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id'
import {getRecord} from 'lightning/uiRecordApi';
export default class WireAdapter extends LightningElement {
    userId=Id

}