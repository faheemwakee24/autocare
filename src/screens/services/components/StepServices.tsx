import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { CustomCheckbox } from '../../../components';
import styles from '../styles';
import { servicesDetails } from '../constants';
import { Svgs } from '../../../assets';

type Props = {
  selectedServices: string[];
  onChangeSelectedServices: React.Dispatch<React.SetStateAction<string[]>>;
  onChangeSelectedService: React.Dispatch<any>;
  onNext: () => void;
};

const StepServices = ({
  selectedServices,
  onChangeSelectedServices,
  onChangeSelectedService,
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
      {servicesDetails.map(group => (
        <View key={group.label} style={styles.serviceSection}>
          <Text style={styles.sectionTitle}>{group.label}</Text>
          {group.services.map(service => {
            const isSelected = selectedServices.includes(service.id);
            const toggleService = () => {
              onChangeSelectedServices(prev =>
                prev.includes(service.id)
                  ? prev.filter(id => id !== service.id)
                  : [...prev, service.id],
              );
              onChangeSelectedService(prev =>
                prev?.id === service.id ? undefined : service,
              );
            };

            return (
              <Pressable
                key={service.id}
                style={[
                  styles.serviceRow,
                  styles.serviceRowList,
                  isSelected && styles.serviceRowActive,
                ]}
                onPress={toggleService}
              >
                <Image source={service.image} style={styles.serviceThumb} />
                <View style={styles.serviceDetails}>
                  <Text style={styles.serviceName}>{service.title}</Text>
                  <Text style={styles.serviceMeta}>{service.duration}</Text>
                  <Text style={styles.servicePrice}>{service.price}</Text>
                </View>
                <CustomCheckbox
                  checked={isSelected}
                  onPress={toggleService}
                  containerStyle={styles.inlineCheckbox}
                />
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );
};

export default StepServices;
