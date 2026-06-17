import { Link } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { programs } from '@/data';

export default function HomeScreen() {
const { width } = useWindowDimensions();
const isWide = width > 760;

return ( <SafeAreaView style={styles.safeArea}>
<FlatList
data={programs}
keyExtractor={(item) => item.id.toString()}
numColumns={isWide ? 2 : 1}
key={isWide ? '2' : '1'}
contentContainerStyle={styles.content}
columnWrapperStyle={isWide ? styles.row : undefined}
ListHeaderComponent={ <View style={styles.hero}><View style={styles.heroAccent} />
        <Text style={styles.eyebrow}>Study Abroad Programs</Text>

        <Text style={styles.title}>
          Find the right global campus
        </Text>

        <Text style={styles.subtitle}>
          Compare universities, tuition fees, intakes and program details.
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{programs.length}</Text>
            <Text style={styles.statLabel}>Programs</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statValue}>4</Text>
            <Text style={styles.statLabel}>Countries</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.statValue}>2026</Text>
            <Text style={styles.statLabel}>Ready</Text>
          </View>
        </View>
      </View>
    }
    renderItem={({ item }) => (
      <Link href={`/${item.id}`} asChild>
        <Pressable
          style={({ pressed }) => [
            styles.card,
            isWide && styles.wideCard,
            pressed && { opacity: 0.9 }
          ]}
        >
          <View
            style={[
              styles.topBar,
              { backgroundColor: item.accentColor }
            ]}
          />

          <View style={styles.cardHeader}>
            <View
              style={[
                styles.countryBadge,
                { backgroundColor: `${item.accentColor}18` }
              ]}
            >
              <Text
                style={[
                  styles.country,
                  { color: item.accentColor }
                ]}
              >
                {item.country}
              </Text>
            </View>

            <Text style={styles.duration}>
              {item.duration}
            </Text>
          </View>

          <Text style={styles.cardTitle}>
            {item.university}
          </Text>

          <Text style={styles.program}>
            {item.program}
          </Text>

          <Text style={styles.description}>
            {item.description}
          </Text>

          <View style={styles.metaPanel}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>{item.city}</Text>

            <Text style={styles.label}>Intake</Text>
            <Text style={styles.value}>{item.intake}</Text>
          </View>

          <View style={styles.footer}>
            <Text style={styles.scholarship}>
              {item.scholarship}
            </Text>

            <Text
              style={[
                styles.viewDetails,
                { color: item.accentColor }
              ]}
            >
              View Details
            </Text>
          </View>
        </Pressable>
      </Link>
    )}
  />
</SafeAreaView>
);
}

const styles = StyleSheet.create({
safeArea: {
flex: 1,
backgroundColor: '#eef4f8',
},

content: {
padding: 20,
gap: 18,
},

row: {
gap: 18,
},

hero: {
backgroundColor: '#102033',
borderRadius: 8,
padding: 24,
marginBottom: 18,
overflow: 'hidden',
},

heroAccent: {
position: 'absolute',
top: -30,
right: -40,
width: 180,
height: 180,
borderRadius: 90,
backgroundColor: '#2dd4bf',
opacity: 0.18,
},

eyebrow: {
color: '#7dd3fc',
fontSize: 13,
fontWeight: 'bold',
textTransform: 'uppercase',
},

title: {
color: '#fff',
fontSize: 34,
fontWeight: 'bold',
marginTop: 10,
},

subtitle: {
color: '#d6e4f0',
marginTop: 10,
fontSize: 16,
},

statsRow: {
flexDirection: 'row',
marginTop: 20,
gap: 10,
},

statBox: {
borderWidth: 1,
borderColor: 'rgba(255,255,255,0.15)',
padding: 10,
borderRadius: 8,
},

statValue: {
color: '#fff',
fontWeight: 'bold',
fontSize: 18,
},

statLabel: {
color: '#b8c7d7',
fontSize: 12,
},

card: {
flex: 1,
backgroundColor: '#fff',
borderRadius: 8,
padding: 18,
borderWidth: 1,
borderColor: '#d7e2ee',
minHeight: 300,
},

wideCard: {
maxWidth: '50%',
},

topBar: {
height: 5,
position: 'absolute',
left: 0,
right: 0,
top: 0,
},

cardHeader: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 5,
},

countryBadge: {
paddingHorizontal: 10,
paddingVertical: 6,
borderRadius: 8,
},

country: {
fontWeight: 'bold',
fontSize: 12,
},

duration: {
color: '#64748b',
},

cardTitle: {
fontSize: 24,
fontWeight: 'bold',
marginTop: 10,
},

program: {
color: '#2563eb',
marginTop: 6,
fontWeight: '600',
},

description: {
marginTop: 10,
color: '#415165',
},

metaPanel: {
marginTop: 15,
backgroundColor: '#f8fafc',
borderWidth: 1,
borderColor: '#e2e8f0',
borderRadius: 8,
padding: 12,
},

label: {
color: '#64748b',
fontSize: 12,
fontWeight: 'bold',
},

value: {
marginBottom: 6,
fontWeight: '600',
},

footer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 15,
},

scholarship: {
flex: 1,
color: '#475569',
fontSize: 13,
},

viewDetails: {
fontWeight: 'bold',
},
});
