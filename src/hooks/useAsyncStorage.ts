import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useCallback } from 'react';

export function useAsyncStorage<T>(
  key: string,
  defaultValue: T
): [T, (value: T) => Promise<void>, () => Promise<void>] {
  const [storedValue, setStoredValue] = useState<T>(defaultValue);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadStoredValue = async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        if (item !== null) {
          setStoredValue(JSON.parse(item));
        }
      } catch (error) {
        console.error(`Error loading ${key} from AsyncStorage:`, error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredValue();
  }, [key]);

  const setValue = useCallback(async (value: T) => {
    try {
      setStoredValue(value);
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error saving ${key} to AsyncStorage:`, error);
    }
  }, [key]);

  const removeValue = useCallback(async () => {
    try {
      setStoredValue(defaultValue);
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing ${key} from AsyncStorage:`, error);
    }
  }, [key, defaultValue]);

  return [storedValue, setValue, removeValue];
}