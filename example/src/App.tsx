import { useRef, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Platform,
} from 'react-native';
import { fixPlaceholderEllipsize } from 'react-native-input-placeholder-ellipsized';

const LONG_PLACEHOLDER =
  'This is a very long placeholder text that should be truncated with an ellipsis when it does not fit in the available space of the TextInput component';

export default function App() {
  const input1Ref = useRef<TextInput>(null);
  const input2Ref = useRef<TextInput>(null);
  const input3Ref = useRef<TextInput>(null);

  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  useEffect(() => {
    [input1Ref, input2Ref, input3Ref].forEach((ref) => {
      console.log('ref', ref);

      if (ref.current) {
        fixPlaceholderEllipsize(ref.current);
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>TextInput Placeholder Ellipsis Demo</Text>

        <Text style={styles.subtitle}>Platform: {Platform.OS}</Text>

        <View style={styles.section}>
          <Text style={styles.label}>1. Default width (100%):</Text>
          <TextInput
            ref={input1Ref}
            style={styles.input}
            placeholder={LONG_PLACEHOLDER}
            placeholderTextColor="#666"
            value={input1}
            onChangeText={setInput1}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>2. Fixed width (200dp):</Text>
          <TextInput
            ref={input2Ref}
            style={[styles.input, { width: 200 }]}
            placeholder={LONG_PLACEHOLDER}
            placeholderTextColor="#666"
            value={input2}
            onChangeText={setInput2}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>3. With border and padding:</Text>
          <TextInput
            ref={input3Ref}
            style={[styles.input, styles.borderedInput]}
            placeholder={LONG_PLACEHOLDER}
            placeholderTextColor="#666"
            value={input3}
            onChangeText={setInput3}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 48,
    backgroundColor: '#FFF',
    fontSize: 16,
    color: '#000',
  },
  borderedInput: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
});
