import Logo from '../../medias/logo.svg'
function EnTete() {
    return (
        <div className="col-md-12 py-5 text-center">
          <div class="row justify-content-center">
            <div class="col-md-3">
              <img src={Logo} alt='Logo de HRnet' className='logo' />
            </div>
            <div class="col-md-3"><h1 className='title'>HRnet</h1></div>
          </div>
        </div>
    )
}

export default EnTete