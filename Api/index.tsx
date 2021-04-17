import {Configuration, DefaultApi} from './generated';

export default {
    Api: new DefaultApi({apiKey: process.env.NEXT_PUBLIC_API_KEY} as Configuration),
};