import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    invoiceNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'flex-end'
    },
    invoiceDateContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    invoiceDate: {
        fontSize: 12,
        fontStyle: 'bold',
    },
    label: {
        width: 200
    }

});


const InvoiceNo = ({invoice}) => (
    <Fragment>
        <View style={styles.invoiceNoContainer}>
            <Text style={styles.label}>Invoice No:</Text>
            <Text style={styles.invoiceDate}>{invoice.id}</Text>
        </View >
        <View style={styles.invoiceDateContainer}>
            <Text style={styles.label}>Invoice Date: </Text>
            <Text >{invoice.invoiceDate}</Text>
        </View >
        <View style={styles.invoiceDateContainer}>
            <Text style={styles.label}>Expiration Date: </Text>
            <Text >{invoice.expirationDate}</Text>
        </View >
    </Fragment>
);

export default InvoiceNo