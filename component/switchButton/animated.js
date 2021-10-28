import { useSharedValue, withTiming, useAnimatedStyle } from "react-native-reanimated";


export const AnimatedFunction = ()=>{

    const elementsPosition = useSharedValue({
        switchButtonAnimated:{
            x:0,
        },
    });

    const elementPositionStyle = {
        
        switchButtonAnimated: useAnimatedStyle(()=>{
            return{
                transform:[
                    {translateX:withTiming(elementsPosition.value.switchButtonAnimated.x)},
                ],
            };
        }),
    }

    return{
        elementsPosition,
        elementPositionStyle
    }
}

//Exportando funções de animação