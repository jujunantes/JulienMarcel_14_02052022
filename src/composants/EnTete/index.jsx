import Logo from '../../medias/logo.svg'
function EnTete() {
    return (
        <div className="col-md-12 py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-md-2">
              <img src={Logo} alt='Logo de HRnet' className='logo' />
            </div>
            <div className="col-md-4"><h1 className='title'>HRnet</h1></div>
          </div>
        </div>
    )
}

export default EnTete