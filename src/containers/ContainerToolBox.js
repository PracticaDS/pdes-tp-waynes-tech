import { connect } from 'react-redux';
import { selectButton } from '../actions/ButtonAction';
import  ToolBox         from '../components/ToolBox';

import type { State, Dispatch } from '../types';

export const mapStateToProps = (state: State) => {
    return {
       botones: state.botones
    };
  };


export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onButtonToolClick: (id, name, price) => {
            dispatch(selectButton(id, name, price));
      }
    };
};
  
const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);
  
export default connector(ToolBox);
  