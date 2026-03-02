import React, { useMemo, useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, spacing } from '../../constants';
import {
    StepVehicle,
    StepCategory,
    StepServices,
    StepLocation,
    StepDate,
    StepSummary,
    StepConfirm,
    CircleButton,
} from './components';
import {
    areas,
    serviceCategories,
    servicesDetails,
    steps,
    timeSlots,
    vehicleTypes,
} from './constants';
import styles from './styles';
import { Button, ProfileHeader } from '../../components';
import { useNavigation } from '@react-navigation/native';

export default function ServicesScreen() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const [activeStep, setActiveStep] = useState(0);
    const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
    const [selectedService, setSelectedService] = useState<any>(undefined);
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState('2025-10-05');
    const [selectedArea, setSelectedArea] = useState(areas[0]);
    const [address, setAddress] = useState('');
    const [selectedVehicle, setSelectedVehicle] = useState(vehicleTypes[0]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([
        serviceCategories[0].id,
    ]);

    const servicesFlat = useMemo(
        () => servicesDetails.flatMap(group => group.services),
        [],
    );

    const selectedServicesLabel = useMemo(
        () =>
            selectedServices.length && servicesFlat.length
                ? servicesFlat
                    .filter((svc: any) => selectedServices.includes(svc.id))
                    .map((svc: any) => svc.title)
                    .join(', ')
                : 'No service selected',
        [selectedServices, servicesFlat],
    );

    const selectedDateLabel = useMemo(
        () => selectedDate || 'No date selected',
        [selectedDate],
    );

    const markedDates = useMemo(
        () => ({
            [selectedDate]: {
                selected: true,
                selectedColor: colors.primary,
                selectedTextColor: colors.white,
            },
        }),
        [selectedDate],
    );

    const goNext = () => setActiveStep(prev => Math.min(prev + 1, steps.length - 1));
    const goBack = () => setActiveStep(prev => Math.max(prev - 1, 0));

    const renderStepContent = () => {
        switch (activeStep) {
            case 0: {
                return (
                    <StepVehicle
                        selectedVehicle={selectedVehicle}
                        onSelectVehicle={setSelectedVehicle}
                        onNext={goNext}
                    />
                );
            }
            case 1: {
                return (
                    <StepCategory
                        selectedCategories={selectedCategories}
                        onChangeCategories={setSelectedCategories}
                        onNext={goNext}
                    />
                );
            }
            case 2: {
                return (
                    <StepServices
                        selectedServices={selectedServices}
                        onChangeSelectedServices={setSelectedServices}
                        onChangeSelectedService={setSelectedService}
                        onNext={goNext}
                    />
                );
            }
            case 3: {
                return (
                    <StepLocation
                        selectedArea={selectedArea}
                        onChangeArea={setSelectedArea}
                        address={address}
                        onChangeAddress={setAddress}
                        onNext={goNext}
                    />
                );
            }
            case 4:
                return (
                    <StepDate
                        selectedDate={selectedDate}
                        onChangeDate={setSelectedDate}
                        markedDates={markedDates}
                        selectedSlot={selectedSlot}
                        onChangeSlot={setSelectedSlot}
                        onNext={goNext}
                    />
                );
            case 5:
                return (
                    <StepSummary
                        selectedServicesLabel={selectedServicesLabel}
                        selectedDateLabel={selectedDateLabel}
                        selectedSlot={selectedSlot}
                        selectedArea={selectedArea}
                        address={address}
                        onConfirm={goNext}
                    />
                );
            case 6:
            default:
                return (
                    <StepConfirm
                        selectedServicesLabel={selectedServicesLabel}
                        selectedDateLabel={selectedDateLabel}
                        selectedSlot={selectedSlot}
                        selectedArea={selectedArea}
                        address={address}
                    />
                );
        }
    };

    return (
        <View style={[styles.container,{paddingTop:insets.top}]}>
            <ProfileHeader
                onBack={goBack}
                onHistory={()=>{navigation.navigate('BookingHistory')}}
            />
            <View style={styles.topButtonContainer}>
                <Button
                    title="Book a Service"
                    onPress={goNext}
                    style={styles.topButton}
                    disabled={activeStep != 5}
                />
            </View>

           {activeStep < 6 && <View style={styles.stepper}>
                {steps.map((step, index) => {
                    const isActive = index <= activeStep;
                    return (
                        <View key={step.key} style={styles.stepItem}>
                            <View
                                style={[styles.stepCircle, isActive && styles.stepCircleActive]}
                            >
                                <Text style={styles.stepIcon}>{step.icon}</Text>
                            </View>
                            {index < steps.length - 1 && (
                                <View
                                    style={[styles.stepLine, isActive && styles.stepLineActive]}
                                />
                            )}
                        </View>
                    );
                })}
            </View>}

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: spacing.xxl + insets.bottom,
                }}
            >

                {renderStepContent()}
            </ScrollView>
        </View>
    );
}
