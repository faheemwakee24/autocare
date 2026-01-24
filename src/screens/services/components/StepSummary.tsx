import React from 'react';
import { Pressable, Text, View } from 'react-native';

import GradientLine from '../../../components/ui/GradientLine';
import styles from '../styles';
import SummaryRow from './SummaryRow';
import { metrics } from '../../../utils';
import { Button } from '../../../components';

type Props = {
  selectedServicesLabel: string;
  selectedDateLabel: string;
  selectedSlot: string;
  selectedArea: string;
  address: string;
  onConfirm: () => void;
};

const StepSummary = ({
  selectedServicesLabel,
  selectedDateLabel,
  selectedSlot,
  selectedArea,
  address,
  onConfirm,
}: Props) => {
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { textAlign: 'center',marginTop:metrics.width(30) }]}>
        Booking Summary
      </Text>
      <View style={styles.summaryCard}>
        <SummaryRow label="Service" value={'Ecox Exterior Wash'} />
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
      <Button
        title="Confirm"
        onPress={onConfirm}
      />
    </View>
  );
};

export default StepSummary;
