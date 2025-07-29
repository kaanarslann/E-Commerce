import { useState } from "react";
import {Link} from "react-router-dom";
import { ChevronRight, ChevronLeft, Heart, ShoppingCart, Eye } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import productMain1 from "../assets/productmain1.jpg";
import productMain2 from "../assets/productmain2.jpg";

export default function Product({product}) {
    
    const [mainImage, setMainImage] = useState(productMain1);

    const handleImage = () => {
        if(mainImage == productMain1) {
            setMainImage(productMain2);
        } else if(mainImage == productMain2) {
            setMainImage(productMain1);
        }
    }
    
    return (
        <section className="product-main flex flex-col items-center bg-[#FAFAFA] pb-15 md:items-start md:px-[9rem]">
            <div className="links flex gap-[0.938rem] py-2.5 md:py-6 text-sm font-bold leading-6">
                <Link to="/" className="text-[#252B42]">Home</Link>
                <ChevronRight color="#BDBDBD"/>
                <Link to="/shop" className="text-[#737373]">Shop</Link>
            </div>
            <div className="product flex flex-col items-center gap-7 md:flex-row md:items-start">
                <div className="product-images flex flex-col gap-8 w-[21.75rem] h-[24.625rem] md:w-full md:h-full">
                    <div className="image-main w-[21.75rem] h-[17.313rem] md:w-[31.625rem] md:h-[28.125rem] bg-center bg-cover relative" style={{backgroundImage: `url(${product?.images[0].url})`}}>
                        <button onClick={handleImage} className="absolute left-6 top-[7.375rem] md:top-[16.125rem] hover:cursor-pointer"><ChevronLeft color="#FFFFFF" size={44}/></button>
                        <button onClick={handleImage} className="absolute right-6 top-[7.375rem] md:top-[16.125rem] hover:cursor-pointer"><ChevronRight color="#FFFFFF" size={44}/></button>
                    </div>
                    <div className="image-other w-[13.688rem] h-[4.688rem] flex justify-between">
                        <img src={productMain1} className="w-[6.25rem] object-center object-cover"/>
                        <img src={productMain2} className="w-[6.25rem] object-center object-cover"/>
                    </div>
                </div>
                <div className="product-texts flex flex-col gap-5 mx-26 pl-5 md:pl-0 w-[21.75rem] h-[29.438rem] md:w-full md:h-full">
                    <h4 className="text-[#252B42] text-xl leading-[1.875rem] md:mt-2.5">{product?.name}</h4>
                    <div className="ratings flex gap-2.5">
                        <div className="star-rating text-[#F3CD03] flex gap-1.5">
                            <FontAwesomeIcon icon={faStarSolid} />
                            <FontAwesomeIcon icon={faStarSolid} />
                            <FontAwesomeIcon icon={faStarSolid} />
                            <FontAwesomeIcon icon={faStarSolid} />
                            <FontAwesomeIcon icon={faStarRegular} />
                        </div>
                        <h6 className="text-[#737373] text-sm font-bold leading-6">{product?.rating}</h6>
                    </div>
                    <h3 className="text-2xl font-bold leading-8 text-[#252B42]">${product?.price}</h3>
                    <div className="product-availability flex gap-1.5 text-sm font-bold leading-6">
                        <h6 className="text-[#737373]">Availability : </h6>
                        <h6 className="text-[#23A6F0]">In Stock ({product?.stock})</h6>
                    </div>
                    <p className="text-[#858585] text-sm leading-5 my-2.5">{product?.description}</p>
                    <div className="line text-[#BDBDBD] border border-t-[#BDBDBD]"></div>
                    <div className="colors flex gap-2.5 my-2.5">
                        <span className="bg-[#23A6F0] rounded-full w-[1.875rem] h-[1.875rem]"></span>
                        <span className="bg-[#23856D] rounded-full w-[1.875rem] h-[1.875rem]"></span>
                        <span className="bg-[#E77C40] rounded-full w-[1.875rem] h-[1.875rem]"></span>
                        <span className="bg-[#252B42] rounded-full w-[1.875rem] h-[1.875rem]"></span>
                    </div>
                    <div className="product-buttons flex gap-2.5">
                        <button className="bg-[#23A6F0] text-white py-2.5 px-5 rounded-[0.313rem] hover:cursor-pointer">Select Options</button>
                        <div className="button-circle border border-[#E8E8E8] rounded-full w-10 h-10 flex justify-center items-center hover:cursor-pointer"><Heart /></div>
                        <div className="button-circle border border-[#E8E8E8] rounded-full w-10 h-10 flex justify-center items-center hover:cursor-pointer"><ShoppingCart /></div>
                        <div className="button-circle border border-[#E8E8E8] rounded-full w-10 h-10 flex justify-center items-center hover:cursor-pointer"><Eye /></div>
                    </div>
                </div>
            </div>
        </section>
    );
    
}