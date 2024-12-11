# Expo Linking API Inconsistent Event Firing on Android

This repository demonstrates a bug in the Expo `Linking` API on Android where the `Linking.addEventListener` doesn't always fire when a deep link is tapped while the app is already open. The inconsistency appears to be related to Android device and OS version variations.

## Bug Description

The `Linking.addEventListener` event listener is not consistently triggered when the app is already running and a deep link is tapped. This results in the app failing to handle the deep link correctly, leading to unexpected behavior.

## Reproduction Steps

1. Install and run the `bug.js` example app.
2. Open the app.
3. Tap a deep link in the browser or another app that should trigger a navigation within the app.  Observe that the event listener is sometimes (inconsistently) triggered.

## Solution

The solution involves using `Linking.getInitialURL` to check for a deep link immediately after the app starts. This ensures that even if the `Linking.addEventListener` fails to trigger, the initial URL will be captured. See `bugSolution.js` for a demonstration.