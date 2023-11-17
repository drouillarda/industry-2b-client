import './RecommendationsPage.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function RecommendationsPage({ titleList }) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services`);
            setServices(data);
        };

        fetchServices();
    }, []);

    return <main className="recommendations">
        <div className="recommendations__heading">
            <h1>Streamers for you</h1>
            <p>Based on your selections we found these streamers have a lot of titles and genres you like</p>
        </div>
            <article>
            <div className="recommendations__platform">
                {services.length && (
                services.map((service, index) =>
                <div key={service.id}>
                    <div className="recommendations__platform--top">
                        <p>#{index + 1}</p>
                        <img src={`${process.env.REACT_APP_BACKEND_URL}${service.logo}`} alt={service.name} className="recommendations__platform--img"/>
                    </div>
                    <div className="recommendations__platform--text">
                        <p>{service.name} has X of the titles you selected.</p>
                        <p>Base pricing for ads plan is {service.price}.</p>
                    </div>
                    <div className="recommendations__platform--bottom">
                    <Link to=""><button className="recommendations__platform--button">Sign up for {service.name}</button></Link>
                    </div>
                </div>
                    ))}
                </div>
            </article>
    </main>
}