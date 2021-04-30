import React, {Fragment} from 'react';
import {StyleSheet, Text, View} from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
    },
    description: {
        width: '60%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    qty: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    amount: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
});


const InvoiceTableRow = ({items}) => {
    const rows = items.map(item =>
        <View style={styles.row} key={item.id}>
            <Text style={styles.description}>{item.name}</Text>
            <Text style={styles.qty}>{item.quantity}</Text>
            <Text style={styles.rate}>{item.price}</Text>
            <Text style={styles.amount}>{(item.quantity * item.price).toFixed(2)}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment>)
};

export default InvoiceTableRow