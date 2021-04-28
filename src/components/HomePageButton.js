import './HomePageButton.css'

const HomePageButton = ({ text1, text2, onClick }) => {
    return (
        <button onClick={onClick} className='homepagebutton'>
            <a className='versal'>{text1}</a>
            <a className='gemen'>{text2}</a>
        </button>
    )
}

export default HomePageButton
