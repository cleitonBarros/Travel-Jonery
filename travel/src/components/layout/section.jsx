import { useTranslation } from "react-i18next"

import Section from "../CStyled/Section"
import Image from "../CStyled/Image"
import Box from "../CStyled/Box"
import Title from "../CStyled/Title"
import Point from "../CStyled/Point"
import Listplace from "../CStyled/Listplace"


import pointImg from "../../assets/point.svg"

import Data from '../../data/data'

function Sec(props){
    const {t} = useTranslation();
    
    return(
        <Section id={props.value ? "": 'dark'}>
           
        {
            Data.map((item,index) =>{
                return(
                    <Box key={index}>
                        <div className="boxImg">
                            <Image src={item.imageUrl} alt={item.title} />
                        </div>
                        <Listplace>
                            <li className="local">
                                <div>
                                    <Point src={pointImg} />
                                    <p>{item.location}</p>
                                </div>
                                <a href={item.googleMapsUrl}>View on Google Maps</a>
                            </li>
                            <li >
                                <Title>{item.title}</Title>
                            </li>
                            <li className="days">{item.startDate}-{item.endDate}</li>
                            <li className="description">{item.description}</li>
                        </Listplace>

                        
                    </Box>
                   
                )
            })

        }


    </Section>
    )
}
export default Sec