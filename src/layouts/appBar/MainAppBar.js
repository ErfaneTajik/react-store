import { Grid, InputAdornment, Link, TextField, Typography, useTheme} from "@mui/material";
import shop from "../../assets/images/shops.png"
import SearchIcon from '@mui/icons-material/Search';
import "../../assets/css/GlobalAppBarStyle.css"
import styles from "./MainAppBar.module.css"
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AppBarIconCard from "../../components/ui/AppBarIconCard";

const MainAppBar = () => {
    const theme = useTheme()
    console.log(theme)
    const navItems = ['گوشی هوشمند', 'لپ تاپ ', ' عطر', 'محصولات پوستی ', 'سوپرمارکت ', ' لوازم خانگی ', 'لباس زنانه', ' کیف و کفش زنانه']
    return (
        <Grid mt={-.9}  container columns={12} spacing={3} direction="row">
            <Grid item xs={2} textAlign={"end"}>
            </Grid>
            <Grid item xs={7} textAlign={'left'}>
                {/*<Typography className="businessTitle" sx={{*/}
                {/*    display: 'inline-block',*/}
                {/*    verticalAlign: 'middle',*/}
                {/*    paddingBottom: '1.5rem',*/}
                {/*    marginLeft: '4rem',*/}
                {/*    marginRight: '.5rem',*/}
                {/*}}>*/}

                <Typography display={"inline"} color={theme.palette.primary.main}
                            className="businessTitle">React</Typography><Typography
                display={"inline"} color={'lightBlue'} className="businessTitle">Store</Typography>
                <img alt={'logo'} height="45" width="45" src={shop}/>
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
                    width: 650
                }}
                           size={"small"}
                           placeholder="نام کالا برند و یا دسته مورد نظر خود را جستجو کنید..." variant="outlined"/>
            </Grid>

            <Grid textAlign={"end"} item xs={2}>
                <AppBarIconCard>
                    <PersonRoundedIcon className={styles.greyIcon}/>
                </AppBarIconCard>
                <AppBarIconCard>
                    <FavoriteBorderRoundedIcon className={styles.greyIcon}/>
                </AppBarIconCard>
                <AppBarIconCard>
                    <ShoppingCartRoundedIcon className={styles.greyIcon}/>
                </AppBarIconCard>
            </Grid>
            <Grid container sx={{mt: 2}}>
                <Grid item xs={2}></Grid>
                <Grid item textAlign="start" xs={10} sx={{pl: 5}}>
                    {navItems.map((item) => (

                        <Link underline="none" color={theme.palette.text.primary} key={item} sx={{ml: 7}}
                              children={<span className={styles.customLink}>{item}</span>}>

                        </Link>

                    ))}
                </Grid>
            </Grid>

        </Grid>

    )
}
export default MainAppBar