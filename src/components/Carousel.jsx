import React from 'react';

export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide m-3 m-md-5 rounded-4" data-bs-ride="carousel">
            
            <div className="carousel-inner">
                {[
                    "https://www.alezay.com/wp-content/uploads/2023/03/SAMSUNG-GALAXY-S23-SERIES-MAIN-BANNER-ALEZAY-KUWAIT.jpg",
                    "https://cmsimages.shoppersstop.com/SS_25_main_kv_web_fd8e548010/SS_25_main_kv_web_fd8e548010.png",
                    "https://cmsimages.shoppersstop.com/Footwear_web_789063289b/Footwear_web_789063289b.png",
                    "https://cmsimages.shoppersstop.com/Men_Spring_Fling_web_a6603bb9d8/Men_Spring_Fling_web_a6603bb9d8.png",
                    "https://cmsimages.shoppersstop.com/Kds_web_f2cf1234eb/Kds_web_f2cf1234eb.png",
                    "https://cmsimages.shoppersstop.com/static_web_Puma_519b83f19c/static_web_Puma_519b83f19c.png",
                    "https://cmsimages.shoppersstop.com/Latin_quarter_web_575d4d7034/Latin_quarter_web_575d4d7034.png",
                    "https://cmsimages.shoppersstop.com/handbags_Spring_Fling_web_d50d9850d4/handbags_Spring_Fling_web_d50d9850d4.png",
                    "https://assets.tatacliq.com/medias/sys_master/images/33697228554270.jpg",
                    "https://assets.tatacliq.com/medias/sys_master/images/33697228619806.jpg"
                ].map((src, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                        <img 
                            src={src} 
                            className="d-block w-100 img-fluid" 
                            alt={`Slide ${index + 1}`} 
                            style={{ height: "auto", maxHeight: "350px", objectFit: "cover" }}
                        />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}