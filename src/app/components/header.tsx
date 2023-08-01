import { Grid, TextField } from "@mui/material"


export default function Header(){
    return(
    <div>
        <Grid container spacing={{ xs: 2, md: 3 }} direction={'row'} justifyContent={'space-between'}>
            <Grid item>
                <div>Logo</div>
            </Grid>
            <Grid item xs={5} md={7}>
                <input className="rounded-full outline outline-1 outline-gray-500" placeholder="Search for items"/>
            </Grid>
            <Grid item>
                <div>Sign In</div>
            </Grid>
        </Grid>
    </div>)
}