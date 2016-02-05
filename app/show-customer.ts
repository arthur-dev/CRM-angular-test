import {Component, View, bootstrap} from 'angular2/angular2';
@Component({
    selector: 'display'
})
@View({
    template: `
        <p>Customer name: {{ firstName }} {{ lastName }}</p>
`
})
class DisplayComponent {
    firstName: string;
    lastName: string;
    constructor() {
        this.firstName = "Mon";
        this.lastName = "Coco";
    }
}