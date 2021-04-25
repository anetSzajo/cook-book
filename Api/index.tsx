import {Configuration, DefaultApi} from './generated';

export default {
    Api: new DefaultApi({apiKey: process.env.API_KEY} as Configuration),
};