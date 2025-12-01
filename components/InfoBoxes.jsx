import InfoBox from "./InfoBox"
const InfoBoxes = () => {
    return (
        <section>
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <InfoBox
                        heading='For Renters'
                        backroundColor='bg-gray-100'
                        buttonInfo={{
                            text: 'Browse Properties',
                            link: '/properties',
                            backroundColor: 'bg-gray-700'
                        }}
                    >Find your dream rental property. Bookmark properties and contact
                        owners.</InfoBox>

                    <InfoBox
                        heading='For Property Owner'
                        backroundColor='bg-blue-100'
                        buttonInfo={{
                            text: 'Add Properties',
                            link: '/properties/add',
                            backroundColor: 'bg-blue-500'
                        }}
                    >List your properties and reach potential tenants. Rent as an
                        airbnb or long term.</InfoBox>

                </div>
            </div>
        </section>
    )
}

export default InfoBoxes