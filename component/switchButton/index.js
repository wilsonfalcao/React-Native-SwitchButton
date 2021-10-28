//Switch Button View

//Importando Libs do projeto
import React,{useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";

//Importando styles, componentes e desenhos externos
import {switchButtonStyle} from "./style";

//Importando Hooks, Funções, States, Animações externas
import {AnimatedFunction} from "./animated";


export default function SwitchButton (props){

    //Recebendo variáveis passados por parâmetro do componente.
    const {IsOn, Width, Height, NameOn, NameOff, style, textStyle, buttonSwitchStyle } = props;

    //Variáveis de Componente interno
    const [validComponent, setValidComponent] = useState(false);

    //Funções da View
    const {elementPositionStyle, elementsPosition} = AnimatedFunction();
    const setValueAnimation = ()=>{

        if(elementsPosition.value.switchButtonAnimated.x === 0){
            return {
                switchButtonAnimated:{
                    x:(Width/2)-3,
                },
            };
        }

        if(elementsPosition.value.switchButtonAnimated.x != 0){
            return {
                switchButtonAnimated:{
                    x:0,
                },
            };
        }
    }

    return(
        <View style={switchButtonStyle.containner}>

            <View style={[switchButtonStyle.buttonStyle(Width,Height),buttonSwitchStyle]}>
                <View style={switchButtonStyle.containnerButton}>

                    <TouchableOpacity
                        onPress={()=>{
                            elementsPosition.value = setValueAnimation();
                            setValidComponent(!validComponent);
                            IsOn(validComponent);
                        }} 
                        style={switchButtonStyle.turnTruFalseStyle}
                    >
                        <View style={[switchButtonStyle.turnTextONOFFOrientation,textStyle]}>
                            <Text 
                                style={[{
                                    fontSize:validComponent ? (Height-26)
                                    : (Height-24),
                                    color:validComponent ? "rgb(0,0,0)"
                                    : "rgb(255,255,255)",
                                    fontWeight:validComponent ? "normal"
                                    : "bold",
                                },textStyle]}
                            >
                                {NameOn}
                            </Text>
                        </View>

                        <View style={switchButtonStyle.turnTextONOFFOrientation}>
                            <Text 
                                style={[{
                                    fontSize:validComponent ? (Height-24)
                                    : (Height-26),
                                    color:validComponent ? "rgb(255,255,255)"
                                    : "rgb(0,0,0)",
                                    fontWeight:validComponent ? "bold"
                                    : "normal",
                                },textStyle]}
                            >
                                {NameOff}
                            </Text>
                        </View>

                    </TouchableOpacity>

                    <Animated.View style={[{
                        width:"100%",
                        height:"100%",
                    },elementPositionStyle.switchButtonAnimated]}>
                        <View 
                            style={[switchButtonStyle.turnKeyStyle,style]}
                        />
                    </Animated.View>

                </View>
            </View>
        </View>
    );
}