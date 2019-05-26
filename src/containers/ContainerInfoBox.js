import { connect }    from 'react-redux';
import InfoBox        from '../components/InfoBox';
import type { State } from '../types';


export const mapStateToProps = (state: State) => {
    return {
       configFabrica: state.configFabrica,
       botones: state.botones,
       gameState: state.gameState
    };
};


const connector = connect(
    mapStateToProps,
    null
);
  
export default connector(InfoBox);