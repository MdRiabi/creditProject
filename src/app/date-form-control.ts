import { FormControl } from "@angular/forms";




export class DateFormControl extends FormControl {

    override setValue(value: string | null, options: any) {
// we add this condition because when user click rest button we get an error 
//because  DateFormControl is a custom type of formcontrol so in this case if not value 
//we set the expiration field to empty string
//that's mean if we get a null value we change it to empty string 
//because rest function make all fields to a null value
        if (!value) {
            super.setValue('', { ...options, emitModelToViewChange: true })
            return;
        }

        //just type only numer or '/' . 
        if (value.match(/[^0-9|\/]/gi)) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true })
            return;
        }
        //we tape only 5 characters not more
        if (value.length > 5) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true });
            return;
        }
        // ALLOWING MODIFICATION FOR USER
        if (value.length === 2 && this.value.length === 3) {
            super.setValue(value, { ...options, emitModelToViewChange: true });
            return;

        }
        // if user tape two characters we put automatically '/'.
        if (value.length === 2) {
            super.setValue(value + '/', { ...options, emitModelToViewChange: true });
            return;
        }

        super.setValue(value, { ...options, emitModelToViewChange: true })
    }

}
