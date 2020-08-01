import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    const config = {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      shippingAddress: this.createAddressForm(),
      billingAddress: this.createAddressForm(),
    };

    this.form = this.fb.group(config);
  }

  private createAddressForm() {
    const addressConfig = {
      addressLineOne: ['', [Validators.required]],
      addressLineTwo: ['', []],
      addressLineThree: ['', []],
      city: ['', [Validators.required]],
      stateOrProvince: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
    };

    return this.fb.group(addressConfig);
  }
}
