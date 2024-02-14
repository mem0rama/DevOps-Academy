import { LightningElement } from 'lwc';

export default class LightningTable extends LightningElement {
    employeeColumns=[
        {label:'Employee Id', fieldName: 'EmployeeId'},
        {label:'Employee FirstName', fieldName: 'firstName'},
        {label:'Employee LastName', fieldName: 'lastName'},
        {label:'Employee LastName', fieldName: 'phone'},
    ];

    employeeData = [
        {
            id : 1,
            firstName: 'Alonso',
            lastName: 'Iracheta',
            phone:'7717486945'
        },
        {
            id:2,
            firstName: 'Guillermo',
            lastName: 'Navarro',
            phone:'7717486946'
        },
        {
            id:3,
            firstName: 'Fidel',
            lastName: 'Vega',
            phone:'7717486947'
            
        },

        

    ]

    connectedCallback(){
        console.log('Asi se ve reflejado el connected callBack');
    }
 
    renderedCallback(){
        console.log('Así vemos un rendered CallBack');
    }
}