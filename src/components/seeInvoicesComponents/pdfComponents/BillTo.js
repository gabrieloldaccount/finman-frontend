import React from 'react';
import {StyleSheet, Text, View} from '@react-pdf/renderer';

const styles = StyleSheet.create({

    billTo: {
        paddingBottom: 8,
        fontFamily: 'Helvetica-Oblique',
        textDecoration: 'underline',
    },
    customBorder: {
        marginTop: 20,
        padding: '10px',
        borderColor: '#bff0fd',
        borderWidth: 3,
        height: 100,
        width: 250,
        fontStyle: 'bold',
        borderStyle: 'double',
        borderRadius: '5px',
    }
});

const BillTo = ({invoice}) => (
    <View style={styles.customBorder}>
        <Text style={styles.billTo}>Bill To:</Text>
        <Text>{invoice.customerName}</Text>
        <Text>{invoice.customerEmail}</Text>
        <Text>{invoice.customerAddress}</Text>
        <Text>{invoice.customerZipCode}</Text>
    </View>
);

export default BillTo