import { ContactUsService } from './../../shared/services/contact-us.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit, OnDestroy {
  public sent = false;
  public notSent: boolean = false;
  public contactForm: FormGroup;
  public initialForm: any;
  public destroy$: Subject<boolean> = new Subject<boolean>();
  public plane: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactUsService: ContactUsService
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/),
        ]),
      ],
      message: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(1000)]),
      ],
      recaptcha: [null, Validators.required],
    });
    this.initialForm = this.contactForm.value;
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onSubmit(form: any) {
    this.contactUsService
      .contactMe(form.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (result) => {
          this.plane = true;
          setTimeout(() => {
            this.sent = true;
            this.contactForm.reset(this.initialForm);
          }, 1200);
        },
        (error) => {
          this.notSent = true;
          this.contactForm.reset(this.initialForm);
          setTimeout(() => (this.notSent = false), 4000);
        }
      );
  }
}
