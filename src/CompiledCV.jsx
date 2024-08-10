import "./CompiledCV.css";


import CVSection from "./CVSection.jsx";
import CVHeader from "./CVHeader.jsx";

function CompiledCV(props) {
    return (
        <>
        <section className="compiledCV">
        <CVHeader cv={props.cv} />

        <CVSection sectionName="Education" list={props.cv.education} />
        <CVSection sectionName="Professional Experience" list={props.cv.experiences} />
    </section>

        </>
    )
}

export default CompiledCV;