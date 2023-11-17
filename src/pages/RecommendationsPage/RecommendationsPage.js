import './RecommendationsPage.scss';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function RecommendationsPage({ titleList }) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        console.log(titleList);
        const fetchServices = async () => {
            const titleCounts = {};
            for(let i = 0; i < titleList.length; i++) {
                const service = titleList[i].service_id;
                if (titleCounts[service] === undefined) {
                    titleCounts[service] = 0;
                }
                titleCounts[service] += 1;
            }
            const requests = Object.keys(titleCounts).map(service => {
                return axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/services/${service}`);
            })
            const responses = await Promise.all(requests);
            const data = responses.map(response => ({...response.data, count: titleCounts[response.data.id]}));
            setServices(data);
        };

        titleList.length && fetchServices();
    }, [titleList]);

    return <main className="recommendations">
        <div className="recommendations__heading">
            <h1>Streamers for you</h1>
            <p>Based on your selections we found these streamers have a lot of titles and genres you like</p>
        </div>
            <article>
            <div className="recommendations__platform">
                {!!services.length &&(
                services.map((service, index) =>
                <div key={service.id}>
                    <div className="recommendations__platform--top">
                        <p>#{index + 1}</p>
                        <img src={`${process.env.REACT_APP_BACKEND_URL}${service.logo}`} alt={service.name} className="recommendations__platform--img"/>
                    </div>
                    <div className="recommendations__platform--text">
                        <p><span className="recommendations__platform--name">{service.name}</span> has <span className="recommendations__platform--name">{service.count}</span> of the titles you selected.</p>
                        <p>Base pricing for ads plan is $5.99.</p>
                    </div>
                    <div className="recommendations__platform--bottom">
                    <button className="recommendations__platform--button">Sign up now</button>
                    </div>
                </div>
                    ))}
                </div>
            </article>
        <div className="recommendations__footer">
        <Link to="/"><button className="recommendations__footer--button">Refine your results</button></Link>
        </div>
    </main>
}