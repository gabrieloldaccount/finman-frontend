import HomePageButton from "./HomePageButton";

const HomePage = () => {
    return(
        <container className='homebuttons'>
            <HomePageButton text1={'create'} text2={'new invoice'}/>
            <HomePageButton text1={'product'} text2={'catalog'} />
            <HomePageButton text1={'all'} text2={'invoices'} />
            <HomePageButton text1={'my'} text2={'profile'} />
        </container>
    )
}

export default HomePage