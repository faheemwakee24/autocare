import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';

import { Dropdown, Input } from '../../../components';
import styles from '../styles';
import { areas } from '../constants';
import { Svgs } from '../../../assets';

type Props = {
  selectedArea: string;
  onChangeArea: React.Dispatch<React.SetStateAction<string>>;
  address: string;
  onChangeAddress: React.Dispatch<React.SetStateAction<string>>;
  onNext: () => void;
};

const StepLocation = ({
  selectedArea,
  onChangeArea,
  address,
  onChangeAddress,
  onNext,
}: Props) => {
  return (
    <View style={styles.section}>
      <View style={styles.rowBetween}>
        <View/>
        <TouchableOpacity style={styles.iconContainer} onPress={onNext}>
          <Svgs.ForwardIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Select Area</Text>
      <Dropdown
        placeholder="Select your area"
        value={selectedArea}
        renderBody={({ close }) => (
          <View style={styles.areaList}>
            <View style={styles.dropdownList}>
              {areas.map(area => {
                const isSelected = area === selectedArea;
                return (
                  <Pressable
                    key={area}
                    style={[styles.areaItem, isSelected && styles.areaItemSelected]}
                    onPress={() => {
                      onChangeArea(area);
                      close();
                    }}
                  >
                    <Text
                      style={[
                        styles.areaItemText,
                        isSelected && styles.areaItemTextSelected,
                      ]}
                    >
                      {area}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        )}
      />

      <Input
        label="Address"
        placeholder="Enter your full address ( e.g., Building name)"
        value={address}
        onChangeText={onChangeAddress}
      />
    </View>
  );
};

export default StepLocation;
