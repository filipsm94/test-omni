import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.sass']
})
export class FilterFormComponent implements OnInit {
  @Output() valueFilterEvent = new EventEmitter<string>();

  public filterForm: FormGroup;
  public hasError = false;

  private infoLogin: { value: string };

  constructor() {
    this.filterForm = new FormGroup({
      value: new FormControl(null, [
        Validators.minLength(2)])
    });
    this.infoLogin = {
      value: '',
    };
  }

  get value(): any { return this.filterForm.get('value'); }

  ngOnInit(): void {
  }

  public async submit(): Promise<void> {
    this.infoLogin = { ...this.filterForm.value };
    try {
      this.valueFilterEvent.emit(this.infoLogin.value);
    } catch (error) {
      this.hasError = true;
    }
  }

}
