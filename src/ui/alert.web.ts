import type { AlertButton } from 'react-native';

/**
 * Browser version of Alert.alert (react-native-web's Alert does nothing).
 * No buttons: a plain alert. Otherwise each action is offered in turn with confirm();
 * the first one accepted runs, else the cancel button's handler.
 */
export function showAlert(title: string, message?: string, buttons?: AlertButton[]) {
  const text = message ? `${title}\n\n${message}` : title;
  const actions = (buttons ?? []).filter(b => b.style !== 'cancel');
  const cancel = (buttons ?? []).find(b => b.style === 'cancel');
  if (!actions.length) { window.alert(text); cancel?.onPress?.(); return; }
  for (const b of actions) {
    const q = actions.length === 1 ? `${text}\n\n${b.text}?` : `${title}\n\n${b.text}?`;
    if (window.confirm(q)) { b.onPress?.(); return; }
  }
  cancel?.onPress?.();
}
