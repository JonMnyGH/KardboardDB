import React from 'react';
import * as DraftbitExampleDataApi from '../apis/DraftbitExampleDataApi.js';
import { Divider, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const MyTeamScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      <View style={styles.ViewXz}>
        <Text
          style={[styles.Textul, { color: theme.colors.medium }]}
          numberOfLines={2}
        >
          {'Layabouts'}
        </Text>
        <Divider
          style={styles.DividereM}
          color={theme.colors.light}
          height={1}
        />
        <DraftbitExampleDataApi.FetchPeopleGET>
          {({ loading, error, data, doFetch }) => {
            const fetchData = data;
            if (!fetchData || loading) {
              return <ActivityIndicator />;
            }

            if (error) {
              return (
                <Text style={{ textAlign: 'center' }}>
                  There was a problem fetching this data
                </Text>
              );
            }

            return (
              <FlatList
                data={data}
                renderItem={({ item }) => {
                  const listData = item;
                  return (
                    <View style={styles.ViewKT} pointerEvents={'auto'}>
                      <View style={styles.Viewk5} pointerEvents={'auto'}>
                        <View
                          style={[
                            styles.ViewHL,
                            {
                              borderRadius: theme.roundness,
                              backgroundColor: theme.colors.strongInverse,
                              borderColor: theme.colors.divider,
                            },
                          ]}
                        >
                          <Image
                            style={[
                              styles.Imagepe,
                              { borderRadius: theme.roundness },
                            ]}
                            source={{ uri: item['avatar'] }}
                            resizeMode={'cover'}
                          />
                          <View style={styles.ViewME}>
                            <Text
                              style={[
                                theme.typography.subtitle1,
                                styles.Textza,
                                { color: theme.colors.medium },
                              ]}
                              allowFontScaling={true}
                            >
                              {item && item['first_name']}
                            </Text>

                            <Text
                              style={[
                                theme.typography.caption,
                                styles.Textw7,
                                { color: theme.colors.light },
                              ]}
                              allowFontScaling={true}
                            >
                              {item && item['username']}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
                contentContainerStyle={styles.FlatListKsContent}
                numColumns={3}
                data={data}
                horizontal={false}
              />
            );
          }}
        </DraftbitExampleDataApi.FetchPeopleGET>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textul: {
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 12,
    fontFamily: 'System',
    fontWeight: '200',
  },
  DividereM: {
    height: 1,
    marginTop: 14,
    marginLeft: 32,
    marginRight: 32,
  },
  Imagepe: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    opacity: 0.85,
  },
  Textza: {
    textAlign: 'center',
  },
  Textw7: {
    textAlign: 'center',
  },
  ViewME: {
    alignSelf: 'center',
    alignContent: 'center',
  },
  ViewHL: {
    justifyContent: 'center',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingTop: 16,
    paddingBottom: 16,
    width: 100,
  },
  Viewk5: {
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 4,
    marginRight: 4,
  },
  ViewKT: {
    marginLeft: 4,
    marginRight: 4,
    marginTop: 10,
  },
  FlatListKsContent: {
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  ViewXz: {
    flex: 1,
  },
});

export default withTheme(MyTeamScreen);
