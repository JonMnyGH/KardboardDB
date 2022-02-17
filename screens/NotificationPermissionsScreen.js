import React from 'react';
import Images from '../config/Images';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const NotificationPermissionsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={styles.screen}
      scrollable={false}
      hasSafeArea={true}
    >
      <View style={styles.Viewjn}>
        <View style={styles.ViewPY}>
          <Image
            style={styles.ImageZ6}
            resizeMode={'cover'}
            source={Images.PermissionsNotification}
          />
          <Text style={styles.TextOl}>{'Enable Notifications'}</Text>

          <Text style={[styles.Textdq, { color: theme.colors.medium }]}>
            {'Stay up to date with the latest updates and alerts. '}
          </Text>
        </View>

        <View style={styles.ViewQg}>
          <ButtonSolid
            style={[
              styles.ButtonSolid_7c,
              {
                backgroundColor: theme.colors.background,
                borderRadius: 64,
                color: theme.colors.light,
              },
            ]}
            title={'SKIP'}
          />
          <ButtonSolid
            style={[
              styles.ButtonSolidvC,
              { backgroundColor: theme.colors.primary, borderRadius: 64 },
            ]}
            title={'ENABLE NOTIFICATIONS'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageZ6: {
    width: 128,
    height: 128,
  },
  TextOl: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    lineHeight: 32,
    fontSize: 24,
  },
  Textdq: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  ViewPY: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  ButtonSolid_7c: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
  },
  ButtonSolidvC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
  },
  ViewQg: {
    justifyContent: 'space-evenly',
  },
  Viewjn: {
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 20,
  },
  screen: {
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(NotificationPermissionsScreen);
