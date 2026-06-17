import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getProgramById } from '@/data';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const program = getProgramById(Number(id));

  if (!program) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Program not found</Text>
          <Text style={styles.emptyText}>Please go back and select a valid study abroad program.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['bottom']}>
      <Stack.Screen options={{ title: program.university }} />
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <View style={[styles.heroAccent, { backgroundColor: program.accentColor }]} />
          <View style={[styles.countryBadge, { backgroundColor: `${program.accentColor}22` }]}>
            <Text style={[styles.country, { color: program.accentColor }]}>{program.country}</Text>
          </View>
          <Text style={styles.title}>{program.university}</Text>
          <Text style={styles.program}>{program.program}</Text>
          <Text style={styles.description}>{program.description}</Text>
        </View>

        <View style={styles.detailsGrid}>
          <InfoBox label="City" value={program.city} accentColor={program.accentColor} />
          <InfoBox label="Tuition" value={program.tuition} accentColor={program.accentColor} />
          <InfoBox label="Duration" value={program.duration} accentColor={program.accentColor} />
          <InfoBox label="Intake" value={program.intake} accentColor={program.accentColor} />
        </View>

        <View style={styles.section}>
          <View>
            <Text style={styles.sectionLabel}>Application support</Text>
            <Text style={styles.sectionTitle}>{program.scholarship}</Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.sectionLabel}>Program Highlights</Text>
          <View style={styles.highlights}>
            {program.highlights.map((highlight) => (
              <View key={highlight} style={styles.highlightChip}>
                <View style={[styles.dot, { backgroundColor: program.accentColor }]} />
                <Text style={styles.highlightText}>{highlight}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function InfoBox({
  label,
  value,
  accentColor,
}: {
  label: string;
  value: string;
  accentColor: string;
}) {
  return (
    <View style={styles.infoBox}>
      <View style={[styles.infoMarker, { backgroundColor: accentColor }]} />
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eef4f8',
  },
  content: {
    width: '100%',
    maxWidth: 960,
    alignSelf: 'center',
    padding: 20,
    paddingBottom: 40,
    gap: 18,
  },
  hero: {
    overflow: 'hidden',
    borderRadius: 8,
    backgroundColor: '#102033',
    padding: 24,
    gap: 12,
    shadowColor: '#0f172a',
    shadowOpacity: 0.18,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 5,
  },
  heroAccent: {
    position: 'absolute',
    right: -52,
    top: -44,
    width: 190,
    height: 190,
    borderRadius: 95,
    opacity: 0.22,
  },
  countryBadge: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  country: {
    fontSize: 13,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 0,
  },
  title: {
    color: '#ffffff',
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '900',
    maxWidth: 760,
  },
  program: {
    color: '#b8c7d7',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '800',
  },
  description: {
    color: '#e5eef8',
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 760,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  infoBox: {
    flexGrow: 1,
    flexBasis: 190,
    minHeight: 118,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d7e2ee',
    borderRadius: 8,
    padding: 16,
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#1f2937',
    shadowOpacity: 0.07,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  infoMarker: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 5,
  },
  infoLabel: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 0,
  },
  infoValue: {
    color: '#0f172a',
    fontSize: 18,
    lineHeight: 25,
    fontWeight: '900',
  },
  section: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d7e2ee',
    borderRadius: 8,
    padding: 20,
    gap: 14,
    shadowColor: '#1f2937',
    shadowOpacity: 0.06,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 2,
  },
  sectionLabel: {
    color: '#64748b',
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 0,
  },
  sectionTitle: {
    color: '#0f172a',
    fontSize: 22,
    lineHeight: 30,
    fontWeight: '900',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#e2e8f0',
  },
  highlights: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  highlightChip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  highlightText: {
    color: '#233247',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '700',
  },
  emptyState: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  emptyTitle: {
    color: '#0f172a',
    fontSize: 24,
    fontWeight: '900',
  },
  emptyText: {
    color: '#475569',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
});
