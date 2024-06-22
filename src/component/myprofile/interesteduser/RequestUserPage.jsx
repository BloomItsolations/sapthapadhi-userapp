import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Avatar, Typography, Button, Card, CardContent, CardActions, Grid } from '@mui/material';
import { styled } from '@mui/system';
import swal from 'sweetalert';
import LoadingBar from '../../LoadingBar';

const UserCard = styled(Card)(({ theme }) => ({
    backgroundColor: '#EDEDED',
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
}));

const UserDetails = styled(Box)(({ theme }) => ({
    display: 'none',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '80%',
    marginTop: '10px',
    fontSize: '16px',
    fontWeight: '500',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    },
}));

const UserCardContent = styled(CardContent)({
    flex: '1 0 auto',
});

const UserInfo = styled(Box)(({ theme }) => ({
    marginLeft: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
}));

const ScrollableBox = styled(Box)({
    width: '100%',
    maxWidth: { sm: '350px', md: '1100px' },
    margin: '0 auto',
    height: '74vh',
    overflowY: 'hidden',
    padding: { xs: 0, md: 2 },
    '&:hover': {
        overflowY: 'auto',
    },
    '&::-webkit-scrollbar': {
        width: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#888',
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: '#555',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
        borderRadius: '10px',
    },
});

const NameAndButtonBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: { xs: 'column', sm: 'row' },
}));

const UserActions = styled(CardActions)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const RequestUserPage = () => {
    const users = [
        {
            id: 1,
            name: 'Angelina',
            avatar: '/images/Rectangle 369 (1).jpg',
            city: 'New York',
            age: 29,
            working: 'Software Engineer',
            height: '5\'9"',
            requestTime: '10:30 AM, 18 August 2024',
        },
        {
            id: 2,
            name: 'John Doe',
            avatar: '/images/Rectangle 369 (2).jpg',
            city: 'Los Angeles',
            age: 35,
            working: 'Doctor',
            height: '6\'0"',
            requestTime: '11:00 AM, 20 August 2024',
        },
        {
            id: 3,
            name: 'Jane Smith',
            avatar: '/images/Rectangle 369 (3).jpg',
            city: 'Chicago',
            age: 27,
            working: 'Teacher',
            height: '5\'6"',
            requestTime: '02:00 PM, 22 August 2024',
        },
        // Add more users as needed
    ];
      const [loading,setLoading]=useState(false);
    let fromUserId=JSON.parse(localStorage.getItem('usedata'))?.userId;
    const acceptUser = async (toUserId) => {
        try {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_BaseURL}/app/receive-requests/${toUserId}`, {
                fromUserId,
                toUserId
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
              
            console.log("Response from accept user", response);

            if (response.statusText=="OK") {
                // swal('Accepted', response.data, 'success');
                swal('Accepted',"Requested Accepted",'success');
            }
        } catch (error) {
            console.log('Error',error);
            if (error.response) {
                swal('Error', error.response.data.message, 'error');
            } else {
                swal('Error', 'Something went wrong. Please try again.', 'error');
            }
        }
        finally{
            setLoading(false)
        }
    };

    return (
       <>
        {loading && <LoadingBar/>}
        <ScrollableBox>
            <Grid container spacing={2}>
                {users.map((user) => (
                    <Grid item xs={12} key={user.id}>
                        <UserCard sx={{ padding: '8px' }}>
                            <Avatar alt={user.name} variant="square" src={user.avatar} sx={{ width: { xs: '40px', sm: '40px', md: '240px' }, height: { xs: '40px', sm: '40px', md: '157px' }, borderRadius: '0px' }} />
                            <UserInfo>
                                <NameAndButtonBox>
                                    <Typography variant="h6" sx={{ fontSize: { xs: '17px', sm: '18px', md: '24px' }, fontWeight: '500' }}>{user.name}</Typography>
                                    <UserActions>
                                        <Button
                                            sx={{ marginRight: { xs: '0px', sm: '0px', md: '8px' }, fontSize: { xs: '8px', sm: '8px', md: '18px' }, marginBottom: { xs: '0px', sm: '0px' }, width: { sm: '30px', md: '82px' }, height: { sm: '15px', md: '29px' }, borderRadius: '15px', backgroundColor: '#51A22B', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                            onClick={() => acceptUser(user.id)} // Replace 1 with the actual fromUserId
                                        >
                                            Accept
                                        </Button>
                                        <Button sx={{ width: { sm: '30px', md: '82px' }, height: { sm: '15px', md: '29px' }, fontSize: { xs: '8px', sm: '8px', md: '18px' }, borderRadius: '15px', border: '1px solid red', color: 'red', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            Deny
                                        </Button>
                                    </UserActions>
                                </NameAndButtonBox>
                                <UserDetails>
                                    <Typography variant="body2">City: {user.city}</Typography>
                                    <Typography variant="body2">Age: {user.age}</Typography>
                                    <Typography variant="body2">Working: {user.working}</Typography>
                                    <Typography variant="body2">Height: {user.height}</Typography>
                                </UserDetails>
                                <Typography variant="body2" color="textSecondary" sx={{ fontSize: { sm: '2px', md: '16px' }, fontWeight: '500', marginTop: { sm: '2px', md: '8px' } }}>Request on: {user.requestTime}</Typography>
                                <Button component={Link} to={`/${user.id}/profile`} sx={{ width: '182px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', color: 'black', fontWeight: '500', borderRadius: "15px", border: '1px solid black' }}>
                                    View Full Profile
                                </Button>
                            </UserInfo>
                        </UserCard>
                    </Grid>
                ))}
            </Grid>
        </ScrollableBox>
       </>
    );
};

export default RequestUserPage;