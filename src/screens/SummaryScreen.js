import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { transactions } from '../data/transactions_data';

const SummaryScreen = () => {
  const totalBalance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const highSpending = transactions.filter(transaction => transaction.amount >= 100);
  const lowSpending = transactions.filter(transaction => transaction.amount < 100);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Summary Detail</Text>
      <View style={styles.row}>
        <Text>Transactions</Text>
        <Text>{transactions.length}</Text>
      </View>
      <View style={styles.row}>
        <Text>Balance</Text>
        <Text>${totalBalance.toFixed(2)}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subHeading}>High Spending</Text>
        <Text>{highSpending.length > 0 ? highSpending[0].store : 'N/A'}</Text>
        <Text>${highSpending.length > 0 ? highSpending[0].amount.toFixed(2) : '0.00'}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.subHeading}>Low Spending</Text>
        <Text>{lowSpending.length > 0 ? lowSpending[0].store : 'N/A'}</Text>
        <Text>${lowSpending.length > 0 ? lowSpending[0].amount.toFixed(2) : '0.00'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default SummaryScreen;
