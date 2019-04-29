import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { ButtonState, ButtonAction } from './ficha';

export type ReduxInitAction = { type: '@@INIT' };

export type State = ButtonState; // TODO: add more states here if needed using &

export type Action =  ButtonAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;