import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Member from '../Member';

const MemberList = () => {
    const [members, setMembers] = useState( []);

     useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://terracehouseapi.herokuapp.com/members/').then((response) => {
                setMembers(response.data);
            });
        }
        fetchData();
    }, []);

    const memberElements = members.map((member, i) => {
                return <Member member={member} key={i}/>;
    })
  
  return (
    <ul>
        {memberElements}
    </ul>
  );
}

export default MemberList;