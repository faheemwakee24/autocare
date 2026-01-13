export const APP_CONFIG = {
  name: 'AutoCare',
  version: '1.0.0',
  description: 'Your Automotive Companion',
};

export const SCREEN_NAMES = {
  HOME: 'Home',
  PROFILE: 'Profile',
  SETTINGS: 'Settings',
  VEHICLES: 'Vehicles',
  SERVICES: 'Services',
  MAINTENANCE: 'Maintenance',
} as const;

export const STORAGE_KEYS = {
  USER_TOKEN: 'user_token',
  USER_PROFILE: 'user_profile',
  APP_SETTINGS: 'app_settings',
  VEHICLES_DATA: 'vehicles_data',
  SERVICE_HISTORY: 'service_history',
} as const;

export const API_ENDPOINTS = {
  BASE_URL: 'https://api.autocare.com',
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  VEHICLES: {
    LIST: '/vehicles',
    CREATE: '/vehicles',
    UPDATE: '/vehicles/:id',
    DELETE: '/vehicles/:id',
  },
  SERVICES: {
    LIST: '/services',
    CREATE: '/services',
    UPDATE: '/services/:id',
  },
} as const;

export const VEHICLE_TYPES = [
  'Sedan',
  'SUV',
  'Truck',
  'Hatchback',
  'Coupe',
  'Convertible',
  'Wagon',
  'Van',
  'Motorcycle',
  'Other',
] as const;

export const SERVICE_TYPES = [
  'Oil Change',
  'Tire Rotation',
  'Brake Service',
  'Battery Replacement',
  'Transmission Service',
  'Engine Tune-up',
  'Air Filter Replacement',
  'Cooling System Service',
  'Inspection',
  'Other',
] as const;

export const MAINTENANCE_INTERVALS = {
  OIL_CHANGE: 5000, // miles
  TIRE_ROTATION: 8000,
  BRAKE_INSPECTION: 10000,
  BATTERY_CHECK: 6, // months
  TRANSMISSION_SERVICE: 60000,
} as const;