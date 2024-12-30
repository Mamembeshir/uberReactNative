import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images } from '@/constants';
import InputField from '@/components/InputField';
import CustomButton from '@/components/customButton';
import { Link } from 'expo-router';
import OAuth from '@/components/OAuth';

const SignUp = () => {
    const [form, setForm] = useState({
        Name: "",
        Email: "",
        password: ""

    })
    const onSignupPress = async () => {

    }
    return (
        <ScrollView className='flex-1 bg-white'>
            <View className='flex-1 bg-white'>
                <View className='relative w-full h-[250px]'>
                    <Image
                        source={images.signUpCar}
                        className='z-10 w-full h-[250px]'
                    />
                    <Text className='text-2xl text-black font-JakartaSemiBold px-3'>Create your account</Text>
                </View>
                <View className='p-5 my-6'>
                    <InputField
                        label='Name'
                        placeholder='Enter your Name'
                        icon={icons.person}
                        value={form.Name}
                        onChangeText={(value) => setForm({ ...form, Name: value })}
                        labelStyle='text-[#333333] font-JakartaSemiBold text-sm'
                    />
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
                        title='signup'
                        onPress={onSignupPress}
                        className='mt-6 bg-[#0286FF] text-white '
                    />
                    <OAuth />
                    <View className='flex-row justify-center items-center mt-6'>
                        <Text className='text-[#333333] font-JakartaRegular text-sm'>Already have an account? </Text>
                        <Link href="/(auth)/sign-in" className='text-[#0286FF] font-JakartaRegular text-sm'>Login</Link>

                    </View>
                </View>
            </View>

        </ScrollView>
    )
}

export default SignUp;