import { Component, OnInit, Input } from '@angular/core';
import { PersonalDetails } from '../../interfaces/personal-details';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  @Input() personalDetails!: PersonalDetails;
  cardStyles: any = {
  };
  cardClasses: string[] = [
    'mb-3',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
