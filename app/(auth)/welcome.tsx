import { View, Text, Pressable, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Swiper from 'react-native-swiper';
import { useRouter } from 'expo-router';
import { onboarding } from '@/constants';
import CustomButton from '@/components/customButton';
const OnBoarding = () => {
    const router = useRouter();
    const swiperRef = useRef<Swiper>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isLastSlide = activeIndex === onboarding.length - 1;
    return (
        <SafeAreaView className='flex h-full items-center justify-between'>
            <Pressable className='flex w-full  items-end p-5 ' onPress={() => { router.replace("/(auth)/sign-up") }}>
                <Text className='font-JakartaBold text-black text-[20px] mt-6'>Skip</Text>
            </Pressable>
            <Swiper
                ref={swiperRef}
                loop={false}
                showsPagination={true}
                dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0]' />}
                activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#2F74FA] ' />}
                onIndexChanged={(index) => { setActiveIndex(index) }}
            >
                {onboarding.map((item) => (
                    <View className=''>
                        <Image
                            source={item.image}
                            className='w-[100%] h-[300px]'
                            resizeMode='contain'
                        />
                        <View className='flex items-center justify-center'>
                            <Text className='font-JakartaBold text-black mx-6 text-[24px] mt-6'>{item.title}</Text>
                            <Text className='font-JakartaRegular text-[16px] mt-6 text-center'>{item.description}</Text>

                        </View>
                    </View>
                ))}
            </Swiper>
            <CustomButton
                className='bg-blue-500 w-[90%] py-4 rounded-full my-6'
                onPress={() => {
                    isLastSlide ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1)
                }}
                title={isLastSlide ? 'Get Started' : 'Next'}
            />

        </SafeAreaView>

    )
}

export default OnBoarding;