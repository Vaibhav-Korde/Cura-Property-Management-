import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import { InquiryService } from '../../services/inquiry.service';
import { Inquiry } from '../../models/inquiry.model';

interface ServiceOption {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-inquiry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css'],
})
export class InquiryComponent implements OnInit {

  @Output() closeForm = new EventEmitter<void>();

  inquiryForm!: FormGroup;

  currentStep = 1;
  isSubmitting = false;
  isSuccess = false;
  submittedName = '';
  referenceId = '';

  countries = [
    'USA',
    'Canada',
    'United Kingdom',
    'Australia',
    'UAE',
    'Singapore',
    'Germany',
    'Netherlands',
    'New Zealand',
    'Japan',
    'Kuwait',
    'Bahrain',
    'Qatar',
    'Oman',
    'Saudi Arabia',
    'South Africa',
    'Other',
  ];

  services: ServiceOption[] = [
    {
      value: 'property-management',
      label: 'Property Management',
      icon: '🏘'
    },
    {
      value: 'tenant-search',
      label: 'Tenant Search',
      icon: '🔍'
    },
    {
      value: 'inspection',
      label: 'Property Inspection',
      icon: '🔎'
    },
    {
      value: 'renovation',
      label: 'Renovation',
      icon: '🔨'
    },
    {
      value: 'property-sale',
      label: 'Property Sale',
      icon: '📋'
    },
    {
      value: 'other',
      label: 'Other',
      icon: '➕'
    },
  ];

  whyItems = [
    '14+ years of NRI property expertise',
    'Dedicated relationship manager for each client',
    'Complete end-to-end service under one roof',
    'Transparent pricing – no hidden charges',
    'Monthly property status reports',
    'Legal & society compliance handled',
    'Trusted by clients in 20+ countries',
  ];

  constructor(
    private fb: FormBuilder,
    private inquiryService: InquiryService
  ) {}

  ngOnInit(): void {
    this.inquiryForm = this.fb.group({
      fullName: [
        '',
        [Validators.required, Validators.minLength(2)]
      ],

      email: [
        '',
        [Validators.required, Validators.email]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\+?[\d\s\-()]{7,20}$/)
        ]
      ],

      country: [
        '',
        Validators.required
      ],

      serviceType: [
        '',
        Validators.required
      ],

      propertyType: [
        '',
        Validators.required
      ],

      propertyLocation: [
        '',
        Validators.required
      ],

      message: [''],

      consent: [
        false,
        Validators.requiredTrue
      ],
    });
  }

  closePopup(): void {
    this.closeForm.emit();
  }

  isFieldInvalid(field: string): boolean {
    const ctrl = this.inquiryForm.get(field);

    return !!(
      ctrl &&
      ctrl.invalid &&
      (ctrl.dirty || ctrl.touched)
    );
  }

  selectService(value: string): void {
    this.inquiryForm.patchValue({
      serviceType: value
    });
  }

  nextStep(): void {
    const step1Fields = [
      'fullName',
      'email',
      'phone',
      'country'
    ];

    const step2Fields = [
      'serviceType',
      'propertyType',
      'propertyLocation'
    ];

    if (this.currentStep === 1) {
      step1Fields.forEach(f =>
        this.inquiryForm.get(f)?.markAsTouched()
      );

      const valid = step1Fields.every(
        f => this.inquiryForm.get(f)?.valid
      );

      if (!valid) return;
    }

    if (this.currentStep === 2) {
      step2Fields.forEach(f =>
        this.inquiryForm.get(f)?.markAsTouched()
      );

      const valid = step2Fields.every(
        f => this.inquiryForm.get(f)?.valid
      );

      if (!valid) return;
    }

    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit(): void {
    if (this.inquiryForm.invalid) {
      this.inquiryForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const payload: Inquiry = {
      ...this.inquiryForm.value
    };

    this.inquiryService
      .submitInquiry(payload)
      .subscribe({
        next: (res) => {
          this.isSubmitting = false;
          this.isSuccess = true;
          this.submittedName = payload.fullName;
          this.referenceId =
            res.referenceId ||
            this.generateRefId();
        },

        error: (err) => {
          this.isSubmitting = false;

          alert(
            err.message ||
            'Submission failed. Please try again.'
          );
        },
      });
  }

  resetForm(): void {
    this.inquiryForm.reset();
    this.currentStep = 1;
    this.isSuccess = false;
    this.submittedName = '';
    this.referenceId = '';
  }

  private generateRefId(): string {
    return (
      'CURA-' +
      Date.now()
        .toString(36)
        .toUpperCase()
    );
  }
}