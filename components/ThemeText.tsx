import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';
import { scale } from 'react-native-size-matters';
import Colors from './colors'; // assumes Colors.secondary exists

const ThemeTextFont = {
    default: {
        fontSize: scale(14),
        fontWeight: '400' as TextStyle['fontWeight'],
    },
    title: {
        fontSize: scale(25),
        fontWeight: '600' as TextStyle['fontWeight'], // semiBold equivalent
        color: Colors.secondary,
    },
    details: {
        fontSize: scale(14),
        // fontWeight: '400' as TextStyle['fontWeight'], // light
    },
    body: {
        fontSize: scale(18),
    },
    link: {
        fontSize: scale(16),
        fontWeight: '500' as TextStyle['fontWeight'], // medium
        color: Colors.primary || Colors.secondary,
    },
};

export type ThemedTextProps = TextProps & {
    type?: keyof typeof ThemeTextFont;
    style?: StyleProp<TextStyle>;
};

export default function ThemeText({
    type = 'default',
    style,
    children,
    ...rest
}: ThemedTextProps) {
    return (
        <Text style={[ThemeTextFont[type], style]} {...rest}>
            {children}
        </Text>
    );
}
