import React from 'react'

interface HeroSectionProps {
    breadcrumb?: string;
}
const HeroSection = ({ breadcrumb }: HeroSectionProps) => {
    return (
        <div className="page-heading header-text">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <span className="breadcrumb"><a href="#">Trang chủ</a> / {breadcrumb}</span>
                        <h3>{breadcrumb}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
