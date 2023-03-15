import {ImageList, ImageListItem} from "@mui/material";
import newadds1 from "../../../assets/images/new.ads1.jpg";
import newadds2 from "../../../assets/images/new-ads2.jpg";
import styles from "./AdvertisementBanner.module.css"

export const AdvertisementBanner=()=>{
    return(
        <ImageList  sx={{width:1260, height: 248}} cols={2} gap={20} >
            <ImageListItem>
                <img
                    className={`${styles.roundedImage} ${styles.addImage}`}
                    src={newadds1}
                    alt={'تخفیف خرید لباس'}
                    loading="lazy"
                />
            </ImageListItem>
            <ImageListItem >
                <img
                    src={newadds2}
                    className={`${styles.roundedImage} ${styles.addImage}`}
                    alt={'تخفیف خرید لباس'}
                    loading="lazy"
                />
            </ImageListItem>
        </ImageList>
    )
}