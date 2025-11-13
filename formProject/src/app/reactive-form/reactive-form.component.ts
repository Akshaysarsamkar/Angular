import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit, OnDestroy {
  genders = ['Male', 'Female'];
  registerForm!: FormGroup;

  data = new BehaviorSubject<string>('');
  sub!: Subscription;

  forBiddenName = ['test', 'dummy'];

  ngOnInit(): void {
    this.createForm();

    this.registerForm.statusChanges.subscribe(() => {
      console.log('status Changed');
    });

    this.sub = this.data?.subscribe((value) => {
      console.log('Value is', value);
      this.registerForm.get('username')?.setValue(value);
    });
  }

  createForm() {
    this.registerForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.forbidden.bind(this),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('Female'),
      hobbies: new FormArray([new FormControl(null)]),
    });
  }

  get hobbiesArray() {
    return this.registerForm.get('hobbies') as FormArray;
  }

  forbidden(control: AbstractControl) {
    if (this.forBiddenName.indexOf(control.value) !== -1) {
      return { nameIsForBidden: true };
    }
    return null;
  }

  //  forbiddenEmail(control: AbstractControl):Observable<any> | Promise<any> {
  //   return
  // }

  onAddHobbies() {
    this.hobbiesArray.push(new FormControl(null));
  }

  onSubmit() {
    console.log(this.registerForm);
    const newUser = this.registerForm.get('username')?.value;
    this.data.next(newUser);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
