import logo from "../assets/logo.png"
import Home from "./Home.jsx"
import Footer from "./footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import "../css/nav.css"
import { Link } from "react-router-dom"
function nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary card bg">
                <div className="container">
                    <Link to="/" className="navbar-brand" href="#"><img src={logo} className="img-fluid logo " /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ক্লাস ৫-১২
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">এইচএসসি</Link></li>
                                    <li><Link className="dropdown-item" href="#">দশম শ্রেনি</Link></li>
                                    <li><Link className="dropdown-item" href="#">নবম শ্রেনি</Link></li>
                                    <li><Link className="dropdown-item" href="#">অষ্টম শ্রেনি</Link></li>
                                    <li><Link className="dropdown-item" href="#">সপ্তম শ্রেনি</Link></li>
                                    <li><Link className="dropdown-item" href="#">ষষ্ঠ শ্রেনি</Link></li>
                                    <li><Link className="dropdown-item" href="#">পঞ্চম শ্রেনি</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    স্কিলস
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">সকল কোর্সসমূহ</Link></li>
                                    <li><Link className="dropdown-item" href="#">ভাষা শিক্ষা</Link></li>
                                    <li><Link className="dropdown-item" href="#">ক্যারিয়ার রেডিনেস</Link></li>
                                    <li><Link className="dropdown-item" href="#">স্কিলস এন্ড আইটি</Link></li>
                                    <li><Link className="dropdown-item" href="#">বান্ডেল </Link></li>
                                    <li><Link className="dropdown-item" href="#">ফ্রিল্যান্সিং </Link></li>
                                    <li><Link className="dropdown-item" href="#">ডিজাইন এন্ড ক্রিয়েটিভ</Link></li>
                                    <li><Link className="dropdown-item" href="#">কিডস কোর্সসমূহ</Link></li>
                                    <li><Link className="dropdown-item" href="#">প্রফেশনাল কোর্সসমূহ</Link></li>
                                    <li><Link className="dropdown-item" href="#">ফ্রি কোর্সসমূহ</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="#">ভর্তি পরীক্ষা</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" href="#">চাকরি প্রস্তুতি</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    অনলাইন ব্যাচ
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">সকল কোর্সসমূহ</Link></li>
                                    <li><Link className="dropdown-item" href="#">ভাষা শিক্ষা</Link></li>
                                    <li><Link className="dropdown-item" href="#">ক্যারিয়ার রেডিনেস</Link></li>
                                    <li><Link className="dropdown-item" href="#">স্কিলস এন্ড আইটি</Link></li>
                                    <li><Link className="dropdown-item" href="#">বান্ডেল </Link></li>
                                    <li><Link className="dropdown-item" href="#">ফ্রিল্যান্সিং </Link></li>
                                    <li><Link className="dropdown-item" href="#">ডিজাইন এন্ড ক্রিয়েটিভ</Link></li>
                                    <li><Link className="dropdown-item" href="#">কিডস কোর্সসমূহ</Link></li>
                                    <li><Link className="dropdown-item" href="#">প্রফেশনাল কোর্সসমূহ</Link></li>
                                    <li><Link className="dropdown-item" href="#">ফ্রি কোর্সসমূহ</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <div className="d-flex">
                            <div className="lgbtn">
                                <Link href="tel:+880 16516" className="btn">
                                    <FontAwesomeIcon icon={faPhone} style={{ color: "#1CAB55", }} />
                                    16910
                                </Link>
                            </div>
                            <div className="lgbtn login p-1 mx-2 d-flex justify-contents-center align-items-center">
                                <Link to="/login" className="nav-link">লগ-ইন</Link>
                            </div>
                            <div className="lgbtn login p-1   d-flex justify-contents-center align-items-center">
                                <Link to="/signup" className="nav-link">সাইন-আপ</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default nav