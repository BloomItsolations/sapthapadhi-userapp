import React from 'react';
import { Box, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

const CancellationContainer = styled(Box)(({theme})=>({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '20px',
  marginTop: '8px',
  [theme.breakpoints.down('sm')]:{
     flexDirection:'column'
  }
}));

const LeftSection = styled(Box)(({theme})=>({
  width: 'calc(50% - 10px)',
  borderRight: '1px dashed #ccc',
  paddingRight: '10px',
  [theme.breakpoints.down('sm')]:{
   width:'100%'
  }
}));

const RightSection = styled(Box)(({theme})=>({
  width: 'calc(50% - 10px)',
  paddingLeft: '10px',
  [theme.breakpoints.down('sm')]:{
    width:'100%'
  }

}));

const CancellationPolicy = styled(Box)({
  marginBottom: '20px',
  '& ul': {
    paddingLeft: '20px', // Adjust indentation as needed
    listStyleType: 'disc', // Display bullets
  },
});

const ReasonSection = styled(Box)({
  marginBottom: '20px',
});

const TableWrapper = styled(Box)({
  marginTop: '20px',
  border: '1px dashed #ccc',
  padding: '10px',
});

const CancelButton = styled(Button)({
  marginTop: '10px',
  backgroundColor: '#f44336',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#d32f2f',
  },
});

const StyledTableCell = styled(TableCell)({
  border: '1px solid black',
  padding: '10px',
});

const PlanCancellationPage = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: '1100px', margin: '0 auto', padding: '20px' }}>
      <CancellationContainer>
        <LeftSection>
          <Typography variant="h6" gutterBottom sx={{fontSize:{sm:'20px',md:'32px'},fontWeight:'500',fontFamily:'serif'}}>Cancellation Policy</Typography>
          <CancellationPolicy>
            <Typography variant="body1" gutterBottom component="div">
              <ul>
                <li className="text-[11px] md:text-[14px] lg:text-[16px]">Your refund amount 2calculated day basis</li>
                <li className="text-[11px] md:text-[14px] lg:text-[16px] mt-1 md:mt-2 lg:mt-3">After 3 months only you can able to join</li>
                <li className="text-[11px] md:text-[14px] lg:text-[16px] mt-1 md:mt-2 lg:mt-3">Fair ipsum dummy content ipsum jenuane ai</li>
                <li className="text-[11px] md:text-[14px] lg:text-[16px] mt-1 md:mt-2 lg:mt-3">Rairt ipsum dummy content ipsum jenuane ai</li>
              </ul>
            </Typography>
          </CancellationPolicy>
        </LeftSection>
        <RightSection>
          <Typography variant="h6" gutterBottom>Reason for the cancellation :</Typography>
          <ReasonSection>
            <Select fullWidth>
              <MenuItem value="reason1">I joint my pair</MenuItem>
              <MenuItem value="reason2">Profile match not good</MenuItem>
              <MenuItem value="reason3">Support not good</MenuItem>
              <MenuItem value="reason3">My reason not in the list</MenuItem>
            </Select>
            <TextField
              multiline
              fullWidth
              rows={4}
              variant="outlined"
              placeholder="Enter your message..."
              margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth>Submit</Button>
          </ReasonSection>
        </RightSection>
      </CancellationContainer>

      <TableWrapper>
        <Typography variant="h6" gutterBottom>Plan Details</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Plan Type</StyledTableCell>
                <StyledTableCell>Duration</StyledTableCell>
                <StyledTableCell>Cost Paid</StyledTableCell>
                <StyledTableCell>Per Day Cost</StyledTableCell>
                <StyledTableCell>Plan Active Days</StyledTableCell>
                <StyledTableCell>Remaining Days</StyledTableCell>
                <StyledTableCell>Cancellation Charges</StyledTableCell>
                <StyledTableCell>Cost Saved</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <StyledTableCell>Platinum</StyledTableCell>
                <StyledTableCell>365 days (12 months)</StyledTableCell>
                <StyledTableCell>$1000</StyledTableCell>
                <StyledTableCell>$2.73</StyledTableCell>
                <StyledTableCell>190 days</StyledTableCell>
                <StyledTableCell>175 days</StyledTableCell>
                <StyledTableCell>$100</StyledTableCell>
                <StyledTableCell>$377.75</StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>
    </Box>
  );
};

export default PlanCancellationPage;
