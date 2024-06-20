import { Container, Grid, Link, Typography ,useTheme,useMediaQuery} from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
function Footer() {
  const theme=useTheme();
    const match=useMediaQuery(theme.breakpoints.down('md'));
  return (
    
    <>
  <div style={{marginTop:'8%',position:'sticky',paddingBottom:'5%',backgroundColor:'rgb(241,242,248)' , color:'black',paddingTop:'10%'}}>
        <Grid container sx={{backgroundColor:'transpaernt',marginLeft:match?'5%':'17%' }} spacing={6}>
          <Grid item xs={12} sm={6} md={4} lg={2} >
            <Container sx={{color:'black'}}>
             
         
          <Typography  fontWeight={600} ><b> Contact Us</b></Typography> 
          <br></br> 
          <Link underline='none'> <Typography sx={{color:'black'}} >phone number</Typography>
          </Link>
         
        
          
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} >
            <Container>
            <Container sx={{display:'flex',flexDirection:'column',alignItems:'center'}}></Container>
            <Typography  fontWeight={600} ><b>Cars</b>  </Typography> 
            <br></br>
          <Link href="/carslisting" underline='none'sx={{color:'black'}} > View Cars
          </Link>
          
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} >
            <Container>
            <Typography  fontWeight={600} > <b> Address</b> </Typography>
            <br></br>  
          <Link underline='none'> <Typography sx={{color:'black'}} >Shop address</Typography>
          </Link>
          
            </Container>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2} >
            <Container>
            <Typography  fontWeight={600} ><b> Connect</b> </Typography>  
            <br></br> 
          
      <Link underline='none'> <Typography sx={{color:'black'}} ><LinkedInIcon></LinkedInIcon>Linkedin</Typography> 
          </Link>
          <Link underline='none'> <Typography sx={{color:'black'}} >  <TwitterIcon></TwitterIcon>twitter</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'black'}} > <FacebookIcon></FacebookIcon>Facebook</Typography>
          </Link>
        <Link underline='none'> <Typography sx={{color:'black'}} ><InstagramIcon></InstagramIcon>Instagram</Typography>
          </Link>
            </Container>
          </Grid>
        </Grid>
        </div>
    </>
  )
}

export default Footer