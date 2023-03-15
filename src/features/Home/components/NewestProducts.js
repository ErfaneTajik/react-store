import {Card, Divider, Grid, Typography} from "@mui/material";

export const NewestProducts = () => {
    return (
        <Card>
            <Grid container>
                <Grid xs={11} item>
                    <Typography>جدیدترین محصولات</Typography>
                </Grid>
                <Grid xs={1} item textAlign={"right"}>
                    <Typography>مشاهده همه</Typography>
                </Grid>

            </Grid>
            <Divider/>

        </Card>
    )
}