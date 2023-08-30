import bag from "../assets/bag.png"
import "../css/home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Footer from "./footer"
import play from "../assets/google-play-icon.webp"
import ios from "../assets/ios-store-icon.webp"
import Card from "./card"
import Top from "./toptext"
import Button from "./Button"
import ielts from "../assets/1.webp"
import ara from "../assets/2.webp"
import fb from "../assets/3.webp"
import fre from "../assets/4.webp"
import comu from "../assets/5.webp"
import skill from "../assets/roc.png"
import adm from "../assets/adm.png"
import job from "../assets/job.png"
import hsc from "../assets/hsc_25_ob.webp"
import c1 from "../assets/hsc_24_1p_cc_thumb.webp"
import c2 from "../assets/hsc_24_CC_2nd_paper_thumbnail_july_24_16x9_1692008893328.webp"
import eng from "../assets/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.webp"
import arbi from "../assets/sohoje_spoken_arbi_16x9.webp"
import mock from "../assets/ielts-listening-and-reading-mock-test-thumbnail.webp"
import medical from "../assets/medical_unit_admission_2023_thumb.webp"
import a_unit from "../assets/a_unit_admission_23_thumb.webp"
import b_unit from "../assets/b_unit_admission_23_thumb.webp"
import c_unit from "../assets/c-unit-university-and-cluster-admission-course-thumbnail.webp"
import sheet from "../assets/image_pdf_1685354763931.webp"
import girl from "../assets/1667905292144.webp"
import app from "../assets/download_app_1668328988106.webp"
import { Link } from "react-router-dom"

function home() {
    return (
        <><div className="container p-5 mt-5 radi" style={{ color: "white", background: "rgb(2,0,36)", background: "radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 100%)" }}>
            <div className="row">
                <div className="first text-center">
                    <h1><b>অনলাইন ব্যাচে ভর্তি চলছে!</b></h1>
                    <p className="p-3">শ্রেনি অনুযায়ী সপ্তাহে ৬-১০টি লাইভ ক্লাস, সাথে লেকচার শিট এবং নিয়মিত পরীক্ষার সুবিধা</p>
                </div>
                <div className="batches d-flex flex-wrap text-center justify-content-center ">
                    <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title"><img src={bag} style={{ width: "50px" }} /></h5>
                            <p className="card-text">এইচএসসি'২৫ <br />
                            </p>
                            <Link to="hsc" className="nav-link active Link"> ভর্তি হও </Link>
                        </div>
                    </div>
                    <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title"><img src={bag} style={{ width: "50px" }} /></h5>
                            <p className="card-text">৯ম শ্রেনি
                                <span className="hide">বিজ্ঞানের ৫টি বিষয় ও ইংরেজি</span>
                            </p>
                            <Link to="nine" className="nav-link active Link"> ভর্তি / ফ্রি ট্রায়াল </Link>
                        </div>
                    </div>

                    <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3  m-2">
                        <div className="card-body">
                            <h5 className="card-title"><img src={bag} style={{ width: "50px" }} /></h5>
                            <p className="card-text">১০ম শ্রেনি</p>
                            <Link to="ten" className="nav-link active Link"> ভর্তি / ফ্রি ট্রায়াল </Link>
                        </div>
                    </div>
                    <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3 m-2">
                        <div className="card-body">
                            <h5 className="card-title"><img src={bag} style={{ width: "50px" }} /></h5>
                            <p className="card-text">৮ম শ্রেনি

                                <span className="hide">বিজ্ঞান, গণিত, BGS, ICT, বাংলা ও ইংরেজি</span>
                            </p>
                            <Link href="" className="nav-link active Link"> ভর্তি / ফ্রি ট্রায়ালম শ্রেনি </Link>
                        </div>
                    </div>

                    <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3  m-2">
                        <div className="card-body">
                            <h5 className="card-title"><img src={bag} style={{ width: "50px" }} /></h5>
                            <p className="card-text">৭ম  শ্রেনি</p>
                            <Link href="" className="nav-link active Link"> ভর্তি / ফ্রি ট্রায়াল </Link>
                        </div>
                    </div>
                    <Link href="" className="text-center nav-link p-3 Link" style={{ color: "green" }}>অনলাইন ব্যাচ সম্পর্কে আরও জানুন</Link>
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
                <div className="card  col-lg-2 col-md-2 col-sm-6 mb-3 m-2 ">
                    <div className="card-body ">
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
            {/* ক্লাস ৫-১২ */}
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
                            <div className="card m-2 card-border">
                                <div className="card-body d-flex justify-content-center align-items-center " >
                                    <div className="img col-md-4">
                                        <img src={bag} style={{ width: "70px" }} />
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
                            <div className="card m-2 card-border">
                                <div className="card-body d-flex justify-content-center align-items-center ">
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
                            <div className="card m-2 card-border">
                                <div className="card-body d-flex justify-content-center align-items-center ">
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
                            <div className="card m-2 card-border">
                                <div className="card-body d-flex justify-content-center align-items-center ">
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
                                <div className="card-body d-flex justify-content-center align-items-stretch flex-column vh-50  align-self-stretch">
                                    <div className="ratio ratio-4x3">
                                        <iframe width="290" height="198" src="https://www.youtube.com/embed/YxuUnSo4Fzg" title="একশো তে একশো প্রস্তুত পুরো পরিবার | অনলাইন ব্যাচ ৬ষ্ঠ-১০ম শ্রেণি | OVC | Model Test" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                                <div className="card-body d-flex justify-content-center align-items-stretch flex-column mb-4">
                                    <div className="ratio ratio-4x3">
                                        <iframe width="290" height="198" src="https://www.youtube.com/embed/xzJwVsbiNZw" title="অনলাইন ব্যাচ (৬ষ্ঠ-১০ম শ্রেণি) | OVC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                                <div className="card-body d-flex justify-content-center align-items-stretch flex-column mb-4 align-self-stretch">
                                    <div className="ratio ratio-4x3">
                                        <iframe width="290" height="198" src="https://www.youtube.com/embed/5WLFPNGb6OE" title="যতই হোক প্রশ্ন, ক্লাসেই সব সমাধান! | অনলাইন ব্যাচ ২০২৩ (৬ষ্ঠ-১০ম শ্রেণি) | OVC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                <Button btntext="আপনার ক্লাস বেছে নিন" />

            </div>
            {/* SSC & HSC */}
            <div className="container-fluid" style={{ backgroundColor: "#F4F7FD" }}>
                <div className="row">
                    <div className="container" style={{ maxWidth: "1280px" }}>
                        <div className="container" style={{ margin: "100px 0px" }}>
                            <div className="first text-center">
                                <p style={{ color: "#306BF4" }}><img src={bag} alt="" style={{ width: "20px" }} className="m-2" /><b>SSC & HSC</b></p>
                                <h1><b>SSC ও HSC শিক্ষার্থীদের জন্য
                                </b></h1>
                            </div>
                        </div>
                        <div className="container" style={{ margin: "100px 0px" }}>
                            <div className="row justify-content-center">

                                <Card title="HSC 25 অনলাইন ব্যাচ সকল বিষয় " img={hsc} price="৳ 4500" className="col-md-3" />
                                <Card title="HSC 2024 ক্র্যাশ কোর্স - প্রথম পত্র" img={c1} price="৳ 2500" className="col-md-3" />
                                <Card title="HSC 24 ক্র্যাশ কোর্স - দ্বিতীয় পত্র" img={c2} price="৳ 2500" className="col-md-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-white justify-content-center align-items-center" style={{ backgroundColor: "#000000" }}>
                <div className="row">
                    <div className="container " style={{ maxWidth: "1280px" }}>
                        <div className="container mt-5" style={{ margin: "100px 0px" }}>
                            <div className="first text-center">
                                <p className="text-white" style={{ color: "#306BF4" }}><img src={skill} alt="" style={{ width: "50px" }} className=" img-fluid" /><b>স্কিলস</b></p>
                                <h1><b>দেশসেরা স্কিল ডেভেলপমেন্ট প্লাটফর্ম
                                </b></h1>
                                <div className="text">
                                    <p className="p-3">
                                        <FontAwesomeIcon icon={faCircleCheck} size="xl" style={{ color: "#005eff", }} className="mx-3" />  দেশসেরা শিক্ষক
                                        <FontAwesomeIcon icon={faCircleCheck} size="xl" style={{ color: "#005eff", }} className="mx-3" />
                                        ৫ লাখ+শিক্ষার্থী
                                        <FontAwesomeIcon icon={faCircleCheck} size="xl" style={{ color: "#005eff", }} className="mx-3" />
                                        ৭০+ অনলাইন কোর্স
                                    </p>
                                </div>
                            </div>
                            <div className="container mt-5">
                                <div className="row justify-content-center">
                                    <Card title="ঘরে বসে Spoken English" img={eng} bis="বিস্তারিত" className="col-md-3" />
                                    <Card title="সহজে Spoken আরবি" img={arbi} bis=" বিস্তারিত" className="col-md-3" />
                                    <Card title="IELTS Reading & Listening" img={mock} bis=" বিস্তারিত" className="col-md-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button btntext="সকল কোর্স" className="mb-3" />
                </div>

            </div>
            <div className="container-fluid" style={{ backgroundColor: "#F4F7FD" }}>
                <div className="row">
                    <div className="container" style={{ maxWidth: "1280px" }}>
                        <Top img={adm} short="ভর্তি পরীক্ষা" color="red" title="স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি" sht="ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের পথ এখানেই।" />
                    </div>
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <Card title="মেডিকেল এডমিশন কোর্স +মেডিকেল এডমিশন - ২০২৩" img={medical} bis="বিস্তারিত" className="col-md-3" />
                            <Card title="ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২৩" img={a_unit} bis=" বিস্তারিত" className="col-md-3" />
                            <Card title="ভার্সিটি B Unit + গুচ্ছ এডমিশন কোর্স - ২০২৩" img={b_unit} bis=" বিস্তারিত" className="col-md-3" />
                            <Card title="ভার্সিটি C Unit + গুচ্ছ এডমিশন কোর্স - ২০২৩" img={c_unit} bis=" বিস্তারিত" className="col-md-3" />
                        </div>
                    </div>
                    <Button btntext="সকল কোর্স" />
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: "#F4F7FD" }}>
                <div className="row">
                    <div className="container " style={{ maxWidth: "1280px" }}>
                        <Top img={job} short="চাকরি প্রস্তুতি" color="red" title="সরকারি চাকরির সর্বোচ্চ প্রস্তুতি" sht="বিসিএস কিংবা ব্যাংকে চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!
" />
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <Card title="ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২৩" img={a_unit} bis=" বিস্তারিত" className="col-md-3" />
                        <Card title="ভার্সিটি B Unit + গুচ্ছ এডমিশন কোর্স - ২০২৩" img={b_unit} bis=" বিস্তারিত" className="col-md-3" />
                        <Card title="ভার্সিটি B Unit + গুচ্ছ এডমিশন কোর্স - ২০২৩" img={b_unit} bis=" বিস্তারিত" className="col-md-3" />
                        <Card title="ভার্সিটি B Unit + গুচ্ছ এডমিশন কোর্স - ২০২৩" img={b_unit} bis=" বিস্তারিত" className="col-md-3" />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <Top title="কেন আমরাই শিক্ষার্থী ও " titles="অভিভাবকগণের প্রথম পছন্দ?" />
                </div>
                <div className="row">
                    <Card text="কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ করে, “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে ভালো লেগেছে “Writing Part”।
" className="col-md-4" comment="Tahiya Faiza
" occu="Teaching Assistant, Brac University

" />
                    <Card text="অফলাইনে শেখার মত সময় হয়ে উঠছিল না তাই অনলাইন কোর্স কে বেছে নেওয়া । কোর্সটিতে খুব সুন্দর করে হরফ তানভীন মাদ পড়ানো হয়েছে । খুব সহজেই প্রতিদিন প্র্যাকটিস করে খুব দ্রুত শুদ্ধ তেলাওয়াত আয়ত্ত করতে পেরেছি।
।
" className="col-md-4" comment="Zakirul Islam" occu="Businessma" />
                    <Card text="কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ করে, “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে ভালো লেগেছে “Writing Part”।
" className="col-md-4" comment="Tahiya Faiza
" occu="Teaching Assistant, Brac University

" />
                </div>
            </div>

            <div className="container mt-5 text-white" style={{ backgroundColor: '#050610', borderRadius: "20px" }}>
                <div className="row">
                    <div className="col-md-8 p-5">
                        <h1 className="mt-3">সেরা শিক্ষকের তৈরি ক্লাস নোট এবং লেকচার শিট প্রয়োজন?</h1>
                        <div className="col-md-12 text-white d-flex " style={{ margin: "20px 0px" }}>
                            <div className="link">
                                <Link className="nav-link btn p-3" to="" style={{ backgroundColor: "#198B46" }}>

                                    ফ্রি ডাউনলোড করুন </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={sheet} alt="" />
                    </div>
                </div>
            </div>
            {/* আজই জয়েন করুন */}
            <div className="container bgimg mt-5">
                <div className="row">
                    <Top title="আজই জয়েন করুন" titles="বাংলাদেশের সবচেয়ে বড় লার্নিং প্ল্যাটফর্মে" />
                    <Button btntext="জয়েন করুন" />
                </div>
            </div>
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                            <div className=" m-2" style={{ backgroundColor: "#E3FDF2", padding: "25px", borderRadius: "10px" }}>
                                <h2>1 কোটি +</h2>
                                <p>মোট শিক্ষার্থী</p>
                            </div>
                            <div className=" m-2" style={{ backgroundColor: "#F9F7E6", padding: "25px", borderRadius: "10px" }}>
                                <h2>47 লক্ষ +</h2>
                                <p>অ্যাপ ব্যবহারকারী</p>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <div className="m-2" style={{ backgroundColor: "#FFF2F2", padding: "25px", borderRadius: "10px" }}>
                                <h2>3,000+</h2>
                                <p>স্টাডি ম্যাটেরিয়াল</p>
                            </div>
                            <div className="m-2" style={{ backgroundColor: "#F9F7E6", padding: "25px", borderRadius: "10px" }}>
                                <h2>24,000+</h2>
                                <p>লার্নিং কন্টেন্ট</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <img src={girl} alt="" srcset="" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="container p-5 mt-5" style={{backgroundColor:"#111827" , color:"white",borderRadius:"10px"}}>
                <div className="row">
                    <div className="col-md-10 d-flex justify-content-start align-items-center">
                        <div>
                            <h1>
                                কোর্স সম্পর্কিত যেকোনো তথ্যের জন্য কল করুন
                            </h1>
                            <p>
                                সকাল ৮টা থেকে রাত ১১টা পর্যন্ত
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2"><Button btntext="16910" /></div>
                </div>
            </div>

            <div className="container p-5" style={{background: "linear-gradient(90deg, #1CB5E0 0%, #000851 100%)" , color:"white",borderRadius:"10px",marginTop:"100px"}}>
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-start align-items-center">
                        <div >
                            <h1 className="mb-3">
                            ডাউনলোড করুন আমাদের মোবাইল অ্যাপ, শেখা শুরু করুন আজ থেকেই
                            </h1>
                            <div className="image">
                                <img src={play} alt="" srcset="" className="mx-3"/>
                                <img src={ios} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={app} alt="" srcset="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </>

    );
}

export default home;
