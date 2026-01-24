import React from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { Calendar, DateData } from 'react-native-calendars';

import { Dropdown, Input } from '../../../components';
import { colors, typography } from '../../../constants';
import styles from '../styles';
import { timeSlots } from '../constants';
import { Svgs } from '../../../assets';

type Props = {
  selectedDate: string;
  onChangeDate: React.Dispatch<React.SetStateAction<string>>;
  markedDates: Record<string, any>;
  selectedSlot: string;
  onChangeSlot: React.Dispatch<React.SetStateAction<string>>;
  onNext: () => void;
};

const StepDate = ({
  selectedDate,
  onChangeDate,
  markedDates,
  selectedSlot,
  onChangeSlot,
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
      <Text style={styles.sectionTitle}>Select Date</Text>

      <Dropdown
        placeholder="Select your date"
        value={''}
        renderBody={({ close }) => (
          <View style={styles.calendar}>
            <Calendar
              current={selectedDate}
              onDayPress={(day: DateData) => {
                onChangeDate(day.dateString);
                close();
              }}
              markedDates={markedDates}
              hideExtraDays
              disableAllTouchEventsForDisabledDays
              theme={{
                selectedDayBackgroundColor: colors.primary,
                selectedDayTextColor: colors.white,
                todayTextColor: colors.primary,
                arrowColor: colors.text.primary,
                textDayFontFamily: typography.fontFamily.medium,
                textMonthFontFamily: typography.fontFamily.semiBold,
                textDayHeaderFontFamily: typography.fontFamily.medium,
                textDayFontSize: typography.fontSize.md,
                textMonthFontSize: typography.fontSize.md,
                textDayHeaderFontSize: typography.fontSize.sm,
              }}
              style={styles.calendarComponent}
            />
          </View>
        )}
      />

      <Input
        label="Available Slots"
        placeholder="Select your time slot"
        value={selectedSlot}
      />

      <View style={[styles.slotList, styles.slotListSpacing]}>
        {timeSlots.map(slot => {
          const isSelected = slot === selectedSlot;
          return (
            <Pressable
              key={slot}
              onPress={() => onChangeSlot(slot)}
              style={[styles.slotChip, isSelected && styles.slotChipActive]}
            >
              <Text style={[styles.slotText, isSelected && styles.slotTextActive]}>
                {slot}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default StepDate;
