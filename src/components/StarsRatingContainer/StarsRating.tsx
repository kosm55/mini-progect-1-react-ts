import React, {FC} from 'react';
import StarRating from 'react-star-ratings';

interface IProps {
    vote_average: number
}
const Stars: FC<IProps> = ({ vote_average }) => {
    return (
        <div>
            <StarRating
                rating={vote_average}
                starRatedColor="orange"
                numberOfStars={10}
                starDimension='15px'
                starSpacing='0'
            />
        </div>
    );
};

export {Stars}