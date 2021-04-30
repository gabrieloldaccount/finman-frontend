import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({

    billTo: {
        marginTop: 20,
        paddingBottom: 3,
        fontFamily: 'Helvetica-Oblique'
    },
});


const BillTo = ({invoice}) => (
    <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Bill To:</Text>
        <Text>{invoice.customerName}</Text>
        <Text>{invoice.customerEmail}</Text>
        <Text>{invoice.customerAddress}</Text>
        <Text>{invoice.customerZipCode}</Text>
    </View>
);

export default BillTo