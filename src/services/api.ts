import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://clean-go-backend.vercel.app';

export interface AuthSignupRequest {
  email: string;
  password: string;
  name?: string;
}

export interface AuthSignupResponse {
  message?: string;
  code?: string;
}

export interface VerifyRequest {
  email: string;
  code: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}

export interface ResendCodeRequest {
  email: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  email: string;
  code: string;
  newPassword: string;
}

export interface ProtectedResponse {
  userId: string;
}

export interface SubService {
  _id?: string;
  title?: string;
  duration?: string;
  price?: number;
  imageUrl?: string;
}

export interface ServiceGroup {
  _id?: string;
  type?: string;
  subServices?: SubService[];
}

export interface ServiceCreateRequest {
  type: string;
  subServices: {
    title: string;
    duration?: string;
    price: number;
    imageUrl?: string;
  }[];
}

export type ServiceUpdateRequest = ServiceCreateRequest;

export interface SubServiceUpdateRequest {
  title?: string;
  duration?: string;
  price?: number;
  imageUrl?: string;
}

export interface BookingServiceSelection {
  serviceId: string;
  subServiceIds: string[];
}

export interface BookingCreateRequest {
  vehicleType: string;
  vehicleMake: string;
  vehicleModel: string;
  licensePlate?: string;
  area: string;
  address: string;
  dateTime: string;
  services: BookingServiceSelection[];
}

export interface BookingItem {
  subServiceId?: string;
  title?: string;
  duration?: string;
  price?: number;
  imageUrl?: string;
}

export interface Booking {
  _id?: string;
  vehicleType?: string;
  vehicleMake?: string;
  vehicleModel?: string;
  licensePlate?: string;
  services?: {
    serviceId?: string;
    subServiceIds?: string[];
  }[];
  items?: BookingItem[];
  area?: string;
  address?: string;
  dateTime?: string;
  status?: string;
  totalPrice?: number;
  totalDurationMinutes?: number;
}

export interface PlanIncludedItem {
  title?: string;
  count?: number;
}

export interface Plan {
  _id?: string;
  code?: string;
  name?: string;
  priceAED?: number;
  savingsAED?: number;
  included?: PlanIncludedItem[];
  benefits?: string[];
}

export interface PlansResponse {
  plans: Plan[];
}

export interface PlanChooseRequest {
  planCode: string;
  expiresAt: string;
}

export interface Subscription {
  planId?: string;
  planCode?: string;
  planName?: string;
  priceAED?: number;
  startedAt?: string;
  expiresAt?: string;
}

export interface ChoosePlanResponse {
  message?: string;
  subscription?: Subscription;
}

export interface ServicesResponse {
  groups: ServiceGroup[];
}

export interface CreateBookingResponse {
  message?: string;
  booking?: Booking;
}

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // If you store JWT in Redux or async storage, you can inject it here.
      // For now this is a placeholder; adjust when you wire auth state.
      return headers;
    },
  }),
  tagTypes: ['Services', 'Plans', 'Bookings'],
  endpoints: builder => ({
    signup: builder.mutation<AuthSignupResponse, AuthSignupRequest>({
      query: body => ({
        url: '/auth/signup',
        method: 'POST',
        body,
      }),
    }),
    verifySignup: builder.mutation<void, VerifyRequest>({
      query: body => ({
        url: '/auth/verify',
        method: 'POST',
        body,
      }),
    }),
    resendCode: builder.mutation<void, ResendCodeRequest>({
      query: body => ({
        url: '/auth/resend-code',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<TokenResponse, LoginRequest>({
      query: body => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
    }),
    forgotPassword: builder.mutation<void, ForgotPasswordRequest>({
      query: body => ({
        url: '/auth/forgot-password',
        method: 'POST',
        body,
      }),
    }),
    resetPassword: builder.mutation<void, ResetPasswordRequest>({
      query: body => ({
        url: '/auth/reset-password',
        method: 'POST',
        body,
      }),
    }),
    getProtected: builder.query<ProtectedResponse, void>({
      query: () => ({
        url: '/auth/protected',
        method: 'GET',
      }),
    }),

    getPublicServices: builder.query<ServicesResponse, void>({
      query: () => ({
        url: '/services',
        method: 'GET',
      }),
      providesTags: ['Services'],
    }),

    createBooking: builder.mutation<CreateBookingResponse, BookingCreateRequest>({
      query: body => ({
        url: '/bookings',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Bookings'],
    }),

    getPlans: builder.query<PlansResponse, void>({
      query: () => ({
        url: '/plans',
        method: 'GET',
      }),
      providesTags: ['Plans'],
    }),

    choosePlan: builder.mutation<ChoosePlanResponse, PlanChooseRequest>({
      query: body => ({
        url: '/plans/choose',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Plans'],
    }),
  }),
});

export const {
  useSignupMutation,
  useVerifySignupMutation,
  useResendCodeMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useGetProtectedQuery,
  useGetPublicServicesQuery,
  useCreateBookingMutation,
  useGetPlansQuery,
  useChoosePlanMutation,
} = api;
