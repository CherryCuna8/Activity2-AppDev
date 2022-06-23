import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',

  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {
  contactlist = [
    {id: 1, name: 'Cherry Cuna', email: 'cherry.cuna@evsu.edu.ph'  ,number: '09301234567'},
    {id: 2, name: 'Gail Yuan', email: 'gail213##@gmail.com'  ,number: '09123456789'},
    {id: 3, name: 'Miles Ocampo', email: 'loversquote@gmail.com'  ,number: '093054784555'},

  ]

  constructor() {

  }
}

