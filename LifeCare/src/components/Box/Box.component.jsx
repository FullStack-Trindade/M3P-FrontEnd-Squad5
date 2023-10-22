import * as Styled from './Box.styles';
import { MdPeople, MdNewspaper, MdBook } from 'react-icons/md';


export const BoxComponent = () => {

    const datas = [
        {
            id: 1,
            img: <MdPeople/>,
            number: 0,
            name: 'Pacientes',
        },
        {
            id: 2,
            img: <MdNewspaper/>,
            number: 0,
            name: 'Consultas',
        },
        {
            id: 3,
            img: <MdBook/>,
            number: 0,
            name: 'Exames',
        }
    ]

    return(
        <Styled.BoxWrapper>
            {datas.map((data, index) => {
                return(
                    <Styled.Box key={index}>
                        <Styled.Tag>{data.img}</Styled.Tag>
                        <Styled.Number>{data.number}</Styled.Number>
                        <Styled.ServiceName>{data.name}</Styled.ServiceName>
                    </Styled.Box>
                );
            })}
        </Styled.BoxWrapper>
    );
}