import React from 'react';
import { SafeAreaView, View  , StyleSheet , StatusBar , Platform, ScrollView} from 'react-native';

function Screen({children}) {
    return (
        <SafeAreaView style={styles.screen}>
        

            <View>{children}</View>
         

           
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        paddingTop:Platform.OS==='android' ? StatusBar.currentHeight : 0
        
    }
})

export default Screen;