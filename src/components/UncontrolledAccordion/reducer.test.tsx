import React from 'react';
import {reducer, StateType, TOGGLE_COLLAPSED} from './reducer';


test('collapsed should be true', () => {
    // Data
    const state: StateType = {
        collapsed: false
    }
    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // expect
    expect(newState.collapsed).toBe(true)
})
test('collapsed should be false', () => {
    // Data
    const state: StateType = {
        collapsed: true
    }
    // action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    // expect
    expect(newState.collapsed).toBe(false)
})
test('reducer should throw because action type is incorrect', () => {
    // Data
    const state: StateType = {
        collapsed: true
    }
    // expect
    expect(() => {
        reducer(state, {type: 'FakeType'})
    }).toThrowError()

})