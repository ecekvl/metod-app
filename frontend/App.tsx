import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Metod</Text>

      <View style={styles.card}>
      <Image source={require("./assets/noodle.png")} style={styles.image} />

        <View style={styles.cardContent}>
          <Text style={styles.recipeTitle}>🍜 Spicy Garlic Noodles</Text>
          <Text style={styles.meta}>3 ingredients · 15 mins</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 20,
  },
  card: {
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 160,
  },
  cardContent: {
    padding: 12,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  meta: {
    fontSize: 14,
    color: "#666",
  },
});
