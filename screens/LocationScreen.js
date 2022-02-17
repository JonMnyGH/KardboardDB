import React from 'react';
import * as CustomCode from '../components.js';
import * as Utils from '../utils';
import { ScreenContainer } from '@draftbit/ui';

const LocationScreen = props => {
  return (
    <ScreenContainer>
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.MyMapComponent />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default LocationScreen;
