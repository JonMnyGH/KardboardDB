import React from 'react';
import Images from '../config/Images';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AboutScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingView_1F}
        behavior={'position'}
        enabled={true}
        keyboardVerticalOffset={44}
      >
        <View style={styles.Viewaw}>
          <Image
            style={styles.ImageWo}
            resizeMode={'stretch'}
            source={Images.Playstore}
          />
          <Text
            style={[
              styles.TextRq,
              {
                color: theme.colors.strong,
                textDecorationColor: theme.colors.primary,
              },
            ]}
          >
            {'Welcome to Kardboard\n'}
          </Text>
        </View>
        <View style={styles.ViewzX} />
        <View style={styles.ViewaB} />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageWo: {
    width: 80,
    height: 80,
    marginBottom: 46,
  },
  TextRq: {
    textTransform: 'none',
    fontSize: 32,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  Viewaw: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 34,
    paddingTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    alignSelf: 'center',
  },
  ViewzX: {
    paddingLeft: 32,
    paddingRight: 32,
    marginBottom: 24,
  },
  ViewaB: {
    paddingBottom: 32,
    alignItems: 'center',
    paddingTop: 32,
  },
  KeyboardAvoidingView_1F: {
    justifyContent: 'space-around',
    flexGrow: 1,
  },
});

export default withTheme(AboutScreen);
