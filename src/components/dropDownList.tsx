import React from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import { StyleSheet } from 'react-native'

const DropDownList: React.FC<{data: { key: string; value: string; }[], setSelected: any}> = ({ 
    data,
    setSelected,
}) => (
    <SelectList 
        boxStyles={styles.boxStyles}
        setSelected={(val: React.SetStateAction<string>) => setSelected(val)} 
        data={data} 
        save="value"
    />
);

export default DropDownList

const styles = StyleSheet.create({
    boxStyles: {
      backgroundColor: 'gold',
      alignItems: 'center',
      justifyContent: 'center',
      margin:  5
    }
  })