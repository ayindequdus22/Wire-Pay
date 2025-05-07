import { StyleProp, StyleSheet, Text, type TextProps } from 'react-native';
import React from 'react'
import { scale } from 'react-native-size-matters';
const ThemeTextFont = {
    default: {
        fontSize: 16,
        lineHeight: 24,
    },
    defaultSemiBold: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    link: {
        lineHeight: 30,
        fontSize: 16,
        color: '#0a7ea4',
    }
}
export type ThemedTextProps = TextProps & {
    lightColor?: string;
    darkColor?: string;
    font?: number
    type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
    className?: string, style?: StyleProp<TextProps>
};

export default function ThemeText({ className, font, style, type = "default", ...rest }: ThemedTextProps) {
    return (
        <Text className={className} {...rest} style={[type === "default" ? ThemeTextFont.default : ThemeTextFont.defaultSemiBold, style]}
        />
    )
}