import {TextField} from "@mui/material";
 const baseTextField=(props)=>{
    return <TextField id="outlined-basic" label={props.label} variant={props.variant} />
}
export default baseTextField