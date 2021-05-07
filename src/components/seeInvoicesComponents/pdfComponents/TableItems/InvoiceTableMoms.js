import React from 'react';
import {StyleSheet, Text, View} from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#bff0fd',
        borderBottomWidth: 0, // since InvoiceItemsTable already has border-width
        alignItems: 'center',
        height: 24,
        fontSize: 12,
        fontStyle: 'bold',
    },
    description: {
        width: '85%',
        textAlign: 'right',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingRight: 8,
    },
    total: {
        width: '15%',
        textAlign: 'right',
        paddingRight: 8,
    },
});


const InvoiceTableMoms = ({items}) => {
    const total = items.map(item => item.amount * item.price)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return (
        <View style={styles.row}>
            <Text style={styles.description}>MOMS 25%</Text>
            <Text style={styles.total}>{Number.parseFloat(total*0.25).toFixed(2)} kr</Text>
        </View>
    )
};

export default InvoiceTableMoms
