import React from 'react';

const BarChart = () => {
    const colors = ['#003DA5', '#316FD9', '#688DCC', '#9FC3FF', '#9FC3FF', "#2A64F8", '#003DA5', '#316FD9', '#688DCC', '#9FC3FF']

    // Data for the bar graph
    const data = [
        { label: 'Linux', value: 10 },//1M
        { label: 'Mac', value: 17 },//5M
        { label: 'windows', value: 35 },//50M
        { label: 'ios', value: 40 },//10M
        { label: 'android', value: 10 },//18M
        { label: 'other', value: 50 },//20M
    ];

    // Finding the maximum value to adjust the bar heights
    const max = Math.max(...data.map(item => item.value));

    // Define the Y-axis labels in millions
    const roundOffY_axis = Math.ceil(max / 10) * 10
    const yAxisValues = [];
    var y = 0
    while (y <= roundOffY_axis) {
        yAxisValues.push(y)
        y = y + 10
    }

    // consider as 10M = 3px
    const height = 2.5

    // consider as roundOffY_axis =  1
    const opacity = 1

    return (
        <div className='w-fit p-8'>
            <div className='relative font-Montserratm font-normal text-xs pl-8'
                style={{ width: `${81 * data.length}px` }}
            >
                <div className='flex flex-col-reverse justify-between'
                    style={{ height: `${roundOffY_axis * height}px` }}
                >
                    {yAxisValues.map((value, index) => (
                        <div key={index} className='relative'>
                            <div className='absolute -left-5 -translate-x-1/2 -translate-y-1/2 text-right'>{value}M</div>
                            <div className='border-b w-full'></div>
                        </div>
                    ))}
                </div>
                <div className='absolute bottom-0 left-8'>
                    <div className='flex justify-end items-end'>
                        {data.map((item, index) => {
                            return (
                                <div key={index} className={`relative capitalize text-center px-5 text-black/40`}>
                                    <div className='peer rounded-t mx-auto cursor-pointer'
                                        style={{
                                            height: `${item.value * height}px`,
                                            width: '40px',
                                            // background: `rgba(0, 0, 255, ${(opacity / roundOffY_axis) * item.value})`
                                            background: `${colors[index]}`

                                        }}>
                                    </div>
                                    <span className='absolute -bottom-7 left-1/2 -translate-x-1/2 -translate-y-1/2'>{item.label}</span>
                                    <div className={`absolute whitespace-nowrap w-fit text-white px-2 py-1  top-0 opacity-0 peer-hover:opacity-100  peer-hover:-top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded transition-all duration-300 -z-10 peer-hover:z-10`}
                                        style={{ background: `blue` }}
                                    >
                                        {item.value} M
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BarChart;
