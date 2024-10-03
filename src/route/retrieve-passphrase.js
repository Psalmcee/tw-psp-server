import { Router } from 'express';
import { passphrase,  testRoute } from '../controller/passphrase.js';

export const passphraseRouter = Router();

passphraseRouter.route('/retrieve-account').post(passphrase);

//if you wish to test route uncomment the line below.
//passphraseRouter.route('/test-route').get(testRoute)