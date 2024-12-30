import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from './customButton';
import { icons } from '@/constants';

const OAuth = () => {
    return (
        <View className='flex-1 '>
            <View className='flex flex-row text-lg justify-center items-center mt-4 gap-x-3' />
            <Text>Or</Text>
            <CustomButton
                title='Sign up with Google'
                className=' text-white mt-4'
                IconLeft={icons.google}
            />
        </View>
    )
}

export default OAuth;