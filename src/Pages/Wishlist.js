// WishlistButton.js

import React, { useState } from 'react';


const WishlistButton = () => {
    const [isInWishlist, setIsInWishlist] = useState(false);

    const toggleWishlist = () => {
        setIsInWishlist(!isInWishlist);
    }

    return (
        <button className={`wishlist-button ${isInWishlist ? 'active' : ''}`} onClick={toggleWishlist}>
            {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </button>
    );
}

export default WishlistButton;
