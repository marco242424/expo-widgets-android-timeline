# expo-widgets Android timeline repro

An Android widget built with `expo-widgets` has no way to update itself over time.

- `Widget.updateTimeline()` returns early on Android, so scheduled entries are dropped.
- The config plugin writes `android:updatePeriodMillis="0"` into the widget's `appwidget-provider` XML, with no option to change it.

## Steps

1. `npm install`
2. `npx expo run:android`
3. Add the "Timeline" widget to the home screen. It shows `Initial`.
4. Open the app and tap **Schedule timeline**. This schedules five entries, one minute apart.
5. Wait. The widget keeps showing `Initial`.
