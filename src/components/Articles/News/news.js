import React, { Component } from 'react';
import NewsSlider from '../../widgets/NewsSlider/slider';
import NewsList from '../..//widgets/NewsList/newsList';

class News extends Component {
    render() {
        return (
            <div>
                <NewsSlider
                type="featured"
                start={2}
                amount={3}
                settings={{
                    dots:false
                }}
            />
            <NewsList
                type="cardWithImages"
                loadmore={true}
                start={0}
                amount={6}
            />
            </div>
        );
    }
}

export default News;