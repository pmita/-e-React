import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import style from './style.module.scss';

const FilterButtons = ({
    reduxAction,
    payload,
    active
}) => {

    const dispatch = useDispatch();

    // define our handlers
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