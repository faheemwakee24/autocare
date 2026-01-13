import { VEHICLE_TYPES, SERVICE_TYPES } from '../constants';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phoneNumber?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Vehicle {
  id: string;
  userId: string;
  make: string;
  model: string;
  year: number;
  type: typeof VEHICLE_TYPES[number];
  licensePlate: string;
  vin?: string;
  mileage: number;
  color?: string;
  image?: string;
  lastServiceDate?: Date;
  nextServiceDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  vehicleId: string;
  type: typeof SERVICE_TYPES[number];
  description: string;
  mileage: number;
  cost: number;
  date: Date;
  provider?: string;
  notes?: string;
  receipts?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface MaintenanceReminder {
  id: string;
  vehicleId: string;
  type: string;
  description: string;
  dueMileage: number;
  dueDate: Date;
  isCompleted: boolean;
  completedAt?: Date;
  createdAt: Date;
}

export interface AppSettings {
  notifications: {
    pushEnabled: boolean;
    serviceReminders: boolean;
    maintenanceAlerts: boolean;
  };
  preferences: {
    theme: 'light' | 'dark' | 'system';
    language: string;
    units: 'metric' | 'imperial';
    currency: string;
  };
  privacy: {
    locationEnabled: boolean;
    analyticsEnabled: boolean;
  };
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}