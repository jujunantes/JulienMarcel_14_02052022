import './JModale.css'

function JModale({title, text, btn_text,  closingModale}) {
    if (title === undefined) {title = 'Lorem Ipsum'}
    if (text === undefined) {text = 'Lorem Ipsum'}
    if (btn_text === undefined) {btn_text = 'OK'}
    return (
        <div id="confirmation" className='JModale'>
            <div className='JModale_window JModale_blur'>
                <h3 className='JModale_h3'>{title}</h3>
                <p className='JModale_p'>{text}</p>
                <p className='JModale_close-button' onClick={closingModale}>&#10006;</p>
                <p><button className="JModale_button" onClick={closingModale}>{btn_text}</button></p>
            </div>
        </div>
    )
}

export default JModale