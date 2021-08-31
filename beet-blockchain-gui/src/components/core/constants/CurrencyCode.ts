import Unit from './Unit';
import { IS_MAINNET } from './constants';

export default {
  [Unit.beet]: IS_MAINNET ? 'xbt' : 'Txbt',
};
