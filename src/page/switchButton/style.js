import {StyleSheet} from "react-native";

export const switchButtonStyle = StyleSheet.create({

    containner:{
        flex:1,
    },
    buttonStyle:(width,height)=>{
        return({
            backgroundColor:"rgb(255,255,255)",
            borderWidth:0.5,
            borderColor:"rgb(146,146,146)",
            width:width,
            height:height,
            zIndex:990
        });
    },
    containnerButton:{
        width:"100%",
        height:"100%",
        padding:2,
        zIndex:992,
    },
    turnTruFalseStyle:{
        width:"100%",
        height:"100%",
        flexDirection:"row",
        position:"absolute",
        zIndex:995,
    },
    turnKeyStyle:{
        backgroundColor:"rgb(136,136,136)",
        width:"50%",
        height:"100%",
        zIndex:993,
    },
    turnTextONOFFOrientation:{
        width:"50%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        zIndex:996,
    },
});