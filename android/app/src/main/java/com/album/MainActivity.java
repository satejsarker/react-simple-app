package com.album;

import com.facebook.react.ReactActivity;
// react-native-splash-screen >= 0.3.1



public class MainActivity extends ReactActivity {


// @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         SplashScreen.show(this);  // here
//         super.onCreate(savedInstanceState);
//     }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "album";
    }
}
