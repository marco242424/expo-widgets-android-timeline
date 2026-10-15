import { Text } from '@expo/ui/jetpack-compose';
import { createWidget } from 'expo-widgets';

type Props = { label: string };

const TimelineWidget = (props: Props) => {
  'widget';

  return <Text>{props.label}</Text>;
};

export default createWidget('TimelineWidget', TimelineWidget, { label: 'Initial' });
