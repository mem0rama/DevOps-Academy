import { LightningElement } from 'lwc';

export default class EditorDeliverable extends LightningElement {
    displayModal = false;
    record = { id: null};
    title = 'New Contact';
    newRecord = false;
    connectedCallback(){
        console.log(this.record);
    }
    handleOpenModal(){
        this.newRecord = true;
        this.displayModal = true;
    }
    handleCloseModal(event) {
        const message = event.detail.flag;
        console.log(message);
        this.displayModal = message;

    }
}