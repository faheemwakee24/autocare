import { images } from '../../assets/images';

export type Step = {
  key: string;
  label: string;
  icon: string;
};

export const steps: Step[] = [
  { key: 'car', label: 'Car', icon: '🚗' },
  { key: 'wash', label: 'Wash', icon: '🧽' },
  { key: 'services', label: 'Services', icon: '🛠️' },
  { key: 'location', label: 'Location', icon: '📍' },
  { key: 'date', label: 'Date', icon: '📅' },
  { key: 'summary', label: 'Summary', icon: '🧾' },
  { key: 'confirm', label: 'Confirm', icon: '✔️' },
];

export const servicesDetails = [
  {
    label: 'Car Wash',
    services: [
      {
        id: '1',
        title: 'Ecox Exterior Wash',
        duration: '30 min',
        price: 'AED 50',
        image: images.CarWashImage,
        category: 'Car Wash',
      },
      {
        id: '2',
        title: 'Ecox Exterior Wash',
        duration: '30 min',
        price: 'AED 50',
        image: images.CarWashImage,
        category: 'Car Wash',
      },
    ],
  },
  {
    label: 'Wax Glow',
    services: [
      {
        id: '3',
        title: 'Ecox Exterior Wash',
        duration: '30 min',
        price: 'AED 50',
        image: images.CarWashImage,
        category: 'Car Wash',
      },
      {
        id: '4',
        title: 'Wax Glow',
        duration: '30 min',
        price: 'AED 50',
        image: images.CarWashImage,
        category: 'Wax Glow',
      },
      {
        id: '5',
        title: 'Wax Glow',
        duration: '30 min',
        price: 'AED 50',
        image: images.CarWashImage,
        category: 'Wax Glow',
      },
    ],
  },
];

export const timeSlots = [
  '8:00 - 9:00 AM',
  '9:00 - 10:00 AM',
  '10:00 - 11:00 AM',
  '11:00 - 12:00 PM',
  '1:00 - 2:00 PM',
  '2:00 - 3:00 PM',
];

export const vehicleTypes = [
  { id: 'sedan', label: 'Sedan', image: images.SedanImage },
  { id: 'luxury', label: 'Luxury Car', image: images.LuxuryCarImage },
  { id: 'sports', label: 'Sports Car', image: images.SportsCarImage },
  { id: 'van', label: 'Van', image: images.VanImage },
];

export const areas = [
  'Dubai Marina',
  'Downtown Dubai',
  'Jumeirah',
  'Palm Jumeirah',
  'Business Bay',
];

export const serviceCategories = [
  {
    id: 'car-wash',
    title: 'Car Wash',
    image: images.CarWashImage,
  },
  {
    id: 'wax-glow',
    title: 'Wax Glow',
    image: images.WaxGlowImage,
  },
  {
    id: 'ceramic-paint',
    title: 'Ceramic Paint',
    image: images.CeramicPaintImage,
  },
  {
    id: 'car-care',
    title: 'Car',
    image: images.CarImage,
  },
];
