import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants'
const
    TabIcon = ({ focused, source }: { source: ImageSourcePropType, focused: boolean }) => (
        <View className={`flex flex-row justify-center items-center w-14 h-14 rounded-full ${focused ? `bg-general-300` : ''}`}>
            <View className={`rounded-full items-center justify-center w-14 h-14 ${focused ? `bg-general-400` : ''}`}>
                <Image source={source} tintColor="white" resizeMode='contain' className='h-7 w-7' />
            </View>
        </View>
    )
export default function _layout() {
    return (
        <Tabs
            initialRouteName='home'
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#333333",
                    borderRadius: 35,
                    paddingTop: 0,
                    paddingBottom: 25,
                    overflow: "hidden",
                    marginHorizontal: 20,
                    marginBottom: 20,
                    height: 70,
                    display: "flex",
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: "row",
                    position: 'absolute'


                }
            }}
        >
            <Tabs.Screen name='home' options={{
                title: "Home",
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />

            }} />
            <Tabs.Screen name='chat' options={{
                title: "Home",
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />

            }} />
            <Tabs.Screen name='history' options={{
                title: "Home",
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />

            }} />
            <Tabs.Screen name='profile' options={{
                title: "Home",
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />

            }} />
        </Tabs>
    )
}