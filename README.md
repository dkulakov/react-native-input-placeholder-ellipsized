# react-native-input-placeholder-ellipsized

React Native module to fix TextInput placeholder ellipsize on Android.

## Description

This module addresses a common issue in React Native TextInput components on Android, where placeholder text doesn't correctly truncate with ellipsis at the end when it's too long to fit in the available space.

> **Important**: This fix only works with the old React Native architecture. If you're using the new architecture, this module won't have any effect.

> **Note**: This module only applies to Android, as iOS does not have this issue.

## Installation

```sh
npm install react-native-input-placeholder-ellipsized
# or
yarn add react-native-input-placeholder-ellipsized
```

### Android

No additional setup required for React Native 0.60 and above as the module supports auto-linking.

For React Native < 0.60, you will need to manually link the module:

```sh
react-native link react-native-input-placeholder-ellipsized
```

## Usage

```jsx
import React, { useRef, useEffect } from 'react';
import { TextInput, View } from 'react-native';
import { fixPlaceholderEllipsize } from 'react-native-input-placeholder-ellipsized';

function MyInput() {
  const inputRef = useRef(null);

  // Apply the fix when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      fixPlaceholderEllipsize(inputRef.current);
    }
  }, []);

  return (
    <View>
      <TextInput
        ref={inputRef}
        placeholder="This is a very long placeholder text that should be truncated with an ellipsis when it doesn't fit"
        style={{ width: 200 }}
      />
    </View>
  );
}
```

## How it works

On Android, this module applies a native fix to TextInput components by setting the appropriate ellipsis mode for the placeholder text. It uses the native Android `TextUtils.TruncateAt.END` setting to ensure that placeholder text is properly truncated with an ellipsis when it doesn't fit in the available space.

The fix is only applied on Android devices. On iOS, the function will silently return without doing anything, as iOS handles placeholder text truncation correctly.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
