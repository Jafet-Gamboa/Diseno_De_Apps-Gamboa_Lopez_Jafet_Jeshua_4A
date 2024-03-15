import React from "react";
import { useState, useEffect } from "react";
import { Text, View, ActivityIndicator, StyleSheet, FlatList } from "react-native";
import { ScrollView, Platform } from 'react-native';

const url = "https://jsonplaceholder.typicode.com/todos";

export default function Tres({navigation}){

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch(url)
        .then(response => response.json())
        .then(result => {
            setIsLoading(false);
            setData(result);
        }, error => {
            setIsLoading(false);
            setError(error);
        })
    }, []);

    const getContent = () => {
        if (isLoading){
            return(
                <View>
                    <Text style={styles.textProps}> Loading data... </Text>
                    <ActivityIndicator size="large" color="green" />
                </View>
            );
        }
        if (error){
            return <Text>{error}</Text>
        }
        const filteredData = data.filter(item => !item.completed);
        return(
            <View style={styles.container}>
                <FlatList 
                showsVerticalScrollIndicator={false}
                data = {filteredData}
                renderItem={ ({item}) => (
                    <ScrollView horizontal={true}>
                        <View style={styles.table}>
                            <View style={styles.tableHeader}>
                            <Text style={styles.headerText}>ID</Text>
                            <Text style={styles.headerText}>Title</Text>
                            </View>
                            <View style={styles.tableRow}>
                                <Text style={styles.rowText}> {item.id} </Text>
                                <Text style={styles.rowText}> {item.title} </Text>
                            </View>
                        </View>
                    </ScrollView>
                )}
                />
            </View>
        )
    }

    console.log(data);

    return(
        <View style={styles.container}>
            {getContent()}
        </View>
    );

    
}

const styles = StyleSheet.create({
    textProps: {
        fontSize: 34,
    },
    text: {
        fontSize: 14,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 500,
    },
    table: {
      flexDirection: 'column',
      borderWidth: 1,
      borderColor: '#000',
    },
    tableHeader: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#000',
    },
    headerText: {
      flex: 1,
      textAlign: 'center',
      fontWeight: 'bold',
      padding: 5,
    },
    tableRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderColor: '#000',
    },
    rowText: {
      flex: 1,
      textAlign: 'center',
      padding: 5,
    },
  });