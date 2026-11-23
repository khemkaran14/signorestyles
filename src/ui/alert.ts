import { Alert, type AlertButton } from 'react-native';

/** Native alert with buttons. */
export function showAlert(title: string, message?: string, buttons?: AlertButton[]) {
  Alert.alert(title, message, buttons);
}
