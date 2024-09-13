import React from 'react';
import { View , StyleSheet , Text } from 'react-native';

function AppText({children}) {
    return (
        <Text style={styles.text}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        marginLeft:20,
    }
})

export default AppText;