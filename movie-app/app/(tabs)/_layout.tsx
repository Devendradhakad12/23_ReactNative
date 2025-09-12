import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

const TabIcon = ({ focused, icon, title }: { focused: boolean, icon: any, title: string }) => (
    <>{
        focused ? <ImageBackground source={images.highlight} className='flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden' >
            <Image source={icon} tintColor={"#151312"} className='size-5' />
            <Text className={`ml-2 text-base font-bold ${focused ? 'text-black' : 'text-gray-400'}`}>{title}</Text>
        </ImageBackground> : <View className='size-full justify-center items-center  rounded-full'>
            <Image source={icon} tintColor={focused ? "#fff" : "#A3A3A3"} className='size-6 mt-4' />
        </View>
    }</>
)

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle:{
                width:'100%',
                height:'100%',
                alignItems:'center',
                justifyContent:'center'
            }
        }}>
            <Tabs.Screen name="index" options={{
                headerShown: false, title: 'Home', tabBarIcon: ({ focused }) =>
                    <> <TabIcon focused={focused} icon={icons.home} title={'Home'} /> </>
            }} />
            <Tabs.Screen name="search" options={{ headerShown: false, title: 'Search', tabBarIcon: ({ focused }) => <> <TabIcon focused={focused} icon={icons.search} title={'Search'} /> </> }} />
            <Tabs.Screen name="saved" options={{ headerShown: false, title: 'Saved', tabBarIcon: ({ focused }) => <> <TabIcon focused={focused} icon={icons.save} title={'Saved'} /> </> }} />
            <Tabs.Screen name="profile" options={{ headerShown: false, title: 'Profile', tabBarIcon: ({ focused }) => <> <TabIcon focused={focused} icon={icons.person} title={'Profile'} /> </> }} />
        </Tabs>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})