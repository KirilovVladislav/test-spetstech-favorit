import { reducer, actions, initialState } from './slice';

describe('Reducer: app', () => {
  it('initialize slice with initialState', () => {
    const state = reducer(undefined, { type: 'unknown' });

    expect(state).toStrictEqual(initialState);
  });
  describe('actions', () => {
    it('setStatus action', () => {
      const state = reducer(
        initialState,
        actions.setStatus({ status: 'loading' })
      );

      expect(state).toStrictEqual({
        ...initialState,
        status: 'loading',
      });
    });
  });
});
