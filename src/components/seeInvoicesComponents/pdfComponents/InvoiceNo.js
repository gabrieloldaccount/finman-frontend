import React, {Fragment} from 'react';
import {StyleSheet, Text, View} from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    invoiceDate: {
        fontSize: 12,
        fontStyle: 'bold',
    },
    label: {
        width: 100
    },
    customBorder: {
        padding: '10px',
        borderColor: '#bff0fd',
        borderWidth: 3,
        height: 60,
        width: 250,
        fontStyle: 'bold',
        borderStyle: 'double',
        borderRadius: '5px',
    }
});


const InvoiceNo = ({invoice}) => (
    <Fragment>
        <view style={styles.customBorder}>
            <View style={styles.invoiceNoContainer}>
                <Text style={styles.label}>Invoice No:</Text>
                <Text style={styles.invoiceDate}>{invoice.id}</Text>
            </View>
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Invoice Date: </Text>
                <Text>{invoice.invoiceDate}</Text>
            </View>
            <View style={styles.invoiceDateContainer}>
                <Text style={styles.label}>Expiration Date: </Text>
                <Text>{invoice.expirationDate}</Text>
            </View>
        </view>
    </Fragment>
);

export default InvoiceNo