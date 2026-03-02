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
import { Button, Input, Checkbox, CustomStatusBar } from '../../components/ui';

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
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
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

  const handleSignupPress = () => {
    navigation.navigate('Signup');
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPasswordAddEmail');
  };

  const handleGoogleSignIn = () => {
    console.log('test')
    // TODO: Hook up Google sign-in
    navigation.navigate('DriverBottomTabs',{screen:'Home'})
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar  backgroundColor="red" barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <CustomStatusBar />
        <Image source={images.AuthMain} style={[styles.heroImage, { marginTop: insets.top }]} />

        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter password"
              secureTextEntry
            />
          </View>

          <View style={styles.metaRow}>
            <Checkbox
              checked={rememberMe}
              onPress={() => setRememberMe(!rememberMe)}
              label="Remember me"
              containerStyle={styles.checkboxContainer}
            />
            <View style={{ flex: 1 }} />
            <TouchableOpacity onPress={handleForgotPasswordPress}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <Button
            title="Sign In"
            onPress={handleLogin}
            loading={loading}
            size="lg"
            style={styles.loginButton}
          />

          <View style={styles.dividerRow}>
            <GradientLine
              height={1}
              style={styles.dividerLine}
              colors={['#5C737400', '#5C737480', '#5C7374']}
            />
            <Text style={styles.dividerText}>Or continue with</Text>
            <GradientLine
              height={1}
              style={styles.dividerLine}
              colors={['#5C7374', '#5C737480', '#5C737400']}
            />
          </View>

          <Button
            title="Sign In with Google"
            onPress={handleGoogleSignIn}
            variant="outline"
            size="lg"
            leftIcon={<Svgs.Google />}
            style={styles.googleButton}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>Don’t have an account? </Text>
            <TouchableOpacity onPress={handleSignupPress}>
              <Text style={styles.signupText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
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
  hero: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
    position: 'relative',
  },
  heroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: metrics.height(36),
    backgroundColor: colors.primary,
    borderBottomLeftRadius: borderRadius.xxl,
    borderBottomRightRadius: borderRadius.xxl,
  },
  heroImage: {
    width: '100%',
    height: metrics.screenWidth * 0.8,
    overflow: 'visible',
  },
  logoOverlay: {
    position: 'absolute',
    top: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
    gap: spacing.mdl4,
  },
  loginButton: {
    borderRadius: borderRadius.full,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    marginRight: spacing.sml,
  },
  forgotText: {
    fontSize: typography.fontSize.xsm,
    color: colors.text.title,
    fontFamily: typography.fontFamily.semiBold,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  dividerLine: {
    height: 1,
    width: 'auto',
    flex: 1,
    backgroundColor: colors.border.light,
  },
  dividerText: {
    fontSize: typography.fontSize.xsm,
    color: colors.text.secondary,
    fontFamily: typography.fontFamily.regular,
  },
  googleButton: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xxl2,
    borderWidth: 2,
    borderColor: colors.border.light,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  footerText: {
    fontSize: typography.fontSize.xsm,
    color: colors.text.title,
    fontFamily: typography.fontFamily.regular,
  },
  signupText: {
    fontSize: typography.fontSize.sm,
    color: colors.text.title,
    fontFamily: typography.fontFamily.bold,
  },
  formGroup: {
    gap: spacing.mdl,
  },
});
