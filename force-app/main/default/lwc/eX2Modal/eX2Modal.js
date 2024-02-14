import { LightningElement } from 'lwc';

export default class EX2Modal extends LightningElement {
    title;
    displayModal=false;
    handleOpenModal() {
        
        this.displayModal = true;
    }
    handleOpenButton() {
        this.title = "Open";
        this.handleOpenModal();
        console.log("me picaron");
    }
    handleOtherButton() {
        this.title = "Modal Button";
        this.handleOpenModal();
        console.log("Im the middle button!");
    }
    handleRMButton() {
        this.title = "Click Me!";
        this.handleOpenModal();
        console.log("Im the rightmost button!");
    }

    handleCloseModal(event) {
        const message = event.detail.flag;
        console.log(message);
        this.displayModal = message;

    }

}