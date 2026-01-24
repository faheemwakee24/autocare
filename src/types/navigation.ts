import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  // Auth screens
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  ForgotPasswordAddEmail: undefined;
  ForgotPasswordAddPassword: undefined;
  ForgotPasswordAddOTP: undefined;
  VerifyOtp: { email: string };
  ResetPassword: { email?: string };
  Onboarding: undefined;
  MainTabs: NavigatorScreenParams<TabParamList>;

  // Main app screens
  Home?: undefined;
  Profile?: undefined;
  Settings?: undefined;

  // Vehicle management
  Vehicles: undefined;
  AddVehicle: undefined;
  VehicleDetails: { vehicleId: string };
  EditVehicle: { vehicleId: string };

  // Service management
  Services: undefined;
  AddService: { vehicleId?: string };
  ServiceDetails: { serviceId: string };
  EditService: { serviceId: string };

  // Maintenance
  Maintenance: undefined;
  MaintenanceDetails: { maintenanceId: string };
  ScheduleMaintenance: { vehicleId: string };

  // Settings screens
  EditAccount: undefined;
  Notifications: undefined;
  Privacy: undefined;
  Support: undefined;
  About: undefined;
  ChangePassword: undefined;
};

export type TabParamList = {
  Home: undefined;
  Services: undefined;
  Profile: undefined;
  Subscriptions: undefined;

};

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: any;
  route: {
    params: RootStackParamList[T];
  };
};