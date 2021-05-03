import './HomePageButton.css'

const HomePageButton = ({ text1, text2, onClick }) => {
    return (
        <button onClick={onClick} className='homepagebutton'>
            <a className='bigpart'>{text1}</a>
            <a className='smallpart'>{text2}</a>
        </button>
    )
}

export default HomePageButton
