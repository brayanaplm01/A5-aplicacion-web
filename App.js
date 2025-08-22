import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Alert,
  ActivityIndicator,
  SafeAreaView,
  ScrollView
} from 'react-native';

const WEATHER_API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY || 'aaef684086464d4e9bf120112252208';
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/current.json';

export default function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeatherData = async () => {
    if (!city.trim()) {
      Alert.alert('Error', 'Por favor ingresa el nombre de una ciudad');
      return;
    }

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await fetch(
        `${WEATHER_API_URL}?key=${WEATHER_API_KEY}&q=${encodeURIComponent(city)}&aqi=no`
      );

      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
      } else {
        throw new Error(data.error?.message || 'Ciudad no encontrada');
      }
    } catch (err) {
      setError(err.message);
      Alert.alert('Error', err.message);
    } finally {
      setLoading(false);
    }
  };

  const clearData = () => {
    setCity('');
    setWeatherData(null);
    setError('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>🌤️ Visor de Clima</Text>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ingresa el nombre de la ciudad"
            placeholderTextColor="#666"
            value={city}
            onChangeText={setCity}
            onSubmitEditing={fetchWeatherData}
          />
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={fetchWeatherData}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Buscar</Text>
            )}
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {weatherData && (
            <View style={styles.weatherCard}>
              <Text style={styles.cityName}>
                📍 {weatherData.location.name}, {weatherData.location.country}
              </Text>
              
              <View style={styles.temperatureContainer}>
                <Text style={styles.temperature}>
                  {Math.round(weatherData.current.temp_c)}°C
                </Text>
                <Text style={styles.temperatureF}>
                  ({Math.round(weatherData.current.temp_f)}°F)
                </Text>
              </View>

              <Text style={styles.condition}>
                {weatherData.current.condition.text}
              </Text>

              <View style={styles.detailsContainer}>
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>Sensación térmica</Text>
                  <Text style={styles.detailValue}>
                    {Math.round(weatherData.current.feelslike_c)}°C
                  </Text>
                </View>
                
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>Humedad</Text>
                  <Text style={styles.detailValue}>
                    {weatherData.current.humidity}%
                  </Text>
                </View>
                
                <View style={styles.detailItem}>
                  <Text style={styles.detailLabel}>Viento</Text>
                  <Text style={styles.detailValue}>
                    {weatherData.current.wind_kph} km/h
                  </Text>
                </View>
              </View>

              <TouchableOpacity style={styles.clearButton} onPress={clearData}>
                <Text style={styles.clearButtonText}>Nueva búsqueda</Text>
              </TouchableOpacity>
            </View>
          )}

          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>❌ {error}</Text>
            </View>
          )}
        </ScrollView>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',
  },
  mainContainer: {
    flex: 1,
    padding: 20,
  },
  scrollContainer: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  weatherCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    textAlign: 'center',
  },
  temperatureContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#3498db',
  },
  temperatureF: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 5,
  },
  condition: {
    fontSize: 18,
    color: '#34495e',
    fontStyle: 'italic',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  detailItem: {
    alignItems: 'center',
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: '#7f8c8d',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  clearButton: {
    backgroundColor: '#e74c3c',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorContainer: {
    backgroundColor: '#e74c3c',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  errorText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
