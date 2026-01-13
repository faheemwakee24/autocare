import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  Vehicles: undefined;
  Services: undefined;
  Maintenance: undefined;
  VehicleDetails: { vehicleId: string };
  ServiceDetails: { serviceId: string };
};

export type TabParamList = {
  Home: undefined;
  Vehicles: undefined;
  Services: undefined;
  Profile: undefined;
};

export type NavigationProps<T extends keyof RootStackParamList> = {
  navigation: any;
  route: {
    params: RootStackParamList[T];
  };
};