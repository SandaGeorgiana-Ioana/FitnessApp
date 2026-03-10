import React from 'react';
import { Platform, View, Text, Dimensions } from 'react-native';

let PieChartNative = null;
let ResponsiveContainer = null;
let PieChartWeb = null;
let Pie = null;
let Cell = null;

if (Platform.OS !== 'web') {
  PieChartNative = require('react-native-chart-kit').PieChart;
} else {
  const recharts = require('recharts');
  ResponsiveContainer = recharts.ResponsiveContainer;
  PieChartWeb = recharts.PieChart;
  Pie = recharts.Pie;
  Cell = recharts.Cell;
}

export default function ActivityChart({ data }) {
  const colors = ['#00ADEF', '#008080', '#FF6F61', '#FFC107'];
  const chartData = Object.keys(data).map((activity, index) => ({
    name: activity,
    time: data[activity],
    color: colors[index % colors.length],
  })).filter(item => item.time > 0);

  if (Platform.OS === 'web') {
    return (
      <View style={{ height:300, width: '100%', marginTop: 20}}>
        <Text style={{ textAlign: 'center', fontSize: 20 }}></Text>
        <ResponsiveContainer>
          <PieChartWeb>
            <Pie data={chartData} dataKey="time" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChartWeb>
        </ResponsiveContainer>
      </View>
    );
  }

  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{ marginTop:0}}>
      <Text style={{ textAlign: 'center', fontSize: 20 }}></Text>
      <PieChartNative
        data={chartData.map(({ name, time, color }) => ({
          name,
          time,
          color,
          legendFontColor: '#fff',
          legendFontSize: 14,
        }))}
        width={screenWidth - 20}
        height={270}
        accessor="time"
        backgroundColor="transparent"
        paddingLeft="15"
        chartConfig={{
          backgroundGradientFrom: "#1e1e1e",
          backgroundGradientTo: "#1e1e1e",
          color: () => `#00ADEF`,
          labelColor: () => `#fff`,
        }}
        style={{ borderRadius: 16 }}
      />
    </View>
  );
}
