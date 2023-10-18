import React from 'react';
import { Button } from 'react-native-paper'

const CustomButton: React.FC<{buttonText: string, onPress: () => void; }> = ({ 
    buttonText,
	onPress,
}) => (
    <Button mode="contained" onPress={onPress}>
        {buttonText}
    </Button>
);

export default CustomButton;