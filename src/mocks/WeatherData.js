/**
 * This is the default state of the SunsetView 
 * context component which displays the image 
 * and sunset results.
 */
export const defaultContext = ({
    time: new Date().toLocaleTimeString([], {hour12: true, timeStyle:'short'}),
    title: 'Perfect Sunset',
    description: 'This app allows you to check the weather conditions for the sunset today.'
})

/**
 * This is the sample data used for the 
 * WeatherChart component to test that it renders 
 * appropriately.
 */
export const testData = ({
    data: {
        wind: 5.7,
        clouds: 20,
        humidity: 70,
        locale: "Port of Spain, TT",
        time: new Date().toLocaleTimeString([], {timeStyle:'short'})
    }
});

/**
 * This is the sample data used for the 
 * SunsetView context component to diplay the
 * sunset results.
 */
export const testSunsetViewSuccess = ({
    time: new Date().toLocaleTimeString([], {hour12: true}),
    title: "Perfect Sunset",
    description: "This couldn't get any better",
    rating: 20
})

export const successData = ({

})

export const errorData = ({
    
})