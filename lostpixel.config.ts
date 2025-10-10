import { CustomProjectConfig } from 'lost-pixel';

    export const config: CustomProjectConfig = {
      pageShots: {
      pages: [ { path: '/', name: 'landing' } ],
      baseUrl: 'http://172.17.0.1:3000',
    },
      lostPixelProjectId: 'cmgl0r6fm0ridp2d24vpuharm',
      apiKey: process.env.LOST_PIXEL_API_KEY,
    };