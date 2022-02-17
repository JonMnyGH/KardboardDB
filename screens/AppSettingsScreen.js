import React from 'react';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const AppSettingsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View style={styles.ViewbO} pointerEvents={'auto'}>
        <Text style={[styles.TextvC, { color: theme.colors.strong }]}>
          {'Settings'}
        </Text>
      </View>

      <View style={styles.Viewyz} pointerEvents={'auto'}>
        <Touchable>
          <View style={styles.ViewfT} pointerEvents={'auto'}>
            <View style={styles.ViewYB}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'FontAwesome/user-circle'}
              />
              <Text
                style={[styles.TextR4, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Account Settings'}
              </Text>
            </View>

            <View style={styles.ViewrN}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerkY}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('StackNavigator', {
                screen: 'NotificationPermissionsScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View style={styles.Viewwo} pointerEvents={'auto'}>
            <View style={styles.Viewhb}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'FontAwesome/bell'}
              />
              <Text
                style={[styles.Text_1T, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Notifications'}
              </Text>
            </View>

            <View style={styles.View_2b}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerEw}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('StackNavigator', { screen: 'AboutScreen' });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View style={styles.ViewV0} pointerEvents={'auto'}>
            <View style={styles.Viewkp}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'AntDesign/infocirlce'}
              />
              <Text
                style={[styles.TextyW, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'About'}
              </Text>
            </View>

            <View style={styles.ViewS6}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividerv9}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
      </View>

      <View style={styles.ViewyY} pointerEvents={'auto'}>
        <Touchable>
          <View style={styles.ViewXc} pointerEvents={'auto'} />
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextvC: {
    marginBottom: 6,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewbO: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextR4: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewYB: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewrN: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewfT: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerkY: {
    height: 1,
  },
  Text_1T: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewhb: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_2b: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewwo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerEw: {
    height: 1,
  },
  TextyW: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewkp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewS6: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewV0: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividerv9: {
    height: 1,
  },
  Viewyz: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 24,
    marginRight: 24,
  },
  ViewXc: {
    flexGrow: 1,
    flexShrink: 0,
    minHeight: 54,
    justifyContent: 'center',
  },
  ViewyY: {
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(AppSettingsScreen);
