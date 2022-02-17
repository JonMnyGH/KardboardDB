import React from 'react';
import Images from '../config/Images';
import {
  CircleImage,
  ScreenContainer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

const BasicProfileScreen = props => {
  const { theme } = props;

  const [Title, setTitle] = React.useState('');
  const [name, setName] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewj8}
        enabled={true}
        behavior={'padding'}
      >
        <View style={styles.Viewbg} pointerEvents={'auto'}>
          <Text style={[styles.TextyJ, { color: theme.colors.strong }]}>
            {'Create Your Profile'}
          </Text>

          <Text style={[styles.TextXn, { color: theme.colors.medium }]}>
            {
              'Since this is your first time, we just need some basic information to get started. '
            }
          </Text>
          <CircleImage
            style={styles.CircleImagef6}
            source={Images.Elliot}
            size={60}
          />
        </View>

        <View pointerEvents={'auto'}>
          <TextField
            onChangeText={name => {
              try {
                setName(name);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Name'}
            type={'underline'}
            value={name}
          />
          <TextField
            onChangeText={Title => {
              try {
                setTitle(Title);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Title'}
            type={'underline'}
            value={Title}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextyJ: {
    fontSize: 24,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  TextXn: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 8,
  },
  CircleImagef6: {
    marginTop: 16,
  },
  Viewbg: {
    alignItems: 'center',
  },
  KeyboardAvoidingViewj8: {
    flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(BasicProfileScreen);
