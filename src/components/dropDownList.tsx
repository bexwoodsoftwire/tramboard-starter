import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

const DropDownList: React.FC<{data: { key: string; value: string; }[]}> = ({ 
    data,
}) => {
    const [selected, setSelected] = React.useState("");
    
    return(
    <SelectList 
        setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
        data={data} 
        save="value"
    />
    )
    
};

export default DropDownList