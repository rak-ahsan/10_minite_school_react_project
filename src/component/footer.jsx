import Logo from "../assets/logo.PNG"
import play from "../assets/google-play-icon.webp"
import ios from "../assets/ios-store-icon.webp"
import { Link } from 'react-router-dom'
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
const footer = () => {
  return (
    <div className="container mt-5 mb-5">
      <hr />
      <div className="row mt-5">
        <div className="col-md-4">
          <img src={Logo} className='img-fluid' style={{ width: "200px" }} />
          <p><b>ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</b></p>
          <div className="main d-flex">
            <div className="img1">
              <img src={play} alt="" srcset="" />
            </div>
            <div className="img2 mx-2">
              <img src={ios} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex">
          <div className="col-md-6">
            <b>কোম্পানি</b>
            <Link className="nav-link fontb pt-3">ক্যারিয়ার </Link>
            <Link className="nav-link fontb pt-3">শিক্ষক হিসেবে জয়েন</Link>
            <Link className="nav-link fontb pt-3">অ্যাফিলিয়েট হতে চাইলে</Link>
            <Link className="nav-link fontb pt-3">প্রাইভেসি পলিসি</Link>
            <Link className="nav-link fontb pt-3">রিফান্ড পলিসি</Link>
            <Link className="nav-link fontb pt-3">ব্যবহারকারীর শর্তাবলি</Link>
          </div>
          <div className="col-md-6">
            <b>অন্যান্য</b>
            <Link className="nav-link fontb pt-3">ব্লগ</Link>
            <Link className="nav-link fontb pt-3">বুক স্টোর</Link>
            <Link className="nav-link fontb pt-3">নোটস এবং গাইডস</Link>
            <Link className="nav-link fontb pt-3">অফার সমূহ</Link>
            <Link className="nav-link fontb pt-3">ভেরিফাই সার্টিফিকেট</Link>
            <Link className="nav-link fontb pt-3">ফ্রি ডাউনলোড</Link>
          </div>
        </div>
        <div className="col-md-4">
          <p><b>ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</b></p>
          <p>Call Us - <span style={{ color: "#1cab55" }}>16910</span></p>
          <p>Email Us - <span style={{ color: "#1cab55" }}>support@10minuteschool.com</span></p>
          <div className="icon">
            <span style={{ fontSize: "30px", padding: "10px" }}><ImFacebook2 /></span>
            <span style={{ fontSize: "30px", padding: "10px" }}><FaTwitterSquare /></span>
            <span style={{ fontSize: "30px", padding: "10px" }}><FaInstagramSquare /></span>
            <span style={{ fontSize: "30px", padding: "10px" }}><BsLinkedin /></span>
            <span style={{ fontSize: "30px", padding: "10px" }}><SiTiktok /></span>

          </div>
        </div>
      </div>
      <div className="credit text-center mt-5">
        স্বত্ব © ২০১৫ - ২০২৩ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
      </div>
    </div>
  )
}

export default footer