import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

// Components
import { Button, Input, Checkbox } from '../../components/ui';

// Assets
import { Svgs, images } from '../../assets';

// Hooks
import { useNavigation } from '../../hooks';

// Constants
import {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
} from '../../constants';
import { metrics } from '../../utils';
import GradientLine from '../../components/ui/GradientLine';

export default function ForgotPaswordAddEmailScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const handleAddEmail = async () => {
    if (!email) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      // TODO: Implement actual login logic
      // For now, just navigate to home
      setTimeout(() => {
        navigation.navigate('ForgotPasswordAddOTP');
        setLoading(false);
      }, 1000);
    } catch (error) {
      Alert.alert('Error', 'Login failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar translucent backgroundColor="red" barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Image source={images.AuthMain} style={styles.heroImage} />

        <View style={styles.form}>
          <View style={styles.formGroup}>
            <View style={styles.formGroupTitleContainer}>
              <Text style={styles.formGroupTitle}>Forgot Password</Text>
              <Text style={styles.formGroupDescription}>
                Enter your email and we’ll send a link to reset your password
              </Text>
            </View>
            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Button
            title="Continue"
            onPress={handleAddEmail}
            loading={loading}
            size="lg"
            style={styles.loginButton}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {
    flexGrow: 1,
    paddingBottom: spacing.xl,
    //backgroundColor: colors.white,
  },
  heroImage: {
    width: '100%',
    height: metrics.screenWidth * 0.8,
    overflow: 'visible',
  },
  form: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
    gap: spacing.mdl4,
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: spacing.xl2,
  },
  loginButton: {
    borderRadius: borderRadius.full,
  },

  formGroup: {
    gap: spacing.mdl,
  },
  formGroupTitleContainer: {
    gap: spacing.xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formGroupTitle: {
    fontSize: typography.fontSize.xl,
    color: colors.text.title,
    fontFamily: typography.fontFamily.semiBold,
  },
  formGroupDescription: {
    fontSize: typography.fontSize.sm,
    color: colors.text.primary,
    fontFamily: typography.fontFamily.regular,
    textAlign: 'center',
    marginHorizontal: spacing.mdl2,
    marginTop: spacing.md,
  },
});
