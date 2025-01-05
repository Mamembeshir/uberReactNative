import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants'
const
    TabIcon = ({ focused, source }: { source: ImageSourcePropType, focused: boolean }) => (
        <View>
            <View >
                <Image source={source} />
            </View>
        </View>
    )
export default function _layout() {
    return (
        <Tabs
            initialRouteName='home'
            screenOptions={{
                tabBarActiveTintColor: "white"
            }}
        >
            <Tabs.Screen name='home' options={{
                title: "Home",
                tabBarIcon: ({ focused }) => <TabIcon focused={focused} source={icons.home} />

            }} />
        </Tabs>
    )
}