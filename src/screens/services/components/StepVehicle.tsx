import React from 'react';
import { View, Pressable, Image, Text, TouchableOpacity } from 'react-native';

import { Dropdown, Input } from '../../../components';
import styles from '../styles';
import { vehicleTypes } from '../constants';
import { Svgs } from '../../../assets';

type Props = {
  selectedVehicle: (typeof vehicleTypes)[number];
  onSelectVehicle: (vehicle: (typeof vehicleTypes)[number]) => void;
  onNext: () => void;
};

const StepVehicle = ({ selectedVehicle, onSelectVehicle , onNext }: Props) => {
  return (
    <View style={styles.section}>
      <View style={styles.rowBetween}>
        <View/>
        <TouchableOpacity style={styles.iconContainer} onPress={onNext}>
          <Svgs.ForwardIcon />
        </TouchableOpacity>
      </View>
      <Dropdown
        label="Vehicle Type"
        placeholder="Select your vehicle type"
        value={selectedVehicle.label}
        renderBody={({ close }) => (
          <View style={styles.vehicleCard}>
            {vehicleTypes.map((vehicle, index) => {
              const isSelected = vehicle.id === selectedVehicle.id;
              return (
                <View key={vehicle.id}>
                  <Pressable
                    style={[styles.vehicleRow, isSelected && styles.vehicleRowActive]}
                    onPress={() => {
                      onSelectVehicle(vehicle);
                      close();
                    }}
                  >
                    <Image source={vehicle.image} style={styles.vehicleImage} />
                    <Text style={styles.vehicleLabel}>{vehicle.label}</Text>
                  </Pressable>
                  {index < vehicleTypes.length - 1 && (
                    <View style={styles.dashedDivider} />
                  )}
                </View>
              );
            })}
          </View>
        )}
      />

      <Input
        label="Vehicle Make"
        placeholder="Enter your vehicle make (e.g, Toyota)"
      />
      <Input
        label="Vehicle Model"
        placeholder="Enter your vehicle model (e.g., Land Cruiser)"
      />
      <Input
        label="License Plate (Optional)"
        placeholder="Enter you vehicle’s license plate (e.g., R-1234)"
      />
    </View>
  );
};

export default StepVehicle;
