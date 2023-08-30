import logo from "../assets/logo.png"
import Home from "../component/Home.jsx"
import Footer from "./footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import "../css/nav.css"
function nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary card bg">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} className="img-fluid logo " /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse mx-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ক্লাস ৫-১২
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">এইচএসসি</a></li>
                                    <li><a className="dropdown-item" href="#">দশম শ্রেনি</a></li>
                                    <li><a className="dropdown-item" href="#">নবম শ্রেনি</a></li>
                                    <li><a className="dropdown-item" href="#">অষ্টম শ্রেনি</a></li>
                                    <li><a className="dropdown-item" href="#">সপ্তম শ্রেনি</a></li>
                                    <li><a className="dropdown-item" href="#">ষষ্ঠ শ্রেনি</a></li>
                                    <li><a className="dropdown-item" href="#">পঞ্চম শ্রেনি</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    স্কিলস
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">সকল কোর্সসমূহ</a></li>
                                    <li><a className="dropdown-item" href="#">ভাষা শিক্ষা</a></li>
                                    <li><a className="dropdown-item" href="#">ক্যারিয়ার রেডিনেস</a></li>
                                    <li><a className="dropdown-item" href="#">স্কিলস এন্ড আইটি</a></li>
                                    <li><a className="dropdown-item" href="#">বান্ডেল </a></li>
                                    <li><a className="dropdown-item" href="#">ফ্রিল্যান্সিং </a></li>
                                    <li><a className="dropdown-item" href="#">ডিজাইন এন্ড ক্রিয়েটিভ</a></li>
                                    <li><a className="dropdown-item" href="#">কিডস কোর্সসমূহ</a></li>
                                    <li><a className="dropdown-item" href="#">প্রফেশনাল কোর্সসমূহ</a></li>
                                    <li><a className="dropdown-item" href="#">ফ্রি কোর্সসমূহ</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">ভর্তি পরীক্ষা</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">চাকরি প্রস্তুতি</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    অনলাইন ব্যাচ
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">সকল কোর্সসমূহ</a></li>
                                    <li><a className="dropdown-item" href="#">ভাষা শিক্ষা</a></li>
                                    <li><a className="dropdown-item" href="#">ক্যারিয়ার রেডিনেস</a></li>
                                    <li><a className="dropdown-item" href="#">স্কিলস এন্ড আইটি</a></li>
                                    <li><a className="dropdown-item" href="#">বান্ডেল </a></li>
                                    <li><a className="dropdown-item" href="#">ফ্রিল্যান্সিং </a></li>
                                    <li><a className="dropdown-item" href="#">ডিজাইন এন্ড ক্রিয়েটিভ</a></li>
                                    <li><a className="dropdown-item" href="#">কিডস কোর্সসমূহ</a></li>
                                    <li><a className="dropdown-item" href="#">প্রফেশনাল কোর্সসমূহ</a></li>
                                    <li><a className="dropdown-item" href="#">ফ্রি কোর্সসমূহ</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <div className="d-flex">
                            <div className="lgbtn">
                                <a href="tel:+880 16516" className="btn">
                                    <FontAwesomeIcon icon={faPhone} style={{ color: "#1CAB55", }} />
                                    16910
                                </a>
                            </div>
                            <div className="lgbtn login p-1 d-flex justify-contents-center align-items-center">
                                <a href="" className="nav-link">লগ-ইন</a>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
            <Home />
            <Footer />
        </>
    )
}

export default nav