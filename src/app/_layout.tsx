import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffff' },
          headerShadowVisible: false,
          headerTintColor: '#0f172a',
          headerTitleStyle: { fontSize: 20, fontWeight: '900' },
          contentStyle: { backgroundColor: '#eef4f8' },
        }}>
        <Stack.Screen name="index" options={{ title: 'Study Abroad' }} />
        <Stack.Screen name="[id]" options={{ title: 'Program Details' }} />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
}
