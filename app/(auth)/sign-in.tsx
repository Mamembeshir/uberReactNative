import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images } from '@/constants';
import InputField from '@/components/InputField';
import CustomButton from '@/components/customButton';
import { Link } from 'expo-router';
import OAuth from '@/components/OAuth';

const SignIn = () => {
    const [form, setForm] = useState({
        Email: "",
        password: ""

    })
    const onSignInPress = async () => {

    }

    return (
        <ScrollView className='flex-1 bg-white'>
            <View className='flex-1 bg-white'>
                <View className='relative w-full h-[250px]'>
                    <Image
                        source={images.signUpCar}
                        className=' w-full h-[250px]'
                    />
                    <Text className='z-10 text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>
                        Welcome 👋
                    </Text>
                </View>
                <View className='px-5'>

                    <InputField
                        label='Email'
                        placeholder='Enter your Password'
                        icon={icons.email}
                        value={form.Email}
                        onChangeText={(value) => setForm({ ...form, Email: value })}
                        labelStyle='text-[#333333] font-JakartaSemiBold text-sm'
                    />
                    <InputField
                        label='password'
                        placeholder='Enter your password'
                        icon={icons.lock}
                        secureTextEntry={true}
                        value={form.password}
                        onChangeText={(value) => setForm({ ...form, password: value })}
                        labelStyle='text-[#333333] font-JakartaSemiBold text-sm'
                    />
                    <CustomButton
                        title='sign In'
                        onPress={onSignInPress}
                        className='mt-6 bg-[#0286FF] p-4 text-white '
                    />
                    <OAuth />
                    <View className='flex-row justify-center items-center mt-14'>
                        <Text className='text-[#858585] font-Jakarta text-sm'>Don't have an account? </Text>
                        <Link href="/(auth)/sign-up" className='text-[#0286FF] font-JakartaRegular text-sm'>Sign Up</Link>

                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default SignIn;