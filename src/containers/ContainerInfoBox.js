import { connect }    from 'react-redux';
import InfoBox        from '../components/InfoBox';
import type { State } from '../types';


export const mapStateToProps = (state: State) => {
    return {
       configFabrica: state.configFabrica,
       botones: state.botones,
       celdas: state.celdas,
       statusInfoBox: state.statusInfoBox
    };
};


const connector = connect(
    mapStateToProps,
    null
);
  
export default connector(InfoBox);