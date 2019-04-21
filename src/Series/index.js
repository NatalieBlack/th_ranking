import React from 'react';

const Series = ({ series }) => {
    return (
        <p>
            ({series.number}) {series.name}
        </p>
    )
}

export default Series;