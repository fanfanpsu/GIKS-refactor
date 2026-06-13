import React, {Fragment} from 'react';

import './BuildControls.css';

const buildControls = (props) => (
    <Fragment>
        {/*<div className={classes.BuildControls}>*/}
        {/*    <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>*/}
        {/*    {controls.map(ctrl => (*/}
        {/*        <BuildControl*/}
        {/*            key={ctrl.label}*/}
        {/*            label={ctrl.label}*/}
        {/*            added={() => props.ingredientAdded(ctrl.type)}*/}
        {/*            removed={() => props.ingredientRemoved(ctrl.type)}*/}
        {/*            disabled={props.disabled[ctrl.type]}/>*/}
        {/*    ))}*/}
        {/*    <button*/}
        {/*        className={classes.OrderButton}*/}
        {/*        disabled={!props.purchasable}*/}
        {/*        onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button>*/}
        {/*</div>*/}
    </Fragment>

);

export default buildControls;