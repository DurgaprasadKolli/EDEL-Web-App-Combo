import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {first} from 'rxjs';
import {HttpService} from '@app/shared/services/http.service';
import {ApiUrlsService} from '@app/shared/services/api-urls.service';
import {AuthService} from '@app/shared/services/auth.service';
import {ErrorStateMatcher} from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid);
    }
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
    loggedUserDetails: any;
    phoneNumber: any;
    firstOtp: any;
    secondOtp: any;
    thirdOtp: any;
    fourthOtp: any
    // @ts-ignore
    loginForm: FormGroup;
    // otpForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string | undefined;
    error = '';
    letterSpacing: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private apiService: HttpService,
        private apiUrls: ApiUrlsService
    ) {
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    // convenience getter for easy access to form fields
    public isOTP: boolean = false;
    ngOnInit(): void {
        this.loginForm = new FormGroup({
            phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern('[6-9]\\d{9}')]),
            firstOtp: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
            secondOtp: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
            thirdOtp: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
            fourthOtp: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    }

    onSubmit(obj: any): void {
        localStorage.clear();
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authService.logIn(obj.phoneNumber, obj.otp).pipe(first()).subscribe((data: any) => {
            if (data) {
                this.loggedUserDetails = data;
                this.router.navigate([this.returnUrl]);
            }
        }, (error: { message: string }) => {
            this.error = error.message;
            this.submitted = true;
        });
    }

    move(e: any, s: any, t: any, f: any): void {
        let length = t.value.length;
        let maxlength = t.getAttribute('maxlength');
        if (length == maxlength) {
            if (f != "") {
                f.focus();
            }
        }
        if (e.key === 'Backspace') {
            if (s != "") {
                s.focus();
            }
        }
        if (this.loginForm.value.firstOtp && this.loginForm.value.secondOtp && this.loginForm.value.thirdOtp && this.loginForm.value.fourthOtp) {
            let otp = this.loginForm.value.firstOtp + this.loginForm.value.secondOtp + this.loginForm.value.thirdOtp + this.loginForm.value.fourthOtp
            this.onSubmit({phoneNumber: this.loginForm.value.phoneNumber, otp: otp})
        }
    }

    sendOtp() {
        this.letterSpacing = !!this.loginForm.value.phoneNumber
        if (this.loginForm.value.phoneNumber && this.loginForm.value.phoneNumber.length === 10) {
            this.apiService.get(this.apiUrls.sendOtp + this.loginForm.value.phoneNumber).subscribe((res: any) => {
                if (res) {
                    this.isOTP = true;
                }
            }, error => {
                this.error = error.message;
            })
        } else {
            this.error = ''
        }
    }

    matcher = new MyErrorStateMatcher();

    backToPhoneNumber() {
        this.isOTP = false;
        this.loginForm.reset();
    }
}
