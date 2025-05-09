import { TextInput } from 'react-native';

declare module 'react-native-input-placeholder-ellipsized' {
  export function fixTextInputPlaceholder(textInputRef: TextInput | null): void;

  const module: {
    fixTextInputPlaceholder: (textInputRef: TextInput | null) => void;
  };

  export default module;
}
