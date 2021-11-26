import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import globalVariables from "../../styles/globalVariables"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faInstagram, faYoutube, faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons"

const StyledFooter = styled.div`
    background: #F9F9F9;
    display: flex;
    gap: 100px;
    padding: 60px 120px;
    color: ${globalVariables.color.gray};
    .about {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 24px;
        p {
            max-width: 500px;
        }
    }
    .hyperlink {
        display: flex;
        gap: 70px;
        ul li {
            margin: 10px 0;
            list-style: none;
        }
    }
    #linkedin, #instagram, #youtube, #twitter, #medium {
        display: flex;
        gap: 10px;
    }
    .icon {
        width: 15px;
    }
`

export const Footer = () => {
    return (
        <StyledFooter>
            <div className="about">
                <Image src="/images/logo2.png" width="140px" height="30px" alt="SoftConnect Logo" />
                <p>
                    SoftConnect.id adalah platform yang menghubungkan software dan layanan bisnis dengan calon pembeli secara mudah dan informatif. Kami memiliki misi untuk mengakselerasi digital ekosistem di Indonesia dengan menumbuhkan kepercayaan para konsumen teknologi.
                </p>
            </div>
            <div className="hyperlink">
                <div id="social-media">
                    <h4>Social Media</h4>
                    <ul>
                        <li>
                            <Link href="" >
                                <a id="linkedin">
                                    <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                                    LinkedIn
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="" >
                                <a id="instagram">
                                    <FontAwesomeIcon className="icon" icon={faInstagram} />
                                    Instagram
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="" >
                                <a id="youtube">
                                    <FontAwesomeIcon className="icon" icon={faYoutube} />
                                    Youtube
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="" >
                                <a id="twitter">
                                    <FontAwesomeIcon className="icon" icon={faTwitter} />
                                    Twitter
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="" >
                                <a id="medium">
                                <FontAwesomeIcon className="icon" icon={faMedium} />
                                    Medium
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div id="pembeli">
                    <h4>Pembeli</h4>
                    <ul>
                        <li><Link href="" ><a>Tulis Ulasan</a></Link></li>
                        <li><Link href="" ><a>Jelajahi Kategori</a></Link></li>
                        <li><Link href="" ><a>Blog Pembeli</a></Link></li>
                    </ul>
                </div>
                <div id="penjual">
                    <h4>Penjual</h4>
                    <ul>
                        <li><Link href="" ><a>Buat Profil</a></Link></li>
                        <li><Link href="" ><a>Dashboard Penjual</a></Link></li>
                        <li><Link href="" ><a>Panduan</a></Link></li>
                        <li><Link href="" ><a>Blog Penjual</a></Link></li>
                    </ul>
                </div>
                <div id="perusahaan">
                    <h4>Perusahaan</h4>
                    <ul>
                        <li><Link href="" ><a>Tentang Kami</a></Link></li>
                        <li><Link href="" ><a>Kebijakan Privasi</a></Link></li>
                        <li><Link href="" ><a>Hubungi Kami</a></Link></li>
                        <li><Link href="" ><a>Pusat Bantuan</a></Link></li>
                    </ul>
                </div>
            </div>
        </StyledFooter>
    )
}
