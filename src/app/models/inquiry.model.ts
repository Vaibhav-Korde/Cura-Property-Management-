// src/app/models/inquiry.model.ts

export interface Inquiry {
  id?: number;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  serviceType: ServiceType;
  propertyType: PropertyType;
  propertyLocation: string;
  message: string;
  createdAt?: Date;
  status?: InquiryStatus;
}

export type ServiceType =
  | 'property-management'
  | 'tenant-search'
  | 'property-inspection'
  | 'renovation-restoration'
  | 'property-sale'
  | 'other';

export type PropertyType =
  | 'apartment'
  | 'villa'
  | 'bungalow'
  | 'plot'
  | 'commercial'
  | 'other';

export type InquiryStatus = 'pending' | 'contacted' | 'resolved' | 'closed';

export interface InquiryResponse {
  success: boolean;
  message: string;
  referenceId?: string;
}
