import bag from "../assets/bag.png"
import css from "../css/home.css"
import ielts from "../assets/1.webp"
import ara from "../assets/2.webp"
import fb from "../assets/3.webp"
import fre from "../assets/4.webp"
import comu from "../assets/5.webp"
import skill from "../assets/roc.png"
import adm from "../assets/adm.png"
import job from "../assets/job.png"

function home() {
    return (
        <><div className="container p-5 mt-5 radi" style={{ color: "white", background: "rgb(2,0,36)", background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)" }}>
            <div className="row">
                <div className="first text-center">
                    <h1><b>অনলাইন ব্যাচে ভর্তি চলছে!</b></h1>
                    <p className="p-3">শ্রেনি অনুযায়ী সপ্তাহে ৬-১০টি লাইভ ক্লাস, সাথে লেকচার শিট এবং নিয়মিত পরীক্ষার সুবিধা</p>
                </div>
                <div className="batches d-flex flex-wrap text-center justify-content-center ">
                    <div className="card col-lg-2 col-md-2 col-sm-6 mb-3 m-2 cardstyle">
                        <div className="card-body">
                            <h5 className="card-title"><img src={bag} style={{ width: "50px" }} /></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title"><img src={bag} style={{ width: "50px" }} /></h5>
                            <p className="card-text">৯ম শ্রেনি
                                <span className="hide">বিজ্ঞানের ৫টি বিষয় ও ইংরেজি</span>
                            </p>
                            <a href="" className="nav-link active a"> ভর্তি / ফ্রি ট্রায়াল </a>
                        </div>
                    </div>
                    <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title"><img src={bag} style={{ width: "50px" }} /></h5>
                            <p className="card-text">এইচএসসি'২৫ <br />
                            </p>
                            <a href="" className="nav-link active a"> ভর্তি হও </a>
                        </div>
                    </div>
                    <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3  m-2">
                        <div className="card-body">
                            <h5 className="card-title"><img src={bag} style={{ width: "50px" }} /></h5>
                            <p className="card-text">১০ম শ্রেনি</p>
                            <a href="" className="nav-link active a"> ভর্তি / ফ্রি ট্রায়াল </a>
                        </div>
                    </div>
                    <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3  m-2">
                        <div className="card-body">
                            <h5 className="card-title"><img src={bag} style={{ width: "50px" }} /></h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <a href="" className="text-center nav-link p-3 a" style={{ color: "green" }}>অনলাইন ব্যাচ সম্পর্কে আরও জানুন</a>
                </div>

            </div>
            <div className="first text-center mt-5">
                <h1><b>স্কিল ডেভেলপমেন্টের নির্দিষ্ট কোর্সে দারুণ ছাড়!</b></h1>
                <p className="p-3">পুরো মাস জুড়ে টেন মিনিট স্কুলের নির্দিষ্ট কোর্সসমূহ পেয়ে যান বিশেষ মূল্যে। এবার শেখার শুরু হোক টেন মিনিট স্কুলের সাথে!</p>
            </div>
            <div className="batches d-flex flex-wrap text-center justify-content-center ">
                <div className="card col-lg-2 col-md-2 col-sm-6 mb-3 m-2 cardstyle">
                    <div className="card-body">
                        <img src={ielts} className="img-fluid" />
                    </div>
                </div>
                <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3 m-2">
                    <div className="card-body">
                        <img src={ara} className="img-fluid" />
                    </div>
                </div>
                <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3 m-2">
                    <div className="card-body">
                        <img src={fb} className="img-fluid" />
                    </div>
                </div>
                <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3  m-2">
                    <div className="card-body">
                        <img src={fre} className="img-fluid" />
                    </div>
                </div>
                <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3  m-2">
                    <div className="card-body">
                        <img src={comu} className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
            <div className="container mt-5">
                <div className="first text-center">
                    <h1><b>নিজের শেখা নিজেই গুছিয়ে <br />নেয়ার যাত্রা শুরু হোক
                    </b></h1>
                    <p className="p-3">যেকোনো বিষয়ে যেকোনো কিছু শিখতে চলে যাও তোমার পছন্দের সেকশনে
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-3">
                            <div className="card m-2">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <div className="img col-md-4">
                                        <img src={bag} style={{ width: "100px" }} />
                                    </div>
                                    <div className="txt col-md-8">
                                        <h2><b>ক্লাস ৫-১২</b></h2>
                                        <p>

                                            ফ্রি ভিডিও, লাইভ ক্লাস
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className="card m-2">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <div className="img col-md-4">
                                        <img src={skill} style={{ width: "100px" }} />
                                    </div>
                                    <div className="txt col-md-8">
                                        <h2><b>স্কিলস</b></h2>
                                        <p>
                                            ইংলিশ, ফ্রিল্যান্সিং, স্কিলস ও আইটি
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className="card m-2">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <div className="img col-md-4">
                                        <img src={adm} style={{ width: "100px" }} />
                                    </div>
                                    <div className="txt col-md-8">
                                        <h2><b>ভর্তি পরীক্ষা</b></h2>
                                        <p>
                                            বিশ্ববিদ্যালয়+গুচ্ছ, মেডিক্যাল
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-3">
                            <div className="card m-2">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <div className="img col-md-4">
                                        <img src={job} style={{ width: "85px" }} />
                                    </div>
                                    <div className="txt col-md-8">
                                        <h2><b>চাকরি প্রস্তুতি</b></h2>
                                        <p>

                                            বিসিএস, ব্যাংক জবস, সরকারি চাকরি
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container mt-5">
                <div className="first text-center">
                    <p style={{ color: "orange" }}><img src={bag} alt="" style={{ width: "20px" }} className="m-2" /><b>ক্লাস ৬-১০</b></p>
                    <h1><b>বছর জুড়ে অনলাইন ব্যাচে কী কী
                        <br />থাকছে?
                    </b></h1>
                    <p className="p-3">সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক পড়াশুনার অগ্রযাত্রা

                    </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 p-3">
                            <div className="card m-2">
                                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                                    <div className="img col-md-12">
                                        <iframe width="358" height="198" src="https://www.youtube.com/embed/YxuUnSo4Fzg" title="একশো তে একশো প্রস্তুত পুরো পরিবার | অনলাইন ব্যাচ ৬ষ্ঠ-১০ম শ্রেণি | OVC | Model Test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    <div className="txt col-md-12">
                                        <h5><b>সব বিষয়ের প্রতি অধ্যায়েই হবে ইচ্ছেমত অনুশীলন
                                        </b></h5>
                                        <p>

                                            অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক প্রশ্ন অনুশীলনের সুযোগ।

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card m-2">
                                <div className="card-body d-flex justify-content-center align-items-center flex-column">
                                    <div className="img col-md-12">
                                        <iframe width="358" height="198" src="https://www.youtube.com/embed/xzJwVsbiNZw" title="অনলাইন ব্যাচ (৬ষ্ঠ-১০ম শ্রেণি) | OVC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    <div className="txt col-md-12">
                                        <h5><b>যতই হোক প্রশ্ন, ক্লাসেই সব সমাধান!
                                        </b></h5>
                                        <p>

                                            লাইভ ক্লাসে থাকবে ২ জন শিক্ষক! একজন পড়াবেন, আরেকজন চ্যাটে শিক্ষার্থীদের প্রশ্নের উত্তর দিবেন।


                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-3">
                            <div className="card m-2">
                                <div className="card-body d-flex justify-content-center align-items-center flex-column ">
                                    <div className="img col-md-12">
                                        <iframe width="358" height="198" src="https://www.youtube.com/embed/5WLFPNGb6OE" title="যতই হোক প্রশ্ন, ক্লাসেই সব সমাধান! | অনলাইন ব্যাচ ২০২৩ (৬ষ্ঠ-১০ম শ্রেণি) | OVC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                    </div>
                                    <div className="txt col-md-12 ">
                                        <h5><b>বাবা-মা এখন টেনশন ফ্রি!

                                        </b></h5>
                                        <p>

                                            অনলাইন ব্যাচের লাইব্রেরীতে থাকছে সব বিষয়ের অধ্যায়-ভিত্তিক প্রশ্ন অনুশীলনের সুযোগ।
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="morebtn ">
                    <a  className="nav-link btn btn-success p-3"> আপনার ক্লাস বেছে নিন </a>
                </div>
            </div>


        </>

    );
}

export default home;
