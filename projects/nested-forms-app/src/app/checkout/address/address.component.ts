import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressComponent {
  @Input() public controlName: string;
  @Input() public title: string;

  constructor(public controlContainer: ControlContainer) {}
}
