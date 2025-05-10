package com.inputplaceholderellipsized

import android.text.TextUtils
import android.widget.EditText
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.uimanager.UIManagerModule
import com.facebook.react.views.textinput.ReactEditText

class InputPlaceholderEllipsizedModule(private val reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  fun fixPlaceholderEllipsize(textInputTag: Int) {
    try {
      val uiManager = reactContext.getNativeModule(UIManagerModule::class.java)
      uiManager?.addUIBlock { nativeViewHierarchyManager ->
        val view = nativeViewHierarchyManager.resolveView(textInputTag)
        if (view is ReactEditText) {
          view.ellipsize = TextUtils.TruncateAt.END
        }
      }
    } catch (e: Exception) {
      // Handle error silently
    }
  }

  companion object {
    const val NAME = "InputPlaceholderEllipsized"
  }
}
