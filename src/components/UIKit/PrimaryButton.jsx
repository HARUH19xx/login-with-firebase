import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    "button": {
        backgroundColor: 'rgba(0, 0, 0, 1)',
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 16,
        height: 48,
        marginButton: 16,
        width: 256
    }
})

const PrimaryButton = (props) => {
    const classes = useStyles()
    return (
        <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
            {props.label}
        </Button>
        )
}

export default PrimaryButton