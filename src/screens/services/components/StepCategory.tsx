import React from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';

import { CustomCheckbox } from '../../../components';
import styles from '../styles';
import { serviceCategories } from '../constants';
import { Svgs } from '../../../assets';

type Props = {
  selectedCategories: string[];
  onChangeCategories: React.Dispatch<React.SetStateAction<string[]>>;
  onNext: () => void;
};

const StepCategory = ({ selectedCategories, onChangeCategories , onNext }: Props) => {
  const toggleCategory = (id: string) => {
    onChangeCategories(prev => {
      if (prev.includes(id)) {
        return prev.filter(item => item !== id);
      }
      return [...prev, id];
    });
  };

  const allSelected = selectedCategories.length === serviceCategories.length;
  const toggleAll = () => {
    if (allSelected) {
      onChangeCategories([]);
    } else {
      onChangeCategories(serviceCategories.map(item => item.id));
    }
  };

  return (
    <View style={styles.section}>
      <View style={styles.rowBetween}>
        <CustomCheckbox
          label="Select All"
          checked={allSelected}
          onPress={toggleAll}
          containerStyle={styles.checkCircle}
          labelStyle={styles.checkCircleText}
        />
        
        <TouchableOpacity style={styles.iconContainer} onPress={onNext}>
          <Svgs.ForwardIcon />
        </TouchableOpacity>
      
      </View>

      <View style={styles.categoriesGrid}>
        {serviceCategories.map(category => {
          const isSelected = selectedCategories.includes(category.id);
          return (
            <Pressable
              key={category.id}
              style={[styles.categoryCard, isSelected && styles.categoryCardActive]}
              onPress={() => toggleCategory(category.id)}
            >
              <Image source={category.image} style={styles.categoryImage} />
              <View
                style={[
                  styles.categoryLabelWrap,
                  isSelected && styles.categoryLabelWrapSelected,
                ]}
              >
                <Text
                  style={[
                    styles.categoryLabel,
                    isSelected && styles.categoryLabelSelected,
                  ]}
                >
                  {category.title}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

export default StepCategory;
