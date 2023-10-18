import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

const DropDownListProps = {
    data: []
}

const DropDownList = (DropDownListProps: { data: {}[]; }) => {
    const [selected, setSelected] = React.useState("");
    
    return(
    <SelectList 
        setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
        data={DropDownListProps.data} 
        save="value"
    />
    )
    
};

export default DropDownList