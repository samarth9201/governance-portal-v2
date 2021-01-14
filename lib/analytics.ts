import mixpanel from 'mixpanel-browser';
import ReactGA from 'react-ga';

const env = process.env.NODE_ENV === 'production' ? 'prod' : 'test';

const config = {
  test: {
    mixpanel: {
      token: '4ff3f85397ffc3c6b6f0d4120a4ea40a',
      config: { debug: true, ip: false, api_host: 'https://api.mixpanel.com' }
    },
    gaTrackingId: 'TODO'
  },
  prod: {
    mixpanel: {
      token: 'a030d8845e34bfdc11be3d9f3054ad67',
      config: { ip: false, api_host: 'https://api.mixpanel.com' }
    },
    gaTrackingId: 'TODO'
  }
}[env];

export const mixpanelInit = () => {
  console.debug(`[Mixpanel] Tracking initialized for ${env} env using ${config.mixpanel.token}`);
  mixpanel.init(config.mixpanel.token, config.mixpanel.config);
  mixpanel.track('Pageview', { product: 'governance-portal-v2' });
};

export const gaInit = () => {
  console.debug(`[GA] Tracking initialized for ${env} env using ${config.gaTrackingId}`);
  ReactGA.initialize(config.gaTrackingId);
};
