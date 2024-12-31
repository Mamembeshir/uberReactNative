import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from './customButton';
import { icons } from '@/constants';

const OAuth = () => {
    const handleGoogleSignIn = async () => {

    }
    return (
        <View className='flex-1 '>
            <View className='flex flex-row text-lg justify-center items-center mt-4 gap-x-3' />
            <Text className='text-center'>Or</Text>
            <CustomButton
                title='Sign up with Google'
                className=' mt-4 w-full shadow-none '
                IconLeft={() => (
                    <Image source={icons.google} resizeMode='contain' className='w-5 h-5' />)}

                bgVariant='outline'
                textVariant='primary'
                onPress={handleGoogleSignIn}
            />
        </View>
    )
}

export default OAuth;