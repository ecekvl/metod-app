import { View, Text } from "react-native";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";

import { API_BASE } from "@env";

const LIST_URL = `${API_BASE}/api/recipes/`;
const queryClient = new QueryClient();

function Recipes() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["recipes"],
    queryFn: () => fetch(LIST_URL).then((r) => r.json()),
  });

  if (isLoading) return <Text>Loading…</Text>;
  if (error) return <Text>Error</Text>;

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 12 }}>Metod</Text>
      {data.map((r: any) => (
        <View key={r.id} style={{ marginBottom: 12 }}>
          <Text>{r.title}</Text>
          <Text>{r.photo}</Text>{/* keep it simple: just show the URL for now */}
        </View>
      ))}
    </View>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Recipes />
    </QueryClientProvider>
  );
}
