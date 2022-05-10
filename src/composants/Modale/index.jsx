function Modale({texte, fermetureModale}) {
    return (
        <div id="confirmation" className='modale'>
            <div className='fenetreModale'>
                <p>{texte}</p>
                <p className='fermetureModale' onClick={fermetureModale}>&times;</p>
            </div>
        </div>
    )
}

export default Modale