import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  term: string;
  term2: string;
  filterById?: any = undefined;

  ngOnInit(): void {}

  filterData = [
    {
      id: 1,
      firstName: 'Celestine',
      lastName: 'Schimmel',
      address: '7687 Jadon Port',
    },
    {
      id: 4,
      firstName: 'Johan',
      lastName: 'Ziemann PhD',
      address: '156 Streich Ports',
    },
    {
      id: 2,
      firstName: 'Lizzie',
      lastName: 'Schumm',
      address: '5203 Jordon Center',
    },
    {
      id: 5,
      firstName: 'Gavin',
      lastName: 'Leannon',
      address: '91057 Davion Club',
    },
    {
      id: 3,
      firstName: 'Lucious',
      lastName: 'Leuschke',
      address: '16288 Reichel Harbor',
    },
    {
      id: 4,
      firstName: 'Lucious',
      lastName: 'Leuschke',
      address: '16288 Reichel Harbor',
    },
    {
      id: 5,
      firstName: 'Lucious',
      lastName: 'plo',
      address: '16288 Reichel Harbor',
    },
  ];

  //find
  onCheck(value) {
    console.log(value);
    // this.filterById = this.filterData.filter(
    //   ({ firstName }) => firstName == value
    // );
    this.filterById = this.filterData.filter(
      (d) => d.firstName.toLowerCase() == value.toLowerCase()
    );
    console.log('2222', this.filterById);
  }

  onDelete(value) {
    console.log('deletevalue', value)
    this.filterById.splice(value, 1)
  }
}
