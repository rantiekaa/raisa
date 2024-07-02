import Copyright from '../../assets/icons/copyright.svg'
import NKOneLogoFooter from '../../assets/imgs/nk1-logo-footer.png'
import Facebook from '../../assets/icons/facebook-icon.svg'
import Whatsapp from '../../assets/icons/whatsapp-icon.svg'
import Instagram from '../../assets/icons/instagram-icon.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="background-footer flex flex-col justify-center px-32 gap-10 pb-32 pt-40">
        <div className="flex justify-center items-center content-center">
          <img src={NKOneLogoFooter} alt="Logo" />
        </div>
        <div className="grid grid-cols-3 grid text-white leading-7">
          <div className="">
            <div className="text-xl font-extrabold mb-2">ADDRESS</div>
            <div>
              Jln. Cendrawasi Blok B No. 31 <br />
              Rasuna Said, Jakarta Selatan, <br />
              DKI Jakarta, Indonesia
            </div>
          </div>
          <div className="">
            <div className="text-xl font-extrabold mb-2">CONTACT US</div>
            <div>082-890-110</div>
            <div className="">Hello@nk1sock.com</div>
          </div>
          <div className="">
            <div className="text-xl font-extrabold mb-2">SUBSCRIBE FOR NEWSLETTER</div>
            <input type="text" placeholder="Enter email address" className="border-b-2 border-white bg-transparent w-full focus:outline-none placeholder:text-white" />
          </div>
        </div>
      </div>
      <div className="mx-32 flex justify-between">
        <div className="flex grow items-center">
          <img alt="copyright" src={Copyright} className="h-min" />
          <p className="">2023 NK1 SOCK. All Right Reserved.</p>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-row px-4 py-4">
            <button className="facebook flex items-center justify-center rounded-full text-white mr-5 w-14 h-14 text-3xl">
              <img alt="facebook" src={Facebook} />
            </button>
            <button className="whatsapp flex items-center justify-center rounded-full text-white mr-5 w-14 h-14 text-3xl">
              <img alt="whatsapp" src={Whatsapp} />
            </button>
            <button className="instagram flex items-center justify-center rounded-full text-white mr-5 w-14 h-14 text-3xl">
              <img alt="instagram" src={Instagram} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
