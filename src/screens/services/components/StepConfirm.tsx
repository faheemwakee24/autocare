import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { Svgs } from '../../../assets';
import GradientLine from '../../../components/ui/GradientLine';
import styles from '../styles';
import SummaryRow from './SummaryRow';
import { Button } from '../../../components';
import { useNavigation } from '@react-navigation/native';

type Props = {
  selectedServicesLabel: string;
  selectedDateLabel: string;
  selectedSlot: string;
  selectedArea: string;
  address: string;
};

const StepConfirm = ({
  selectedServicesLabel,
  selectedDateLabel,
  selectedSlot,
  selectedArea,
  address,
}: Props) => {
  const navigation = useNavigation();
    return (
    <View style={styles.section}>
      <View style={styles.confirmBadge}>
        <Svgs.SucessTick />
      </View>
      <Text style={styles.confirmTitle}>Your booking is confirmed</Text>
      <View style={styles.summaryCard}>
        <SummaryRow label="Service" value={selectedServicesLabel} />
        <SummaryRow label="Date" value={selectedDateLabel} />
        <SummaryRow label="Time Slot" value={selectedSlot} />
        <SummaryRow label="Location" value={selectedArea} />
        <SummaryRow label="Address" value={address || 'Not provided'} />
        <GradientLine
          height={1}
          style={styles.dividerLine}
          colors={['#5C737400', '#5C737480', '#5C737400']}
        />
        <SummaryRow label="Total" value="AED 70" highlight />
      </View>
      <Button title="Track" onPress={() => navigation.navigate('Track' as never)} />
    </View>
  );
};

export default StepConfirm;
