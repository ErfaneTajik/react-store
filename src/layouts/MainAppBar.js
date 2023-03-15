import {Grid, InputAdornment, Link, TextField, Typography, useMediaQuery, useTheme} from "@mui/material";
import shop from "../assets/images/shops.png"
import SearchIcon from '@mui/icons-material/Search';
import "../assets/css/GlobaCsslAppBar.css"
import styles from "./MainAppBar.module.css"
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AppBarIconCard from "../components/ui/AppBarIconCard";

const MainAppBar = () => {
    const theme = useTheme()
    const matches = useMediaQuery('(min-width:600px)');

    const navItems = ['گوشی هوشمند', 'لپ تاپ ', ' عطر', 'محصولات پوستی ', 'سوپرمارکت ', ' لوازم خانگی ', 'لباس زنانه', ' کیف و کفش زنانه']
    return (
        <Grid marginTop={1}  container  direction="row">

            <Grid container item xs={12}  textAlign={matches ? 'right' : 'left'}>
                <Grid xs={12} md={4} item >

                    <Typography display={"inline"} color={theme.palette.primary.main}
                                className="businessTitle">React</Typography>
                    <Typography display={"inline"} color={'lightBlue'} className="businessTitle">Store</Typography>
                    {matches && <img alt={'logo'} width="7%" src={shop} />}
                </Grid>
                <Grid item xs={9} md={5} >
                    <TextField type="search" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }} sx={{
                        marginLeft: '1rem',
                        bgcolor: theme.palette.grey.A100,
                        borderRadius: 1.5,
                        padding: .2,
                        mb: .6,
                        width: '98%'
                    }}
                               size={"small"}
                               placeholder="نام کالا برند و یا دسته مورد نظر خود را جستجو کنید..." variant="outlined"/>
                </Grid>
                <Grid textAlign={"center"} item xs={3} md={3} >
                    {matches && <div>
                        <AppBarIconCard>
                            <PersonRoundedIcon className={styles.greyIcon}/>
                        </AppBarIconCard>
                        <AppBarIconCard>
                            <FavoriteBorderRoundedIcon className={styles.greyIcon}/>
                        </AppBarIconCard>
                        <AppBarIconCard>
                            <ShoppingCartRoundedIcon className={styles.greyIcon}/>
                        </AppBarIconCard>
                    </div>}
                    {!matches &&
                            <div >
                                <PersonRoundedIcon className={styles.greyIcon}/>
                                <ShoppingCartRoundedIcon className={styles.greyIcon}/>
                            </div>
                    }
                </Grid>
            </Grid>


            {matches &&  <Grid container sx={{mt: 2}}>
                <Grid item xs={0} md={2}></Grid>
                <Grid item textAlign="start" md={10} xs={12} sx={{pl: 5}}>
                    {navItems.map((item) => (

                        <Link underline="none" color={theme.palette.text.primary} key={item} sx={{ml: 7}}
                              children={<span className={styles.customLink}>{item}</span>}>

                        </Link>

                    ))}
                </Grid>
            </Grid>

                }
        </Grid>
    )
}
export default MainAppBar