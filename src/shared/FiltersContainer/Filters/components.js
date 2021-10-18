import React, { useCallback } from 'react';
import style from './style.module.scss';
// REDUX
import { useDispatch } from 'react-redux';

const FilterButtons = ({
    reduxAction,
    payload,
    active
}) => {
    // REDUX
    const dispatch = useDispatch();

    // EVENT HANDLERS
    const dispatchReduxHandler = useCallback(() => dispatch(reduxAction(payload)),[dispatch, reduxAction, payload]);
    return(
        <button 
            className={active ? `${style.btn_filter} ${style.active}` : `${style.btn_filter}`}
            onClick={dispatchReduxHandler}
        >
            {payload}
        </button>
    );
}

export default FilterButtons;