import React from 'react';
import * as KardboardUsersApi from '../apis/KardboardUsersApi.js';
import * as CustomCode from '../components.js';
import * as Utils from '../utils';
import { Divider, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const KardboardStatusScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View style={styles.Viewy8}>
        <View style={styles.View_7i}>
          <Text style={[styles.Textqz, { color: theme.colors.secondary }]}>
            {'Kardboard\n'}
          </Text>

          <Touchable style={styles.TouchableLh}>
            <Text
              style={[
                theme.typography.headline6,
                { color: theme.colors.secondary },
              ]}
            >
              {'See All'}
            </Text>
          </Touchable>
        </View>

        <ScrollView
          contentContainerStyle={styles.ScrollViewlhContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <KardboardUsersApi.FetchUserStatusGET>
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
                      <Touchable>
                        <View style={styles.Viewdg}>
                          <View style={styles.Viewfo}>
                            <View
                              style={[
                                styles.ViewWu,
                                {
                                  borderColor: theme.colors.light,
                                  borderRadius: theme.roundness,
                                  backgroundColor: theme.colors.background,
                                },
                              ]}
                            >
                              <>
                                {!listData?.statuscolor ? null : (
                                  <Utils.CustomCodeErrorBoundary>
                                    <CustomCode.statusViewComponent
                                      color={listData.statuscolor}
                                    />
                                  </Utils.CustomCodeErrorBoundary>
                                )}
                              </>
                            </View>

                            <View style={styles.ViewBH}>
                              <Text
                                style={[
                                  theme.typography.body1,
                                  { color: theme.colors.strong },
                                ]}
                              >
                                {listData?.name}
                              </Text>

                              <View style={styles.View_9X}>
                                <>
                                  {!listData?.email ? null : (
                                    <Text
                                      style={[
                                        theme.typography.caption,
                                        { color: theme.colors.light },
                                      ]}
                                    >
                                      {listData?.email}
                                    </Text>
                                  )}
                                </>
                                <View style={styles.ViewrF}>
                                  <View style={styles.ViewSR} />
                                </View>
                              </View>
                            </View>
                          </View>

                          <View style={styles.Viewbe}>
                            <Text
                              style={[
                                theme.typography.body2,
                                { color: theme.colors.primary },
                              ]}
                            >
                              {null}
                            </Text>

                            <Text
                              style={[
                                theme.typography.body2,
                                { color: theme.colors.primary },
                              ]}
                            >
                              {listData?.price}
                            </Text>
                          </View>
                        </View>
                        <Divider
                          style={styles.Divider_0V}
                          height={1}
                          color={theme.colors.divider}
                        />
                      </Touchable>
                    );
                  }}
                  contentContainerStyle={styles.FlatListe7Content}
                  numColumns={1}
                  data={data}
                />
              );
            }}
          </KardboardUsersApi.FetchUserStatusGET>
        </ScrollView>

        <View style={styles.Viewzt} pointerEvents={'auto'}>
          <Divider style={styles.Dividerw9} color={theme.colors.secondary} />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textqz: {
    fontFamily: 'AdventPro_500Medium',
    fontSize: 40,
    marginTop: 0,
    paddingTop: 0,
  },
  TouchableLh: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  View_7i: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    paddingLeft: 32,
    paddingRight: 32,
  },
  ViewWu: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 48,
    minHeight: 48,
    maxWidth: 48,
    maxHeight: 48,
    marginRight: 14,
  },
  ViewSR: {
    marginRight: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewrF: {
    alignItems: 'center',
    marginRight: 18,
    flexDirection: 'row',
  },
  View_9X: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ViewBH: {
    alignSelf: 'stretch',
  },
  Viewfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '75%',
    marginRight: 14,
  },
  Viewbe: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Viewdg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,
    paddingTop: 8,
  },
  Divider_0V: {
    height: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  FlatListe7Content: {
    flex: 1,
  },
  ScrollViewlhContent: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  Dividerw9: {
    height: 1,
  },
  Viewzt: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
  },
  Viewy8: {
    paddingBottom: 16,
    paddingTop: 34,
    paddingTop: 0,
    flex: 1,
  },
});

export default withTheme(KardboardStatusScreen);
