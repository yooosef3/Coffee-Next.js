import DesReview from '@/components/products/product/descReview/DesReview';
import HeaderTemplate from '@/components/shared/HeaderTemplate';
import ProductBg from '../../public/images/top-view-from-afar-christmas-tree-branches-cup-black-tea-cinnamon-sticks-wooden-board-christmas-spruce-branches-tree-toys-white-notebook-lemon.jpg'
import React from 'react';
import SliderInfo from '@/components/products/product/productInfo/SliderInfo';
import Trending from '@/components/home/trending/Trending';

const ProductDetails = () => {
    return (
        <div className='pb-10'>
            <HeaderTemplate 
                background='/images/top-view-from-afar-christmas-tree-branches-cup-black-tea-cinnamon-sticks-wooden-board-christmas-spruce-branches-tree-toys-white-notebook-lemon.jpg' 
                header='اطلاعات محصول'
                />
            <div>
                <SliderInfo />
                <DesReview />
                <Trending related={true}/>
            </div>
        </div>
    );
};

export default ProductDetails;