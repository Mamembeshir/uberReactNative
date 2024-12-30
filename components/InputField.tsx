import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Image, TextInput, Keyboard } from 'react-native'
import React from 'react'
import { InputFieldProps } from '@/types/type';

const InputField = ({
    label,
    labelStyle,
    icon,
    secureTextEntry = false,
    containerStyle,
    inputStyle,
    iconStyle,
    className,
    ...props
}: InputFieldProps) => {
    return (
        <KeyboardAvoidingView >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View >
                    <View className='my-2 w-full' >
                        <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>{label}</Text>
                    </View>
                    <View className={`px-4 flex-row justify-start items-center  bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${containerStyle}`}>
                        {icon && <Image source={icon} className={`w-6 h-6 ${iconStyle} `} />}
                        <TextInput className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`} secureTextEntry={secureTextEntry} {...props} />
                    </View>
                </View>


            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default InputField;