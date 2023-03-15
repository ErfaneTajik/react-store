import MainAppBar from "../layouts/MainAppBar";
import AppCarousel from "../layouts/AppCarousel";
import {useGetPostsQuery} from "../app/apiSlice";


const home = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data: posts} = useGetPostsQuery()
    return (
        <>

            <MainAppBar/>
            <AppCarousel/>
            {/*<Container maxWidth={"xl"}    sx={{height:'auto',paddingX:'auto', marginTop: '1rem',backgroundColor:'grey',marginX:'auto'}}>*/}

            {/*    <AdvertisementBanner/>*/}
            {/*    <NewestProducts/>*/}
            {/*</Container>*/}
        </>
    )
}

export default home