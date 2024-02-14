import { LightningElement , api} from 'lwc';

export default class SampleModalCard extends LightningElement {
    @api modalTitle = "";
    handleCancelButton() {
        console.log('Me picaron');
        const event = new CustomEvent("cancel", {
            detail: {
                flag: false
            }
        });
        this.dispatchEvent(event);
    }

    handleSuccess(event) {
        // const event = new CustomEvent("success", {
        //     detail: {
        //         record: successEvent.
        //     }
        // })
    }
}