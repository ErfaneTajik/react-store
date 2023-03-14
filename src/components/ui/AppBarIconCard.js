import {IconButton, Paper, useTheme} from "@mui/material";

const AppBarIconCard=(props)=>{
    const theme = useTheme()
    return(
        <Paper elevation={0}  sx={{backgroundColor: theme.palette.grey["100"], display: "inline",mx:1,pb:2,pt:1.6,px:.6}}>
            <IconButton>
            {props.children}
            </IconButton>
        </Paper>
    )
}
export default AppBarIconCard