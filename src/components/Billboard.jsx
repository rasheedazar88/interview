import React from 'react'
import SampleData from '../config'

const Billboard = () => {

    console.log(SampleData)
  return (
    <div className='chart'>
        <h5>Chart Data</h5>

        <div className='chart-container'>
            
            <ul className='yaxis'>
            <div className='yaxis-data'>
                {
                    SampleData.yAxisData.map((data)=><div><span>{data}</span></div>)
                }
            </div>
                {
                    SampleData.yAxis.map((yitem)=>
                        <li className='yaxis-item'>
                            <span className='yaxis-item-bar newyork' style={{height: `${yitem['New York'] / 10}px`}}></span>
                            <span className='yaxis-item-bar washington' style={{height: `${yitem['Washington'] / 10}px`}}></span>
                            <span className='yaxis-item-bar houseton' style={{height: `${yitem['Houston'] / 10}px`}}></span>
                        </li>
                    )
                }
            </ul>
            <ul className='xaxis'>
                {
                    SampleData.xAxis.map((xItem)=>
                        <li>{xItem}</li>
                    )
                }
            </ul>
        </div>
    </div>
  )
}

export default Billboard
