import { connect }    from 'react-redux';
import Fabrica        from '../components/Fabrica';
import type { State } from '../types';


export const mapStateToProps = (state: State) => {
    return {
       configFabrica: state.configFabrica
    };
  };


const connector = connect(
    mapStateToProps,
    null
);
  
export default connector(Fabrica);
  