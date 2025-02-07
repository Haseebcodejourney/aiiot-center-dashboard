import React from 'react';
import { Box, Grid, Card, CardContent, useTheme } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Area } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { Wrapper } from '../../Style/Charts/Tempracture';

const temperatureData = [
    { name: 'Jan', temperature: -2 },
    { name: 'Feb', temperature: 0 },
    { name: 'Mar', temperature: 5 },
    { name: 'Apr', temperature: 10 },
    { name: 'May', temperature: 15 },
    { name: 'Jun', temperature: 20 },
    { name: 'Jul', temperature: 25 },
    { name: 'Aug', temperature: 23 },
    { name: 'Sep', temperature: 18 },
    { name: 'Oct', temperature: 10 },
    { name: 'Nov', temperature: 5 },
    { name: 'Dec', temperature: 0 },
];

const categoryData = [
    { name: 'Cold (< 10°C)', value: 40 },
    { name: 'Mild (10°C - 20°C)', value: 35 },
    { name: 'Hot (> 20°C)', value: 25 },
];

const COLORS = ['#5AA9E6', '#F4C542', '#E94F37'];

export default function Tempracture() {
    const theme = useTheme();

    return (
        <>
        <Wrapper>
            <Box className="box">
                <Grid container spacing={3}>
                    {/* Line Chart for Temperature Trends */}
                    <Grid item xs={12} md={12}>
                        <Card sx={{ border: `0px solid ${theme.palette.divider}`, borderRadius: '8px' }}>
                            <CardContent>
                                <h3 style={{ color: theme.palette.text.primary }}>Temperature</h3>
                                <ResponsiveContainer width="100%" height={420}>
                                    <LineChart data={temperatureData}>
                                        <XAxis dataKey="name" stroke={theme.palette.text.primary} />
                                        <YAxis stroke={theme.palette.text.primary} />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: theme.palette.background.paper,
                                                color: theme.palette.text.primary,
                                            }}
                                        />
                                        <Legend />
                                        <Area
                                            type="monotone"
                                            dataKey="temperature"
                                            fill={theme.palette.primary.light}
                                            stroke={theme.palette.primary.main}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="temperature"
                                            stroke={theme.palette.success.main}
                                            strokeWidth={2}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Pie Chart for Temperature Categories */}
                    {/* <Grid item xs={12} md={4}>
          <Card sx={{ border: `1px solid ${theme.palette.divider}`, borderRadius: '8px' }}>
            <CardContent>
              <h3 style={{ color: theme.palette.text.primary }}>Temperature Categories</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </Grid> */}
                </Grid>
            </Box>
        </Wrapper>
        </>
    );
}
