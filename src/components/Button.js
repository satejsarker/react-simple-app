import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children}) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
            </TouchableOpacity>
       
    );
};
const styles = {
    textStyle: {
        fontSize: 16,
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10,

    },
buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5,

}
}

export default Button;
