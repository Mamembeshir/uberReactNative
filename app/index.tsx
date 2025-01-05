import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router';
import { useAuth } from '@clerk/clerk-expo';

const Home = () => {
    return <Redirect href="/(auth)/welcome" />
}

export default Home;