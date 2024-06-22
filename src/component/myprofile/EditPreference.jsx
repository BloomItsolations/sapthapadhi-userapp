
import React, { useState, useRef, useEffect } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import EditDialog from './EditDialog';

const EditPreference = () => {
    const [open, setOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState('');
    const [preferences, setPreferences] = useState({
        basic: {
            age: '18 - 23 years',
            height: '4 Ft 6 In- 5 Ft 4 In/137 Cms- 163 Cms',
            maritalStatus: 'Never Married',
            motherTongue: 'Hindi',
            physicalStatus: 'Normal',
            eatingHabits: "Doesn't matter",
            drinkingHabits: "Doesn't matter",
            smokingHabits: "Doesn't matter",
        },
        religious: {
            religion: 'Hindu',
            caste: 'Yadav,Gawali,Goala,Yadava Naidu,Sadgope,Naidu,Caste no bar',
            subcaste: 'Any Subcaste',
            dosh: "Doesn't matter",
            star: 'Any',
        },
        professional: {
            education: 'Any',
            employedIn: 'Any',
            occupation: 'Any',
            annualIncome: 'Any',
        },
        location: {
            country: 'Any',
            ancestralOrigin: 'Hindi-All',
        },
        about: {
            description: 'Not Specified',
        },
    });

    const handleClickOpen = (section) => {
        setCurrentSection(section);
        console.log("section",preferences[currentSection]);
            setOpen(true);
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = (newValues) => {
        setPreferences((prev) => ({
            ...prev,
            [currentSection]: {
                ...prev[currentSection],
                ...newValues,
            },
        }));
        setOpen(false);
        console.log("Api calling data",preferences);
        // Call your API to save the new preferences here
    };

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <Box display="flex" >
            <Box width="20%" borderRight="1px solid #ddd" padding="16px" sx={{backgroundColor:'#49b882'}}>
                <Typography variant="h6" sx={{color:'white'}}>PARTNER PREFERENCES</Typography>
                <List>
                    {['Basic', 'Religious', 'Professional', 'Location', 'About'].map((section) => (
                        <ListItem button key={section} sx={{textAlign:'center',color:'white'}} onClick={() => scrollToSection(section.toLowerCase())}>
                            <ListItemText primary={section} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box width="80%" padding="16px">
                <Element name="basic">
                    <Typography variant="h5">Basic Preferences</Typography>
                    {Object?.entries(preferences?.basic)?.map(([key, value]) => (
                        <PreferenceBox
                            key={key}
                            field={key}
                            value={value}
                            onEdit={() => handleClickOpen('basic')}
                        />
                    ))}
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
                    {Object?.entries(preferences?.about)?.map(([key, value]) => (
                        <PreferenceBox
                            key={key}
                            field={key}
                            value={value}
                            onEdit={() => handleClickOpen('about')}
                        />
                    ))}
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
