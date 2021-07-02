import './style.css'
import {bloks} from "./bloks"
import DirectionsCard from "./descript"
const News = () => {
    return <>
        <div className={'department_description'}>
            <div className={'department_description_name'}>Опиание направлений и специальностей</div>
            <div className={'department_description_blocks'}>
                { bloks.map((blok)=><div className={'department_description_block_of_information'}>

                    <div className={'bloc_information_about_grade'}>{blok.NumberOfGrade}</div>
                    <div className={'bloc_information_about_direction'}><span>{blok.Direction}</span> {blok.AboutDirection}
                        <br/> <span>{blok.Profile}</span>{blok.AboutProfile}
                    </div>
                    <div className={'bloc_information_about_period1'}>
                        <div><span>{blok.Period}</span><br/>{blok.PeriodOfEducation}</div>
                        <div ><span>{blok.Form}</span><br/>{blok.FormOfEducation}</div>
                        <div><span>{blok.Budget}</span></div>
                    </div >
                </div>)
                    }
            </div>
        </div>


    </>
}

export default News