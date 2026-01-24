import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';

type Props = {
  label: string;
  value: string;
  highlight?: boolean;
};

const SummaryRow = ({ label, value, highlight }: Props) => {
  return (
    <View style={styles.summaryRow}>
      <Text style={styles.summaryLabel}>{label}:</Text>
      <Text style={[styles.summaryValue, highlight && styles.summaryValueHighlight]}>
        {value}
      </Text>
    </View>
  );
};

export default SummaryRow;
