import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }){
    const INT_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     
    const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1620385019253-b051a26048ce?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return(
        <div className="InfoBox">
            <h3>Weather Information - {info.weather}</h3>
            <div className='card-container'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 70 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city} {info.humidity > 70 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/> }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <div>Temperature - {info.temp}&deg;C</div>
                    <p>Max Temperature - {info.tempMax}&deg;C</p>
                    <p>Min Temperature - {info.tempMin}&deg;C</p>
                    <p>Humidity - {info.humidity}</p>
                    <p>Weather Feels Like - {info.temp}&deg;C</p>
                    <p>Weather can be described as <b>{info.weather}</b></p>
                    </Typography>
                </CardContent>
             </Card>
             </div>
        </div>
    );
}