import Card from "../component/card";
import Toptext from "../component/toptext";
import React from 'react'
import hs from "../assets/hsc_25_ob.webp"
import c1 from "../assets/hsc_24_1p_cc_thumb.webp"
import c2 from "../assets/hsc_24_CC_2nd_paper_thumbnail_july_24_16x9_1692008893328.webp"
import Footer from "../component/footer";
import Head from "../component/he"
const hsc = () => {
    return (
       
       <>
    <Head />
       <div className="container">
            <div className="row">
                <Toptext title="SSC ও HSC শিক্ষার্থীদের জন্য" sht="পুরো মাস জুড়ে টেন মিনিট স্কুলের নির্দিষ্ট কোর্সসমূহ পেয়ে যান বিশেষ মূল্যে। এবার শেখার শুরু হোক টেন মিনিট স্কুলের সাথে!
"/>
                <div className="container">
                    <div className="row justify-content-center">

                        <Card title="HSC 25 অনলাইন ব্যাচ সকল বিষয় " img={hs} price="৳ 4500" className="col-md-3" />
                        <Card title="HSC 2024 ক্র্যাশ কোর্স - প্রথম পত্র" img={c1} price="৳ 2500" className="col-md-3" />
                        <Card title="HSC 24 ক্র্যাশ কোর্স - দ্বিতীয় পত্র" img={c2} price="৳ 2500" className="col-md-3" />
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">

                        <Card title="HSC 25 অনলাইন ব্যাচ সকল বিষয় " img={hs} price="৳ 4500" className="col-md-3" />
                        <Card title="HSC 2024 ক্র্যাশ কোর্স - প্রথম পত্র" img={c1} price="৳ 2500" className="col-md-3" />
                        <Card title="HSC 24 ক্র্যাশ কোর্স - দ্বিতীয় পত্র" img={c2} price="৳ 2500" className="col-md-3" />
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">

                        <Card title="HSC 25 অনলাইন ব্যাচ সকল বিষয় " img={hs} price="৳ 4500" className="col-md-3" />
                        <Card title="HSC 2024 ক্র্যাশ কোর্স - প্রথম পত্র" img={c1} price="৳ 2500" className="col-md-3" />
                        <Card title="HSC 24 ক্র্যাশ কোর্স - দ্বিতীয় পত্র" img={c2} price="৳ 2500" className="col-md-3" />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>

    )
}

export default hsc