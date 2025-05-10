import {
  findNodeHandle,
  NativeModules,
  Platform,
  TextInput,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-input-placeholder-ellipsized' doesn't seem to be linked. Make sure: \n\n` +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const InputPlaceholderEllipsized = NativeModules.InputPlaceholderEllipsized
  ? NativeModules.InputPlaceholderEllipsized
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function fixPlaceholderEllipsize(textInputRef: TextInput | null): void {
  if (!textInputRef || Platform.OS !== 'android') return;

  const viewTag = findNodeHandle(textInputRef);
  if (viewTag !== null) {
    console.log('viewTag', viewTag);
    InputPlaceholderEllipsized.fixPlaceholderEllipsize(viewTag);
  }
}

export default {
  fixPlaceholderEllipsize,
};
