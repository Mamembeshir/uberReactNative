import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonProps } from '@/types/type';

const CustomButton = ({
    onPress,
    title,
    bgVariant = "primary",
    textVariant = "default",
    className,
    IconLeft,
    IconRight,
    ...props
}: ButtonProps) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className={`flex-row items-center justify-center rounded-full ${className}`}
            {...props}
        >
            {IconLeft && <IconLeft />}
            <Text className={`text-white font-medium`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
