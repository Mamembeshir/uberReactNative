import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ButtonProps } from '@/types/type';

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
    switch (variant) {
        case "secondary":
            return "bg-gray-500";
        case "danger":
            return "bg-red-500";
        case "success":
            return "bg-green-500";
        case "outline":
            return "bg-transparent border-neutral-300 border-[0.5px]";
        default:
            return "bg-[#0286FF]";
    }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
    switch (variant) {
        case "primary":
            return "text-black";
        case "secondary":
            return "text-gray-100";
        case "danger":
            return "text-red-100";
        case "success":
            return "text-green-100";
        default:
            return "text-white";
    }
};

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
            className={`flex-row items-center justify-center rounded-full gap-x-3 s  ${className}`}
            {...props}
        >
            {IconLeft && <IconLeft />}
            <Text className={` ${getTextVariantStyle(textVariant)} font-normal`}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
