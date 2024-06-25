import React from 'react';
import { Box, Typography, Button, TableRow, TableHead, TableBody, TableContainer, Table, TableCell } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';



const CurrentPlanContainer = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '90%', 
    marginInline:'auto'
  },
}));


const TableContainerStyled = styled(TableContainer)({
  marginTop: '20px',
  border: '1px dashed #999',
});


const TableStyled = styled(Table)({
  minWidth: 650,
});

const TableCellStyled = styled(TableCell)(({ theme }) => ({
  border: '1px solid #999',
  padding: theme.spacing(2),
}));


const InvoiceButton = styled(Button)({
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#333',
  },
});

const PlanCard = styled(Box)({
  backgroundColor: '#FBF7F7',
  width: '580px',
  height: '437px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)',
});

const UpgradeButton = styled(Button)(({theme})=>({
  marginTop: '20px',
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '0px 15px 0px 15px',
  width:'300px',
  height:"47px",
  fontSize:'24px',
  fontWeight:"500",
  '&:hover': {
    backgroundColor: '#333',
  },
  [theme.breakpoints.down('sm')]: {
    width:'70%', 
    marginInline:'auto',
    fontSize:'15px',

  }
}));

const CurrentPlanPage = () => {

  
  return (
      <Box sx={{height: '80vh',overflowY:'scroll'}}>
    <CurrentPlanContainer>
      <PlanCard>
        <Typography variant="h4" gutterBottom sx={{fontSize:{sm:'15px',md:'30px'},fontWeight:'500',fontStyle:'san-serif'}}>
          Current Plan
        </Typography>
        <Box>
          <img src="/images/planPagge.svg" alt="Plan Image" style={{ width:{sm:'100px',md:'148px'}, height:{sm:'120px',md:'161px'}}} />
        </Box>
        <Typography variant="body1" gutterBottom sx={{display:'flex',gap:'5px',alignItems:'baseline'}}>
           
          <h2 className='text-[17px] md:text-[20px] lg:text-[24px] font-medium font-sans'>Plan Name:</h2>
          <p className='text-[10px] md:text-[12px] lg:text-[16px] font-sans font-normal'>Standard</p>
        </Typography>
        <Typography variant="body1" gutterBottom sx={{display:'flex',gap:'5px',alignItems:'baseline'}}>
           
           <h2 className='text-[17px] md:text-[20px] lg:text-[24px] font-medium font-sans'> Validity:</h2>
           <p className='text-[10px] md:text-[12px] lg:text-[16px] font-sans font-normal'>  6 Months</p>
         </Typography>
         <Typography variant="body1" gutterBottom sx={{display:'flex',gap:'5px',alignItems:'baseline'}}>
           
           <h2 className='text-[17px] md:text-[20px] lg:text-[24px] font-medium font-sans'>   Valid Till:</h2>
           <p className='text-[10px] md:text-[12px] lg:text-[16px] font-sans font-normal'>   24 June 2024</p>
         </Typography>
        <UpgradeButton variant="contained">
          UPGRADE NOW
        </UpgradeButton>
      </PlanCard>
    </CurrentPlanContainer>
    <TableContainerStyled>
        <TableStyled aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCellStyled align="center">Plan Type</TableCellStyled>
              <TableCellStyled align="center">Duration</TableCellStyled>
              <TableCellStyled align="center">Cost</TableCellStyled>
              <TableCellStyled align="center">Invoice</TableCellStyled>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCellStyled align="center">Platinum</TableCellStyled>
              <TableCellStyled align="center">12 Months (May 2023 - June 2024)</TableCellStyled>
              <TableCellStyled align="center">₹500</TableCellStyled>
              <TableCellStyled align="center">
                <InvoiceButton variant="contained">
                  Invoice
                </InvoiceButton>
              </TableCellStyled>
            </TableRow>
            <TableRow>
              <TableCellStyled align="center">Standard</TableCellStyled>
              <TableCellStyled align="center">12 Months (May 2023 - June 2024)</TableCellStyled>
              <TableCellStyled align="center">₹500</TableCellStyled>
              <TableCellStyled align="center">
                <InvoiceButton variant="contained">
                  Invoice
                </InvoiceButton>
              </TableCellStyled>
            </TableRow>
            <TableRow>
              <TableCellStyled align="center">Standard</TableCellStyled>
              <TableCellStyled align="center">12 Months (May 2023 - June 2024)</TableCellStyled>
              <TableCellStyled align="center">₹500</TableCellStyled>
              <TableCellStyled align="center">
                <InvoiceButton variant="contained">
                  Invoice
                </InvoiceButton>
              </TableCellStyled>
            </TableRow>
          </TableBody>
        </TableStyled>
      </TableContainerStyled>
     <div className='flex justify-center items-center '>
     <Link to={'cencle'} className='bg-[#F0C97D] flex justify-center items-center text-black px-5 py-2 mx-auto mt-2 rounded-bl-[15px] rounded-tr-[15px] '>
      Plan cancellation: CLICK HERE to cancel the current plan.
      </Link>
     </div>
    </Box>
  );
};

export default CurrentPlanPage;
