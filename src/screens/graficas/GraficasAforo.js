import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { BarChart } from 'react-native-chart-kit';

const casetas = ['Caseta 1', 'Caseta 2', 'Caseta 3', 'Caseta 4', 'Caseta 5', 'Caseta 6', 'Caseta 7', 'Caseta 8', 'Caseta 9', 'Caseta 10'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    strokeWidth: 2,
};

const GraficasAforo = () => {
    const [caseta, setCaseta] = useState(casetas[0]);
    const [mes, setMes] = useState(meses[0]);
    const [aforo, setAforo] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const aforoData = [];
                for (let i = 0; i < meses.length; i++) {
                    const aforo = await AsyncStorage.getItem(`${caseta}:${meses[i]}`);
                    aforoData.push(parseFloat(aforo) || 0);
                }
                setData({ labels: meses, datasets: [{ data: aforoData }] });
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [caseta]);

    const handleCasetaChange = (itemValue) => {
        setCaseta(itemValue);

    }
    const handleMesChange = (itemValue) => {
        setMes(itemValue);
    };

    const handleAforoChange = (text) => {
        setAforo(text);
    };

    const handleSave = async () => {
        try {
            const existingAforo = await AsyncStorage.getItem(`${caseta}:${mes}`);
            if (existingAforo !== null) {
                console.log('Ya existe información para este mes');
            } else {
                await AsyncStorage.setItem(`${caseta}:${mes}`, aforo);
                console.log('Información guardada correctamente');
                const aforoData = [];
                for (let i = 0; i < meses.length; i++) {
                    const aforo = await AsyncStorage.getItem(`${caseta}:${meses[i]}`);
                    aforoData.push(parseFloat(aforo) || 0);
                }
                setData({ labels: meses, datasets: [{ data: aforoData }] });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 10 }}>Caseta:</Text>
                <Picker selectedValue={caseta} onValueChange={handleCasetaChange}>
                    {casetas.map((item, index) => (
                        <Picker.Item key={index} label={item} value={item} />
                    ))}
                </Picker>

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 10 }}>Mes:</Text>
                <Picker selectedValue={mes} onValueChange={handleMesChange}>
                    {meses.map((item, index) => (
                        <Picker.Item key={index} label={item} value={item} />
                    ))}
                </Picker>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ marginRight: 10 }}>Ganancias:</Text>
                <TextInput style={{ borderWidth: 1, padding: 5, flex: 1 }} keyboardType="numeric" value={aforo} onChangeText={handleAforoChange} />
            </View>
            <Button title="Guardar" onPress={handleSave} />
            <BarChart
                data={data}
                width={350}
                height={220}
                chartConfig={chartConfig}
                verticalLabelRotation={30}
            />
        </View>
    );


};


export default GraficasAforo;
