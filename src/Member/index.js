import React, { useState, useEffect } from 'react';
import axios from 'axios';
import css from './index.css';
import Series from '../Series';

const Member = ({ member }) => {

    const [series, setSeries] = useState( {} );

     useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(member.series).then((response) => {
                setSeries(response.data);
            });
        }
        fetchData();
    }, []);

    return (
        <li>
            <p>
                {member.nickname_en}
            </p>
            <p>
                {member.nickname_jp}
            </p>
            <Series series={series} />
        </li>
    )

}

export default Member;