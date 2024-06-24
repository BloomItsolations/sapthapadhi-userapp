import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Element, scroller } from 'react-scroll';
import EditDialog from './EditDialog';
import axios from 'axios';

const EditPreference = () => {
    let userId=JSON.parse(localStorage.getItem('userdata'))?.userId;
    console.log("userId",userId);
    const [open, setOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState('');
    const [preferences, setPreferences] = useState({
        userId: 1,
        basic: {
            Age: '',
            height: '',
            maritalStatus: '',
            motherTongue: '',
            physicalStatus: '',
            eatingHabits: '',
            drinkingHabits: '',
            smokingHabits: '',
        },
        religious: {
            religion: '',
            caste: '',
            subcaste: '',
            dosh: '',
            star: '',
        },
        professional: {
            education: '',
            employedIn: '',
            occupation: '',
            annualIncome: '',
        },
        location: {
            country: '',
            ancestralOrigin: '',
        },
        about: {
            description: '',
        },
    });
    useEffect(() => {
        const fetchPreferences = async () => {
            
            try {
                const response = await axios.get(`${process.env.REACT_APP_BaseURL}/app/preferences/${userId}`);
                const preferencesData = response.data;

                setPreferences({
                    basic: {
                        Age: preferencesData.Age,
                        height: preferencesData.height,
                        maritalStatus: preferencesData.maritalStatus,
                        motherTongue: preferencesData.motherTongue,
                        physicalStatus: preferencesData.physicalStatus,
                        eatingHabits: preferencesData.eatingHabits,
                        drinkingHabits: preferencesData.drinkingHabits,
                        smokingHabits: preferencesData.smokingHabits,
                    },
                    religious: {
                        religion: preferencesData.religion,
                        caste: preferencesData.caste,
                        subcaste: preferencesData.subcaste,
                        dosh: preferencesData.dosh,
                        star: preferencesData.star,
                    },
                    professional: {
                        education: preferencesData.education,
                        employedIn: preferencesData.employedIn,
                        occupation: preferencesData.occupation,
                        annualIncome: preferencesData.annualIncome,
                    },
                    location: {
                        country: preferencesData.country,
                        ancestralOrigin: preferencesData.ancestralOrigin,
                    },
                    about: {
                        description: preferencesData.description,
                    },
                });
            } catch (error) {
                console.error('Error fetching preferences:', error);
            }
        };

        fetchPreferences();
    }, []);

    const handleClickOpen = (section) => {
        setCurrentSection(section);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = async (newValues) => {
        console.log("NewValues", newValues)
        try {
            const response = await axios.post(`${process.env.REACT_APP_BaseURL}/app/add-preference`,{...newValues,userId:userId});
            console.log('Preferences updated:', response.data);

            setPreferences((prev) => ({
                ...prev,
                [currentSection]: {
                    ...prev[currentSection],
                    ...newValues,
                },
            }));

            setOpen(false);
        } catch (error) {
            console.error('Error updating preferences:', error);
        }
    };

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <Box display="flex">
            <Box width="20%" borderRight="1px solid #ddd" padding="16px" sx={{ backgroundColor: '#49b882' }}>
                <Typography variant="h6" sx={{ color: 'white' }}>PARTNER PREFERENCES</Typography>
                <List>
                    {['Basic', 'Religious', 'Professional', 'Location', 'About'].map((section) => (
                        <ListItem button key={section} sx={{ textAlign: 'center', color: 'white' }} onClick={() => scrollToSection(section.toLowerCase())}>
                            <ListItemText primary={section} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box width="80%" padding="16px">
                <Element name="basic">
                    <Typography variant="h5">Basic Preferences</Typography>
                    {Object?.entries(preferences?.basic)?.map(([key, value]) => {
                        key !== 'userId' && <PreferenceBox
                            key={key}
                            field={key}
                            value={value}
                            onEdit={() => handleClickOpen('basic')}
                        />


                    }
                    )}
                </Element>
                <Element name="religious">
                    <Typography variant="h5">Religious Preferences</Typography>
                    {Object?.entries(preferences?.religious)?.map(([key, value]) => (
                        <PreferenceBox
                            key={key}
                            field={key}
                            value={value}
                            onEdit={() => handleClickOpen('religious')}
                        />
                    ))}
                </Element>
                <Element name="professional">
                    <Typography variant="h5">Professional Preferences</Typography>
                    {Object?.entries(preferences?.professional)?.map(([key, value]) => (
                        <PreferenceBox
                            key={key}
                            field={key}
                            value={value}
                            onEdit={() => handleClickOpen('professional')}
                        />
                    ))}
                </Element>
                <Element name="location">
                    <Typography variant="h5">Location Preferences</Typography>
                    {Object?.entries(preferences?.location)?.map(([key, value]) => (
                        <PreferenceBox
                            key={key}
                            field={key}
                            value={value}
                            onEdit={() => handleClickOpen('location')}
                        />
                    ))}
                </Element>
                <Element name="about">
                    <Typography variant="h5">What we are looking for</Typography>
                    {Object?.entries(preferences?.about)?.map(([key, value]) => {
                        key !== "userId" && <PreferenceBox
                            key={key}
                            field={key}
                            value={value}
                            onEdit={() => handleClickOpen('about')}
                        />
                    }

                    )}
                </Element>
            </Box>
            <EditDialog
                open={open}
                onClose={handleClose}
                onSave={handleSave}
                currentValues={preferences[currentSection]}
            />
        </Box>
    );
};

const PreferenceBox = ({ field, value, onEdit }) => (
    <Box display="flex" alignItems="center" justifyContent="space-between" padding="8px" borderBottom="1px solid #ddd">
        <Box>
            <Typography variant="body1">{field}</Typography>
            <Typography variant="body2" color="textSecondary">{value}</Typography>
        </Box>
        <Button onClick={onEdit}>
            <EditIcon />
        </Button>
    </Box>
);

export default EditPreference;
