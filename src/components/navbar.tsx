import Link from "next/link";
import Grid from "@mui/material/Grid/Grid";
export default function Navbar(){
    return(
        <Grid container justifyContent={'flex-start'} spacing={2}>
            <Grid item><Link href="/">Home</Link></Grid>
            <Grid item><Link href="/about">About</Link></Grid>
            {/* <Link href="">Test</Link> */}
        </Grid>
    )
}