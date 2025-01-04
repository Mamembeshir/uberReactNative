import { View, Text, ScrollView, Image, TextInput, Button, Alert } from 'react-native'
import React, { useState, version } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images } from '@/constants';
import InputField from '@/components/InputField';
import CustomButton from '@/components/customButton';
import { Link, useRouter } from 'expo-router';
import OAuth from '@/components/OAuth';
import { useSignUp } from '@clerk/clerk-expo';
import ReactNativeModal from 'react-native-modal';
const SignUp = () => {
    const [form, setForm] = useState({
        Name: "",
        Email: "",
        password: ""

    })
    const { isLoaded, signUp, setActive } = useSignUp();
    const router = useRouter();
    const [code, setCode] = useState('');
    const [verification, setVerification] = useState({
        state: "default",
        error: "",
        code: ""
    });
    const onSignUpPress = async () => {
        if (!isLoaded) return

        // Start sign-up process using email and password provided
        try {
            await signUp.create({
                emailAddress: form.Email,
                password: form.password,
            })

            // Send user an email with verification code
            await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

            // Set 'pendingVerification' to true to display second form
            // and capture OTP code
            setVerification({ ...verification, state: "pending" })
        } catch (err: any) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            Alert.alert("title", err.errors[0].longMessage)

        }


        const onVerifyPress = async () => {
            if (!isLoaded) return

            try {
                // Use the code the user provided to attempt verification
                const signUpAttempt = await signUp.attemptEmailAddressVerification({
                    code,
                })

                // If verification was completed, set the session to active
                // and redirect the user
                if (signUpAttempt.status === 'complete') {
                    await setActive({ session: signUpAttempt.createdSessionId })
                    router.replace('/')
                } else {
                    // If the status is not complete, check why. User may need to
                    // complete further steps.
                    console.error(JSON.stringify(signUpAttempt, null, 2))
                }
            } catch (err) {
                // See https://clerk.com/docs/custom-flows/error-handling
                // for more info on error handling
                console.error(JSON.stringify(err, null, 2))
            }
        }

        if (verification.state === "pending") {
            return (
                <>
                    <Text>Verify your email</Text>
                    <TextInput
                        value={code}
                        placeholder="Enter your verification code"
                        onChangeText={(code) => setCode(code)}
                    />
                    <Button title="Verify" onPress={onVerifyPress} />
                </>
            )
        }


        return (
            <ScrollView className='flex-1 bg-white'>
                <View className='flex-1 bg-white'>
                    <View className='relative w-full h-[250px]'>
                        <Image
                            source={images.signUpCar}
                            className=' w-full h-[250px]'
                        />
                        <Text className='z-10 text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5'>Create your account</Text>
                    </View>
                    <View className='px-5'>
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
                            onPress={onSignUpPress}
                            className='mt-6 bg-[#0286FF] p-4 text-white '
                        />
                        <OAuth />
                        <View className='flex-row justify-center items-center mt-14'>
                            <Text className='text-[#858585] font-Jakarta text-sm'>Already have an account? </Text>
                            <Link href="/(auth)/sign-in" className='text-[#0286FF] font-JakartaRegular text-sm'>Login</Link>

                        </View>
                        <ReactNativeModal
                            isVisible={verification.state === "pending"}
                            onModalHide={() => { setVerification({ ...verification, state: "pending" }) }}
                        >
                            <View className='bg-white px-7 py-9 rounded-xl min-h-[300px]'>
                                <Text className='text-2xl font-JakartaSemiBold'>
                                    Verification
                                </Text>
                                <Text className='mt-3 font-JakartaMedium'>
                                    We've sent a verification email to {form.Email}.
                                </Text>
                                <InputField
                                    label='code'
                                    placeholder='12345'
                                    icon={icons.lock}
                                    value={verification.code}
                                    keyboardType='numeric'
                                    onChangeText={(code) => { setVerification({ ...verification, code: code }) }}
                                />
                                {verification.error && (
                                    <View className='text-red mt-1 text-sm'>
                                        {verification.error}

                                    </View>
                                )}
                                <CustomButton
                                    title='Verfiy'
                                    onPress={onVerifyPress}
                                    className='py-4 mt-6 bg-success-500'
                                />

                            </View>
                        </ReactNativeModal>
                        <ReactNativeModal isVisible={verification.state === "success"}>
                            <View className='bg-white px-7 py-8 rounded-2xl min-h-[300px]'>
                                <Image source={images.check} className='mx-auto h-40 w-40' />
                                <View className='flex flex-col justify-center items-center my-3'>
                                    <Text className='font-JakartaSemiBold text-3xl text-black'>Verified!</Text>
                                    <Text className='text-[#858585] text-lg text-center mx-8'>You have successfully verified your account.</Text>
                                    <CustomButton title='Browse Home' onPress={() => { router.replace('/(root)/(tabs)/home') }} className='bg-[#0286FF] w-full py-5 my-4' />
                                </View>
                            </View>




                        </ReactNativeModal>
                    </View>

                </View>

            </ScrollView>
        )
    }
}

export default SignUp;