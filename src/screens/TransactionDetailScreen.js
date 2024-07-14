import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.amount}>${transaction.amount}</Text>
        <Text style={styles.store}>{transaction.store}</Text>
        <Text style={styles.location}>{transaction.location}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Transaction Date</Text>
          <Text style={styles.infoValue}>{transaction.date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#3F8AE0',
    color: '#FFFFFF'
  },
  amount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },
  store: {
    fontSize: 16,
    color: '#FFF',
  },
  location: {
    fontSize: 16,
    color: '#FFF',
  },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  infoLabel: {
    fontSize: 16,
    color: '#333',
  },
  infoValue: {
    fontSize: 16,
    color: '#777',
  },
});

export default TransactionDetailScreen;
