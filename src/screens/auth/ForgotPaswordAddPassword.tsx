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
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleAddPassword = async () => {
    if (!password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      // TODO: Implement actual login logic
      // For now, just navigate to home
      setTimeout(() => {
        navigation.navigate('MainTabs', { screen: 'Home' });
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
              <Text style={styles.formGroupTitle}>Set a New Password</Text>
              <Text style={styles.formGroupDescription}>
                Enter your new password below to regain access to your account.
              </Text>
            </View>
            <Input
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              keyboardType="default"
              autoCapitalize="none"
            />
            <Input
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm password"
              keyboardType="default"
              autoCapitalize="none"
            />
          </View>

          <Button
            title="Continue"
            onPress={handleAddPassword}
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
