/**
 * Email validation
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Phone number validation (US format)
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\(\d{3}\)\s\d{3}-\d{4}$/;
  return phoneRegex.test(phone);
};

/**
 * License plate validation (basic US format)
 */
export const isValidLicensePlate = (plate: string): boolean => {
  // Basic validation - alphanumeric, 2-8 characters
  const plateRegex = /^[A-Z0-9]{2,8}$/;
  return plateRegex.test(plate.toUpperCase());
};

/**
 * VIN validation (basic check)
 */
export const isValidVIN = (vin: string): boolean => {
  // Basic VIN validation - 17 characters, alphanumeric
  const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/;
  return vinRegex.test(vin.toUpperCase());
};

/**
 * Required field validation
 */
export const isRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

/**
 * Minimum length validation
 */
export const hasMinLength = (value: string, minLength: number): boolean => {
  return value.length >= minLength;
};

/**
 * Maximum length validation
 */
export const hasMaxLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};

/**
 * Numeric validation
 */
export const isNumeric = (value: string): boolean => {
  return !isNaN(Number(value)) && !isNaN(parseFloat(value));
};

/**
 * Positive number validation
 */
export const isPositiveNumber = (value: string): boolean => {
  const num = Number(value);
  return !isNaN(num) && num > 0;
};

/**
 * Year validation (reasonable range)
 */
export const isValidYear = (year: string): boolean => {
  const yearNum = Number(year);
  const currentYear = new Date().getFullYear();
  return yearNum >= 1900 && yearNum <= currentYear + 1;
};