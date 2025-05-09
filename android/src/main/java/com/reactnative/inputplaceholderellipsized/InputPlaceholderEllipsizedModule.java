package com.reactnative.inputplaceholderellipsized;

import android.text.TextUtils;
import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.UIManagerModule;
import com.facebook.react.views.textinput.ReactEditText;

public class InputPlaceholderEllipsizedModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public InputPlaceholderEllipsizedModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "InputPlaceholderEllipsized";
    }

    @ReactMethod
    public void fixPlaceholderEllipsize(int viewTag) {
        try {
            UIManagerModule uiManager = reactContext.getNativeModule(UIManagerModule.class);
            View view = uiManager.resolveView(viewTag);
            
            if (view instanceof ReactEditText) {
                ReactEditText editText = (ReactEditText) view;
                editText.setEllipsize(TextUtils.TruncateAt.END);
            }
        } catch (Exception e) {
            // Handle exceptions silently to avoid app crashes
        }
    }
} 