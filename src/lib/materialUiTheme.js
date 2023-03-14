import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    direction: 'rtl',
palette:{
        primary:{
            main:'#ef5661',
            light:'#FC7E75'
        },
    text:{
            primary:'#515151',
        secondary:'#535353',
        disabled:'#515151'
    }
}
});
export default theme