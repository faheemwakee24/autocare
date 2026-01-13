import { AppSettings } from '../types';
import { useAsyncStorage } from './useAsyncStorage';
import { STORAGE_KEYS } from '../constants';

const defaultSettings: AppSettings = {
  notifications: {
    pushEnabled: true,
    serviceReminders: true,
    maintenanceAlerts: true,
  },
  preferences: {
    theme: 'system',
    language: 'en',
    units: 'imperial',
    currency: 'USD',
  },
  privacy: {
    locationEnabled: false,
    analyticsEnabled: true,
  },
};

export const useSettings = () => {
  const [settings, setSettings, removeSettings] = useAsyncStorage<AppSettings>(
    STORAGE_KEYS.APP_SETTINGS,
    defaultSettings
  );

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings({ ...settings, ...newSettings });
  };

  const updateNotifications = (notifications: Partial<AppSettings['notifications']>) => {
    setSettings({
      ...settings,
      notifications: { ...settings.notifications, ...notifications },
    });
  };

  const updatePreferences = (preferences: Partial<AppSettings['preferences']>) => {
    setSettings({
      ...settings,
      preferences: { ...settings.preferences, ...preferences },
    });
  };

  const updatePrivacy = (privacy: Partial<AppSettings['privacy']>) => {
    setSettings({
      ...settings,
      privacy: { ...settings.privacy, ...privacy },
    });
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return {
    settings,
    updateSettings,
    updateNotifications,
    updatePreferences,
    updatePrivacy,
    resetSettings,
    removeSettings,
  };
};