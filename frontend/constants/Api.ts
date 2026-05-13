import { Platform } from 'react-native';

// Android emulator routes localhost to 10.0.2.2; iOS simulator uses localhost directly.
export const API_BASE =
  Platform.OS === 'android'
    ? 'http://10.0.2.2:5000/api'
    : 'http://localhost:5000/api';
