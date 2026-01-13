import { useNavigation as useRNNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

export const useNavigation = () => {
  return useRNNavigation<NavigationProp<RootStackParamList>>();
};