import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';

import type { ButtonAction } from './ButtonType';

import type { GameState } from './GameState';

export type ReduxInitAction = { type: '@@INIT' };

export type State = GameState; // TODO: add more states here if needed using &

export type Action =  ReduxInitAction | ButtonAction;

export type Store = ReduxStore<State, Action>;

export type Dispatch = ReduxDispatch<Action>;