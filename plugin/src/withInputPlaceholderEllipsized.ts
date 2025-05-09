import { ConfigPlugin, createRunOncePlugin } from '@expo/config-plugins';

/**
 * Config plugin to configure react-native-input-placeholder-ellipsized
 */
const withInputPlaceholderEllipsized = (config: any) => {
  // Make sure the Android module is properly linked
  if (!config.mods) {
    config.mods = {};
  }

  if (!config.mods.android) {
    config.mods.android = {};
  }

  if (!config.mods.android.mainApplication) {
    config.mods.android.mainApplication = {
      imports: [],
      addPackage: [],
    };
  }

  // Add the import for our package
  config.mods.android.mainApplication.imports = config.mods.android.mainApplication.imports || [];
  if (
    !config.mods.android.mainApplication.imports.includes(
      'com.reactnative.inputplaceholderellipsized.InputPlaceholderEllipsizedPackage',
    )
  ) {
    config.mods.android.mainApplication.imports.push(
      'com.reactnative.inputplaceholderellipsized.InputPlaceholderEllipsizedPackage',
    );
  }

  // Add the package to the getPackages method
  config.mods.android.mainApplication.addPackage = config.mods.android.mainApplication.addPackage || [];
  if (!config.mods.android.mainApplication.addPackage.includes('new InputPlaceholderEllipsizedPackage()')) {
    config.mods.android.mainApplication.addPackage.push('new InputPlaceholderEllipsizedPackage()');
  }

  return config;
};

export default createRunOncePlugin(
  withInputPlaceholderEllipsized as ConfigPlugin,
  'react-native-input-placeholder-ellipsized',
  '0.2.0',
);
