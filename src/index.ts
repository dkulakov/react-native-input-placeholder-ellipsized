import { Platform, NativeModules, findNodeHandle, type TextInput } from 'react-native';

interface InputPlaceholderEllipsizedInterface {
  fixPlaceholderEllipsize(viewTag: number): void;
}

const LINKING_ERROR =
  `The package 'react-native-input-placeholder-ellipsized' doesn't seem to be installed. Make sure: \n\n` +
  '- You rebuilt the app after installing the package\n';

// Get reference to the native module
const InputPlaceholderEllipsizedModule = NativeModules.InputPlaceholderEllipsized
  ? (NativeModules.InputPlaceholderEllipsized as InputPlaceholderEllipsizedInterface)
  : new Proxy(
      {
        fixPlaceholderEllipsize: (_: number) => {
          throw new Error(LINKING_ERROR);
        },
      },
      {
        get(target, prop) {
          if (prop === 'fixPlaceholderEllipsize') {
            return target.fixPlaceholderEllipsize;
          }
          throw new Error(LINKING_ERROR);
        },
      },
    );

/**
 * Fixes the placeholder ellipsize behavior for a TextInput component on Android.
 * On Android, the placeholder text doesn't always properly truncate with ellipsis
 * at the end. This function applies a native fix to ensure proper truncation.
 *
 * @param textInputRef - Reference to the TextInput component
 */
export const fixTextInputPlaceholder = (textInputRef: TextInput | null): void => {
  // Only run on Android
  if (Platform.OS !== 'android' || !textInputRef) {
    return;
  }

  // Get the native view tag
  const viewTag = findNodeHandle(textInputRef);
  if (viewTag !== null) {
    // Call the native module to fix this specific TextInput
    InputPlaceholderEllipsizedModule.fixPlaceholderEllipsize(viewTag);
  }
};

export default {
  fixTextInputPlaceholder,
};
