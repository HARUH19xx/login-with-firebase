import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'

const SelectBox = (props) => {
    return (
        <FormControl>
            <InputLabel>{props.label}</InputLabel>
            <Select
            required={props.required}
            value={props.value}
            onChange={(event) => {props.select(event.target.value)}}
            >
                {props.options.map((option) => (
                    <MenuItem key={option.id} value={option.id} >
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default SelectBox