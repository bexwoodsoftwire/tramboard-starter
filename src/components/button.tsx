import React from 'react';
import { Button } from 'react-native-paper'

const CustomButtonProps = {
    buttonText: "Text",
    onPress: ()=>{}
}

const CustomButton = (CustomButtonProps: { buttonText: string, onPress: ()=>{}|void }) => {
    
    return(
    <Button mode="contained" onPress={CustomButtonProps.onPress}>
        {CustomButtonProps.buttonText}
    </Button>
    )
    
};

export default CustomButton