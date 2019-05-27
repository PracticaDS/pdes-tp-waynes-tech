import { connect }    from 'react-redux';
import TickButton     from '../components/TickButton';
import type { State,Dispatch } from '../types';
import {tick } from '../actions/MaquinaAction';


export const mapStateToProps = (state: State) => {
    return {
       gameState: state.gameState,
       botones: state.botones,
       configFabrica: state.configFabrica

    };
};


export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        tickMaquinas: () => {
            setInterval(() => { dispatch(tick());} , 3000);
      }
    };
};


const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);
  
export default connector(TickButton);
  