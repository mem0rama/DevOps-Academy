import { LightningElement } from 'lwc';

export default class SimpleTable extends LightningElement {
    dataEmployees=[
        {id: 1, Name: 'AMLO', Age: 70, Country: 'Mexico'},
        {id: 2, Name: 'John Lennon', Age: 70, Country: 'UK'},
        {id: 3, Name: 'Jenny Rivera', Age: 30, Country: 'Mexico'},
        {id: 4, Name: 'Kemonito', Age: 70, Country: 'Mexico'},
        
    ];
}