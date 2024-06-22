import React, { useState } from 'react';
import { MenuItem, FormControl, Select, InputLabel, Box, Container } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ProfileViewGraph = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [profileViews, setProfileViews] = useState([]);

  const months = [
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ];

  // Simulated data fetching
  const fetchProfileViews = (month) => {
    // Simulated data for example purposes
    const data = {
      January: [5, 10, 5, 20, 30, 25, 15, 10, 20, 30, 40, 50],
      February: [10, 20, 10, 30, 40, 35, 25, 20, 30, 40, 50, 60],
      March: [50, 40, 10, 90, 10, 35, 25, 54, 20, 90, 25, 45],
      April: [30, 10, 50, 55, 35, 75, 45, 20, 30, 55, 45, 75],
      May: [20, 25, 15, 25, 40, 65, 25, 20, 30, 40, 50, 85],
      June: [15, 20, 15, 35, 70, 45, 85, 35, 45, 40, 60, 80],
      July: [10, 20, 10, 30, 40, 35, 65, 30,55, 30, 40, 90],
      August: [10, 20, 10, 30, 40, 35, 25, 20, 30, 40, 50, 60],
      September: [50, 45, 10, 20, 60, 35, 75, 20, 50, 30, 50, 85],
      October: [10, 20, 10, 30, 40, 35, 25, 20, 30, 75, 50, 30],
      November: [10, 20, 10, 30, 40, 35, 25, 20, 30, 40, 50, 60],
      December: [15, 25, 60, 25, 55, 35, 15, 25, 65, 40, 50, 65],
    };
    setProfileViews(data[month] || []);
  };

  const handleMonthChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
    fetchProfileViews(month);
  };

  const data = {
    labels: Array.from({ length: 31 }, (_, i) => i + 1), 
    datasets: [
      {
        label: 'Profile Views',
        data: profileViews,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <Container>
      <Box sx={{ minWidth: 120, marginTop: 4 }}>
        <FormControl fullWidth>
          <InputLabel id="month-select-label">Month</InputLabel>
          <Select
            labelId="month-select-label"
            id="month-select"
            value={selectedMonth}
            label="Month"
            onChange={handleMonthChange}
          >
            {months.map((month) => (
              <MenuItem key={month.value} value={month.value}>
                {month.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ marginTop: 4 }}>
        {selectedMonth && profileViews.length > 0 && (
          <Line data={data} />
        )}
      </Box>
    </Container>
  );
};

export default ProfileViewGraph;
