import { Button, StyleSheet, View } from 'react-native';

import TimelineWidget from './widgets/TimelineWidget';

export default function App() {
  const scheduleTimeline = () => {
    const now = Date.now();
    TimelineWidget.updateTimeline(
      [0, 1, 2, 3, 4].map((minute) => ({
        date: new Date(now + minute * 60_000),
        props: { label: `Entry ${minute}` },
      }))
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Schedule timeline" onPress={scheduleTimeline} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
