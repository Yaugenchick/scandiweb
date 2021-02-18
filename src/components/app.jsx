import React from 'react';
import dataForCarousel from '../dataForCarousel/dataForCarousel';

import pic2 from '../pictures/pic2.jpg';
import pic5 from '../pictures/pic5.jpg';
import pic7 from '../pictures/pic7.jpg';
import pic10 from '../pictures/pic10.jpg';
import pic13 from '../pictures/pic13.jpg';

import Carousel from './carousel';

const SecondCarousel = Carousel;

const WIDTH = 350;
const HEIGHT = 300;

const Func0 = () => (
    <div
        style={{
            height: '400px',
            fontSize: '20px',
            padding: '30px',
            background: 'goldenrod',
        }}
    >
        <div>Some header</div>
        <img src={pic5} width={WIDTH} height={HEIGHT} alt="" />
        <button type="button" style={{ margin: '0 0 0 50px' }}>
            add your basket
        </button>
    </div>
);
const Func1 = () => (
    <div
        style={{
            height: '400px',
            fontSize: '20px',
            padding: '30px',
            background: 'goldenrod',
        }}
    >
        <div>Some header</div>
        <img src={pic7} width={WIDTH} height={HEIGHT} alt="" />
        <button type="button" style={{ margin: '0 0 0 50px' }}>
            add your basket
        </button>
    </div>
);
const Func2 = () => (
    <div
        style={{
            height: '400px',
            fontSize: '20px',
            padding: '30px',
            background: 'goldenrod',
        }}
    >
        <div>Some header</div>
        <img src={pic2} width={WIDTH} height={HEIGHT} alt="" />
        <button type="button" style={{ margin: '0 0 0 50px' }}>
            add your basket
        </button>
    </div>
);
const Func3 = () => (
    <div
        style={{
            height: '400px',
            fontSize: '20px',
            padding: '30px',
            background: 'goldenrod',
        }}
    >
        <div>Some header</div>
        <img src={pic13} width={WIDTH} height={HEIGHT} alt="" />
        <button type="button" style={{ margin: '0 0 0 50px' }}>
            add your basket
        </button>
    </div>
);
const Func4 = () => (
    <div
        style={{
            height: '400px',
            fontSize: '20px',
            padding: '30px',
            background: 'goldenrod',
        }}
    >
        <div>Some header</div>
        <img src={pic10} width={WIDTH} height={HEIGHT} alt="" />
        <button type="button" style={{ margin: '0 0 0 50px' }}>
            add your basket
        </button>
    </div>
);

const App = () => {
    const forSecondCarousel = dataForCarousel.map((item) => (
        <div
            key={item.id}
            style={{
                position: 'relative',
                height: '400px',
                backgroundImage: `url(${item.url})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 0,
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: 30,
                    left: 200,
                    color: '#fff',
                }}
            >
                <h1>Some Header</h1>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: 100,
                    left: 200,
                }}
            >
                Some text
            </div>
            <button
                type="button"
                style={{
                    position: 'absolute',
                    bottom: 50,
                    right: 50,
                }}
            >
                add your basket
            </button>
        </div>
    ));
    return (
        <>
            <Carousel>
                <div>
                    <Func0 />
                </div>
                <div>
                    <Func1 />
                </div>
                <div>
                    <Func2 />
                </div>
                <div>
                    <Func3 />
                </div>
                <div>
                    <Func4 />
                </div>
            </Carousel>
            <SecondCarousel
                animationType="scale"
                controls={false}
                dotTheme="rgb(100,25,55)"
                activeDotTheme="goldenrod"
                buttonsTheme="goldenrod"
            >
                {forSecondCarousel}
            </SecondCarousel>
        </>
    );
};
export default App;
