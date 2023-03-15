import {Button, Paper, useTheme} from "@mui/material";
import styles from "./AppBarIconCard.module.css"

const AppBarIconCard=(props)=>{
    const theme = useTheme()
    return(
        <Paper className={styles.myPaper} elevation={0}  sx={{backgroundColor: theme.palette.grey["100"], display: "inline",mx:.6,pb:1.1,pt:.3}}>
            <Button disableRipple className={styles.myButton}  variant={"text"}>
            {props.children}
            </Button>
        </Paper>
    )
}
export default AppBarIconCard