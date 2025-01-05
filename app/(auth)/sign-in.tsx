import { View, Text, ScrollView, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { icons, images } from '@/constants';
import InputField from '@/components/InputField';
import CustomButton from '@/components/customButton';
import { Link, useRouter } from 'expo-router';
import OAuth from '@/components/OAuth';
import { useSignIn } from '@clerk/clerk-expo';

const SignIn = () => {

    const { signIn, setActive, isLoaded } = useSignIn()
    const router = useRouter()
    const [form, setForm] = useState({
        email: "",
        password: ""

    })
    // Handle the submission of the sign-in form
    const onSignInPress = useCallback(async () => {
        if (!isLoaded) return

        // Start the sign-in process using the email and password provided
        try {
            const signInAttempt = await signIn.create({
                identifier: form.email,
                password: form.password,
            })

            // If sign-in process is complete, set the created session as active
            // and redirect the user
            if (signInAttempt.status === 'complete') {
                await setActive({ session: signInAttempt.createdSessionId })
                router.replace('/(root)/(tabs)/home')
            } else {
                // If the status isn't complete, check why. User might need to
                // complete further steps.
                console.error(JSON.stringify(signInAttempt, null, 2))
            }
        } catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            console.error(JSON.stringify(err, null, 2))
        }
    }, [isLoaded, form.email, form.password])

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
                        value={form.email}
                        onChangeText={(value) => setForm({ ...form, email: value })}
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