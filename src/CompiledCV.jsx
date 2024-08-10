import "./CompiledCV.css";


import CVSection from "./CVSection.jsx";
import CVHeader from "./CVHeader.jsx";

function CompiledCV(props) {
    return (
        <>
        <section className="compiledCV">
        <CVHeader cv={props.cv} />

        <CVSection list={props.cv.education}>Education</CVSection>
        <CVSection list={props.cv.experiences}>Professional Experience</CVSection>
    </section>

        </>
    )
}

export default CompiledCV;